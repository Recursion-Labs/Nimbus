const fs = require('fs');
const path = require('path');

const agentPath = path.join(__dirname, '..', 'app', 'node_modules', 'node-pty', 'lib', 'conpty_console_list_agent.js');

if (fs.existsSync(agentPath)) {
  let content = fs.readFileSync(agentPath, 'utf8');
  
  // Check if already patched
  if (content.includes('// Handle AttachConsole failures')) {
    console.log('✓ conpty_console_list_agent.js already patched');
    process.exit(0);
  }
  
  // Replace the getConsoleProcessList call with error handling
  const oldCode = `var shellPid = parseInt(process.argv[2], 10);
var consoleProcessList = getConsoleProcessList(shellPid);`;
  
  const newCode = `var shellPid = parseInt(process.argv[2], 10);
var consoleProcessList;
try {
    // Handle AttachConsole failures gracefully
    consoleProcessList = getConsoleProcessList(shellPid);
} catch (e) {
    // Silently fail if AttachConsole fails - this can happen in certain environments
    // where the console is not accessible. Return an empty list to prevent crashes.
    console.error('Warning: Could not get console process list:', e.message);
    consoleProcessList = [];
}`;
  
  if (content.includes(oldCode)) {
    content = content.replace(oldCode, newCode);
    fs.writeFileSync(agentPath, content, 'utf8');
    console.log('✓ Successfully patched conpty_console_list_agent.js');
  } else {
    console.log('⚠ Could not find code to patch - file may have changed');
    process.exit(1);
  }
} else {
  console.log('⚠ conpty_console_list_agent.js not found');
  process.exit(1);
}
