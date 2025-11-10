import {EventEmitter} from 'events';

import {ipcMain} from 'electron';
import type {BrowserWindow, IpcMainEvent} from 'electron';

import {v4 as uuidv4} from 'uuid';

import type {TypedEmitter, MainEvents, RendererEvents, FilterNever} from '../typings/common';

export class Server {
  emitter: TypedEmitter<MainEvents>;
  destroyed = false;
  win: BrowserWindow;
  id!: string;

  constructor(win: BrowserWindow) {
    this.emitter = new EventEmitter();
    this.win = win;
    this.emit = this.emit.bind(this);

    if (this.destroyed) {
      return;
    }

    const uid = uuidv4();
    this.id = uid;

    ipcMain.on(uid, this.ipcListener);

    // we intentionally subscribe to `on` instead of `once`
    // to support reloading the window and re-initializing
    // the channel
    this.wc.on('did-finish-load', () => {
      try {
        if (!this.win.isDestroyed() && !this.wc.isDestroyed()) {
          (this.wc as {send: (channel: string, uid: string, profileName: string) => void}).send(
            'init',
            uid,
            win.profileName
          );
        }
      } catch (err: any) {
        // Handle EPIPE and IPC errors during initialization
        if (err.code !== 'EPIPE' && err.code !== 'ERR_IPC_CHANNEL_CLOSED') {
          console.error('Error sending init message:', err);
        }
      }
    });
  }

  get wc() {
    return this.win.webContents;
  }

  ipcListener = <U extends keyof MainEvents>(event: IpcMainEvent, {ev, data}: {ev: U; data: MainEvents[U]}) =>
    this.emitter.emit(ev, data);

  on = <U extends keyof MainEvents>(ev: U, fn: (arg0: MainEvents[U]) => void) => {
    this.emitter.on(ev, fn);
    return this;
  };

  once = <U extends keyof MainEvents>(ev: U, fn: (arg0: MainEvents[U]) => void) => {
    this.emitter.once(ev, fn);
    return this;
  };

  emit<U extends Exclude<keyof RendererEvents, FilterNever<RendererEvents>>>(ch: U): boolean;
  emit<U extends FilterNever<RendererEvents>>(ch: U, data: RendererEvents[U]): boolean;
  emit<U extends keyof RendererEvents>(ch: U, data?: RendererEvents[U]) {
    // This check is needed because data-batching can cause extra data to be
    // emitted after the window has already closed
    if (!this.win.isDestroyed() && !this.wc.isDestroyed()) {
      try {
        (this.wc as {send: (id: string, data: any) => void}).send(this.id, {ch, data});
        return true;
      } catch (err: any) {
        // Handle EPIPE and other IPC errors gracefully
        if (
          err.code === 'EPIPE' ||
          err.code === 'ERR_IPC_CHANNEL_CLOSED' ||
          (err as Error).message?.includes('Object has been destroyed')
        ) {
          console.warn('IPC channel closed, cannot send message:', ch);
        } else {
          console.error('Error sending IPC message:', err instanceof Error ? err.message : String(err));
        }
        return false;
      }
    }
    return false;
  }

  destroy() {
    try {
      this.emitter.removeAllListeners();
      if (!this.wc.isDestroyed()) {
        (this.wc as {removeAllListeners: () => void}).removeAllListeners();
      }
      if (this.id) {
        ipcMain.removeListener(this.id, this.ipcListener);
      } else {
        // mark for `genUid` in constructor
        this.destroyed = true;
      }
    } catch (err: any) {
      console.error('Error during RPC cleanup:', err);
    }
  }
}

const createRPC = (win: BrowserWindow) => {
  return new Server(win);
};

export default createRPC;
