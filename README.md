# 🌩️ Nimbus Terminal Emulator

<p align="center">
  <a aria-label="Nimbus Terminal" href="#">
    <img src="https://img.shields.io/badge/Nimbus%20Terminal-000000.svg?style=for-the-badge&labelColor=000000&logoWidth=20">
  </a>
 </p>

> A premium terminal emulator with aesthetic visuals inspired by Ghosty, built on Hyper's robust foundation

## 🌟 What is Nimbus?

Nimbus is a next-generation terminal emulator that combines the power of modern web technologies with stunning visual aesthetics. Built as a sophisticated wrapper around Hyper's proven architecture, Nimbus delivers a premium terminal experience that goes beyond traditional command-line interfaces.

### Architecture & Foundation

**Built on Hyper's Robust Core**: Nimbus leverages Hyper's battle-tested terminal emulation engine while adding layers of visual polish and enhanced functionality. This foundation provides:
- Reliable terminal emulation powered by `xterm.js`
- Cross-platform compatibility (Windows, macOS, Linux)
- Plugin ecosystem compatibility
- Proven performance and stability

**Modern Web Technologies**: 
- **Frontend**: React.js with TypeScript for a responsive, modern UI
- **Backend**: Electron for native desktop integration
- **Terminal Engine**: xterm.js for accurate terminal emulation
- **Styling**: Styled-JSX for component-scoped styling with Ghosty-inspired aesthetics

### Aesthetic Philosophy - The Ghosty Inspiration

Nimbus draws heavy inspiration from Ghosty's design philosophy, featuring:
- **Ethereal Transparency**: Subtle transparency effects that create depth without compromising readability
- **Ghostly Color Palette**: Carefully curated colors that are easy on the eyes during long coding sessions
- **Smooth Animations**: Fluid transitions that make the terminal feel alive and responsive
- **Minimalist Design**: Clean, uncluttered interface that puts focus on your work
- **Ambient Glow**: Soft glows and shadows that create a premium, atmospheric feel

## ✨ Current Features

**Premium Visual Experience:**
- 🎨 **Ghosty-Inspired Aesthetics**: Ethereal transparency, ambient glows, and carefully crafted color palette
- ✨ **Smooth Animations**: Fluid transitions and micro-interactions
- 🔤 **Font Ligature Support**: Enhanced readability with modern programming fonts
- 🌈 **Customizable Color Schemes**: Multiple built-in themes with easy customization

**Advanced Functionality:**
- 🚀 **Fast & Lightweight**: Optimized for performance without sacrificing features
- 🎯 **Highly Extensible**: Plugin system for custom functionality
- 🔄 **Auto-updates**: Built-in update system (configurable)
- 📱 **Cross-Platform**: Native experience on Windows, macOS, and Linux
- 🛡️ **Robust Error Handling**: Graceful handling of network and system errors

**Developer-Friendly:**
- 🔧 **Built on Proven Tech**: Hyper's terminal engine + React + Electron
- 📦 **Modern Development Workflow**: TypeScript, hot reload, and modern tooling
- 🎮 **Customizable Keybindings**: Full keyboard shortcut customization
- 📝 **Configuration Files**: JSON-based configuration with validation

## 🔍 Current Challenges & Known Issues

### Network & Error Handling
- **EPIPE Errors**: We've implemented robust error handling for EPIPE (broken pipe) errors that can occur during network operations and IPC communication
- **Notification Service**: The built-in notification service endpoint is currently returning 404 errors, but this is handled gracefully
- **Auto-updater**: Network connectivity issues during update checks are now handled without crashing

### Development & Build Issues
- **CLI Version Import Warning**: Minor webpack warning about importing named exports from default-exporting modules
- **Extension Permission Warnings**: Some Chrome extension permissions are flagged as unknown, but functionality remains intact
- **Config Parsing**: Invalid JSON configuration files are handled gracefully with fallback to defaults

### Platform-Specific Considerations
- **Windows**: PowerShell integration requires specific shell configuration
- **macOS**: Code signing and entitlements need proper setup for distribution
- **Linux**: Graphics dependencies may vary between distributions

### Performance Optimizations
- **Memory Usage**: Continuous monitoring and optimization of memory consumption
- **Startup Time**: Ongoing improvements to reduce initial load time
- **Rendering Performance**: GPU acceleration and rendering optimizations

## 🚀 Future Vision: Nimbus as a Complete Workspace

