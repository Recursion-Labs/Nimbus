const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');

const bindingGypPath = path.join(__dirname, '..', 'app', 'node_modules', 'node-pty', 'binding.gyp');

if (fs.existsSync(bindingGypPath)) {
  let content = fs.readFileSync(bindingGypPath, 'utf8');
  
  // Remove the SpectreMitigation configuration entirely
  const newContent = content.replace(
    /\s*'SpectreMitigation':\s*'Spectre',?\s*/g,
    ''
  );
  
  if (content !== newContent) {
    fs.writeFileSync(bindingGypPath, newContent, 'utf8');
    console.log('✓ Fixed Spectre mitigation in app/node_modules/node-pty/binding.gyp');
  } else {
    console.log('✓ Spectre mitigation already fixed or not found');
  }
  
  // Now rebuild node-pty
  console.log('\nRebuilding node-pty...');
  try {
    execSync('npm rebuild node-pty', {
      cwd: path.join(__dirname, '..', 'app'),
      stdio: 'inherit'
    });
    console.log('\n✓ node-pty rebuild complete!');
  } catch (err) {
    console.error('\n❌ Failed to rebuild node-pty:', err.message);
    process.exit(1);
  }
} else {
  console.log('❌ binding.gyp not found at:', bindingGypPath);
  process.exit(1);
}
