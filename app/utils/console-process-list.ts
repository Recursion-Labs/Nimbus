// Wrapper around node-pty console process list to handle Windows AttachConsole failures
import {platform} from 'os';

let consoleProcessList: any = null;

async function initialize() {
  // Only try to load console process list on Windows
  if (platform() === 'win32') {
    try {
      // Try to require the console list module from node-pty
      const nodePtyPath = require.resolve('node-pty');
      const path = await import('path');
      const consoleListPath = path.join(path.dirname(nodePtyPath), 'lib', 'conpty_console_list_agent.js');

      try {
        consoleProcessList = await import(consoleListPath);
      } catch (err: any) {
        console.warn('Could not load console process list module:', err instanceof Error ? err.message : String(err));
      }
    } catch (err: any) {
      console.warn(
        'Could not resolve node-pty path for console process list:',
        err instanceof Error ? err.message : String(err)
      );
    }
  }
}

void initialize();

export function getConsoleProcessList(): number[] {
  if (!consoleProcessList || platform() !== 'win32') {
    return [];
  }

  try {
    const getList = consoleProcessList.getConsoleProcessList;
    return typeof getList === 'function' ? (getList as () => number[])() : [];
  } catch (err: any) {
    // Handle AttachConsole failures gracefully
    if (err instanceof Error && err.message?.includes('AttachConsole')) {
      console.warn('Could not get console process list: AttachConsole failed (this is expected in some environments)');
    } else {
      console.warn('Could not get console process list:', err instanceof Error ? err.message : String(err));
    }
    return [];
  }
}

export function getConsoleProcessName(pid: number): string | null {
  if (!consoleProcessList || platform() !== 'win32') {
    return null;
  }

  try {
    const getName = consoleProcessList.getConsoleProcessName;
    return typeof getName === 'function' ? (getName as (pid: number) => string | null)(pid) : null;
  } catch (err: any) {
    console.warn('Could not get console process name:', err instanceof Error ? err.message : String(err));
    return null;
  }
}