### Beyond Terminal: The Workspace Revolution

Nimbus is evolving from a terminal emulator into a complete **development workspace** that seamlessly integrates GUI applications within the terminal environment. Our vision includes:

#### 🖥️ **GUI Application Integration**
- **Native GUI Apps**: Run full GUI applications directly within terminal tabs
- **Web-based Tools**: Integrate web applications like database browsers, API testing tools, and documentation browsers
- **Visual Debugging**: Built-in visual debuggers with graphical interfaces for various programming languages
- **File Managers**: Native file explorer with drag-and-drop functionality
- **Image Viewers**: Built-in image preview and editing capabilities
- **PDF & Document Viewers**: View documentation and reports without leaving the terminal

#### 🔗 **Seamless Integration Architecture**
- **Container-based Isolation**: Each GUI app runs in its own secure container
- **X11/Wayland Forwarding**: Native Linux GUI app support through display server integration
- **WebView Embedding**: Chrome/Chromium-based web apps run as native-feeling applications
- **IPC Communication**: Seamless communication between terminal processes and GUI applications
- **Unified Interface**: Consistent theming and interaction patterns across all integrated tools

#### 🛠️ **Developer-Centric Features**
- **Visual Git Management**: Graphical git client with conflict resolution UI
- **Database Management**: Visual database browsers and query builders
- **API Development**: Integrated API testing and documentation tools
- **Docker Management**: Visual Docker container and image management
- **Log Analysis**: Real-time log parsing with visual filtering and search
- **Performance Monitoring**: Built-in system and application performance dashboards

#### 🎨 **Advanced Customization**
- **Workspace Layouts**: Save and restore complex multi-pane layouts
- **App Shortcuts**: Custom keyboard shortcuts for any integrated application
- **Theming System**: Consistent theming across terminal and GUI components
- **Plugin Architecture**: Extensible plugin system for custom GUI integrations
- **Profile Management**: Different workspace configurations for different projects

#### 🌐 **Cloud & Collaboration Features**
- **Cloud Sync**: Synchronize workspace configurations across devices
- **Team Workspaces**: Share workspace setups with team members
- **Remote Development**: Access GUI applications running on remote servers
- **Collaborative Editing**: Real-time collaborative editing within terminal-integrated editors

### Implementation Roadmap

**Phase 1: Foundation** ✅ (Current)
- Robust terminal emulation with Hyper core
- Aesthetic Ghosty-inspired design
- Cross-platform compatibility
- Plugin system foundation

**Phase 2: GUI Integration** 🚧 (In Progress)
- WebView embedding for web-based tools
- Basic GUI application containerization
- X11 forwarding for Linux applications
- File preview capabilities

**Phase 3: Advanced Integration** 📋 (Planned)
- Full GUI application ecosystem
- Advanced workspace management
- Cloud synchronization
- Team collaboration features

**Phase 4: AI & Intelligence** 🔮 (Future)
- AI-powered workspace suggestions
- Intelligent app recommendations
- Automated workflow optimization
- Smart context switching

## 🛠️ Technical Architecture

### Current Technology Stack

**Core Technologies:**
- **Electron**: Cross-platform desktop application framework
- **React.js**: Modern UI library with TypeScript support
- **xterm.js**: Industry-standard terminal emulation library
- **Hyper Core**: Proven terminal engine foundation

**Development Tools:**
- **TypeScript**: Type-safe JavaScript development
- **Webpack**: Modern bundling and asset management
- **Yarn**: Fast, reliable package management
- **ESLint**: Code quality and consistency

**Key Dependencies:**
- `node-pty`: Native pseudo-terminal support
- `electron-fetch`: Network requests with Electron integration
- `styled-jsx`: CSS-in-JS styling solution
- `concurrently`: Multi-process development workflow

### Architecture Highlights

**Multi-Process Architecture:**
- **Main Process**: Electron main process handling application lifecycle
- **Renderer Process**: React-based UI with terminal components
- **Terminal Sessions**: Isolated terminal sessions with proper cleanup
- **IPC Communication**: Secure inter-process communication patterns

**Error Handling & Resilience:**
- **Network Error Recovery**: Graceful handling of EPIPE, ECONNRESET errors
- **Configuration Validation**: JSON schema validation with fallbacks
- **Session Management**: Proper cleanup of terminal processes
- **Extension Safety**: Sandboxed extension loading with permission validation

