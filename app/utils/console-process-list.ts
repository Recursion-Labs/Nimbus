// Wrapper around node-pty console process list to handle Windows AttachConsole failures
import {platform} from 'os';

let consoleProcessList: any = null;

// Only try to load console process list on Windows
if (platform() === 'win32') {
  try {
    // Try to require the console list module from node-pty
    const nodePtyPath = require.resolve('node-pty');
    const path = require('path');
    const consoleListPath = path.join(path.dirname(nodePtyPath), 'lib', 'conpty_console_list_agent.js');
    
    try {
      consoleProcessList = require(consoleListPath);
    } catch (err: any) {
      console.warn('Could not load console process list module:', err.message);
    }
  } catch (err: any) {
    console.warn('Could not resolve node-pty path for console process list:', err.message);
  }
}

export function getConsoleProcessList(): number[] {
  if (!consoleProcessList || platform() !== 'win32') {
    return [];
  }

  try {
    return consoleProcessList.getConsoleProcessList() || [];
  } catch (err: any) {
    // Handle AttachConsole failures gracefully
    if (err.message && err.message.includes('AttachConsole')) {
      console.warn('Could not get console process list: AttachConsole failed (this is expected in some environments)');
    } else {
      console.warn('Could not get console process list:', err.message);
    }
    return [];
  }
}

export function getConsoleProcessName(pid: number): string | null {
  if (!consoleProcessList || platform() !== 'win32') {
    return null;
  }

  try {
    return consoleProcessList.getConsoleProcessName(pid) || null;
  } catch (err: any) {
    console.warn('Could not get console process name:', err.message);
    return null;
  }
}