# Nimbus Terminal

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=vercel&labelColor=000000&logoWidth=20">
  </a>
 </p>
  
[![Node CI](https://github.com/vercel/nimbus/workflows/Node%20CI/badge.svg?event=push)](https://github.com/vercel/nimbus/actions?query=workflow%3A%22Node+CI%22+branch%3Acanary+event%3Apush)

> A premium terminal emulator with aesthetic visuals inspired by Ghosty for macOS

## Project goals

Nimbus is a modern, premium terminal emulator designed with aesthetics in mind. Built on web technologies, it offers a beautiful and extensible command-line experience with smooth animations, transparency effects, and a carefully crafted color palette.

**Key Features:**
- 🎨 Premium aesthetic theme inspired by Ghosty
- ✨ Smooth animations and visual effects
- 🔤 Font ligature support for enhanced readability
- 🎯 Highly customizable and extensible
- 🚀 Fast and lightweight

## Usage

Built with React, Electron, and xterm.js

## Quick Start

To run Nimbus in development mode:

```bash
# Install dependencies
yarn

# Run Nimbus with live reload (webpack + typescript + app)
yarn nimbus
```

This single command builds and runs the terminal emulator with automatic reloading.

## Contribute

Regardless of the platform you are working on, you will need to have Yarn installed. If you have never installed Yarn before, you can find out how at: https://yarnpkg.com/en/docs/install.

### Development Setup

1. **Install dependencies**
   ```bash
   yarn
   ```

2. **Start development**
   ```bash
   # Option 1: Single command (recommended)
   yarn nimbus
   
   # Option 2: Separate processes
   # Terminal 1:
   yarn dev
   # Terminal 2:
   yarn app
   ```

3. **Platform-specific requirements**
   * **Windows**: Run `yarn global add windows-build-tools` from an elevated prompt
   * **macOS**: Xcode command line tools required
   * **Linux (Debian)**: Install `graphicsmagick`, `icnsutils`, `xz-utils`
   * **Linux (RPM)**: Install `GraphicsMagick`, `libicns-utils`, `xz`

### Building for Production

```bash
# Build optimized version
yarn build

# Create distributable packages
yarn dist
```

Distributable files will be in the `./dist` folder.

#### Known issues that can happen during development

### Troubleshooting

#### Error building `node-pty`

Run `yarn run rebuild-node-pty` to rebuild node-pty.

On macOS, ensure Xcode terms are accepted: `sudo xcodebuild`

#### C++ errors on macOS

Set `export CXX=clang++` if you encounter compiler errors.

#### Code signing errors on macOS

Disable code signing with `export CSC_IDENTITY_AUTO_DISCOVERY=false`

## Configuration

Nimbus stores its configuration in `nimbus.json`:
- **macOS/Linux**: `~/.config/Nimbus/nimbus.json`
- **Windows**: `%APPDATA%/Nimbus/nimbus.json`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
