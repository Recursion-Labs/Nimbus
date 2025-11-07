#!/usr/bin/env node
const {execSync} = require('child_process');
const path = require('path');

console.log('🔧 Applying node-pty patches...\n');

// Patch both app and target directories
try {
  execSync('node bin/patch-node-pty-agent.js', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
  
  execSync('node bin/patch-target-agent.js', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
  
  console.log('\n✅ All patches applied!');
  console.log('\n🚀 Starting Nimbus...\n');
  console.log('Note: DevTools will NOT auto-open. Press F12 to toggle DevTools.\n');
  
} catch (err) {
  console.error('❌ Error applying patches:', err.message);
  process.exit(1);
}