## 🚀 Quick Start

### Development Setup

```bash
# Clone the repository
git clone https://github.com/vercel/nimbus.git
cd nimbus

# Install dependencies
yarn

# Start development (single command)
yarn nimbus
```

This single command runs:
- **Webpack**: Bundles and watches for changes
- **TypeScript**: Compiles with hot reload
- **Electron App**: Launches the application with live reload

### Alternative Development Setup

```bash
# Terminal 1: Build and watch
yarn dev

# Terminal 2: Run Electron app
yarn app
```

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

## ⚙️ Configuration & Customization

### Configuration Files

Nimbus stores configuration in multiple locations:

**Main Configuration** (`nimbus.json`):
- **macOS/Linux**: `~/.config/Nimbus/nimbus.json`
- **Windows**: `%APPDATA%/Nimbus/nimbus.json`

**Key Configuration Options**:
```json
{
  "config": {
    "updateChannel": "stable",
    "disableAutoUpdates": true,
    "fontSize": 14,
    "fontFamily": "JetBrains Mono, Fira Code, Menlo",
    "fontWeight": "400",
    "fontWeightBold": "600",
    "lineHeight": 1.4,
    "letterSpacing": 0.5,
    "cursorColor": "rgba(139,233,253,0.9)",
    "cursorShape": "BEAM",
    "cursorBlink": true,
    "backgroundColor": "rgba(26, 27, 38, 0.95)",
    "foregroundColor": "#c0caf5",
    "colors": {
      "black": "#15161e",
      "red": "#f7768e",
      "green": "#9ece6a",
      "yellow": "#e0af68",
      "blue": "#7aa2f7",
      "magenta": "#bb9af7",
      "cyan": "#7dcfff",
      "white": "#a9b1d6"
    }
  }
}
```

### Ghosty-Inspired Theme

The default theme is carefully crafted with Ghosty aesthetics:
- **Background**: Deep space blue with transparency (`rgba(26, 27, 38, 0.95)`)
- **Foreground**: Soft moonlight text (`#c0caf5`)
- **Accent**: Electric cyan cursor (`rgba(139,233,253,0.9)`)
- **Palette**: Carefully selected colors that reduce eye strain during long sessions

### Customization Options

**Visual Customization**:
- Transparency levels and blur effects
- Custom color schemes and themes
- Font families and typography settings
- Cursor styles and animations
- Window decorations and borders

**Functional Customization**:
- Shell selection and arguments
- Key bindings and shortcuts
- Plugin configuration
- Auto-update settings
- Notification preferences

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### How to Contribute

1. **Fork the repository** and create your feature branch
2. **Follow the development setup** instructions above
3. **Make your changes** with clear, descriptive commit messages
4. **Test your changes** thoroughly on your platform
5. **Submit a Pull Request** with a detailed description of your changes

### Development Guidelines

**Code Style:**
- Follow the existing TypeScript and React patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and modular

**Testing:**
- Test on multiple platforms when possible
- Ensure no new errors in the build process
- Verify that existing functionality still works

**Documentation:**
- Update README.md for new features
- Add inline documentation for new functions
- Include examples when adding new configuration options

### Areas for Contribution

**High Priority:**
- 🐛 **Bug Fixes**: EPIPE error handling, network resilience
- 🎨 **UI/UX Improvements**: Ghosty theme refinements, animation enhancements
- 📱 **Platform Support**: Windows, macOS, Linux specific optimizations

**Medium Priority:**
- 🔌 **Plugin Development**: New plugins and plugin system improvements
- 📚 **Documentation**: Tutorials, API documentation, configuration guides
- ⚡ **Performance**: Memory usage optimization, startup time improvements

**Future Features:**
- 🖥️ **GUI Integration**: WebView embedding, X11 forwarding
- 🌐 **Cloud Features**: Synchronization, team collaboration
- 🤖 **AI Integration**: Smart suggestions, workflow optimization

### Community

- **Discord**: Join our community server for discussions
- **Issues**: Report bugs and request features on GitHub
- **Discussions**: Share ideas and ask questions

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hyper Team**: For the solid terminal emulation foundation
- **Ghosty Community**: For aesthetic inspiration
- **Electron Team**: For the cross-platform framework
- **Vercel**: For supporting open source development

---

<p align="center">
  <strong>⭐ Star this repository if you find Nimbus useful!</strong>
</p>
