# Development Environment Setup 🛠️

## Overview

This guide will help you set up a complete development environment for React and Tailwind CSS development. Follow each step carefully to ensure everything works correctly.

## Required Software

### 1. Node.js and npm

Node.js is a JavaScript runtime that lets you run JavaScript outside the browser. npm (Node Package Manager) comes bundled with Node.js and is used to install packages.

#### Installation

**Windows:**
1. Download the LTS version from [nodejs.org](https://nodejs.org/)
2. Run the installer
3. Follow the installation wizard (keep default settings)
4. Restart your computer

**macOS:**
```bash
# Using Homebrew (recommended)
brew install node

# Or download installer from nodejs.org
```

**Linux (Ubuntu/Debian):**
```bash
# Using NodeSource repository (recommended for latest version)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Or using default package manager (older version)
sudo apt update
sudo apt install nodejs npm
```

#### Verification

Open a terminal/command prompt and run:

```bash
# Check Node.js version (should be 18.x or higher)
node --version
# Expected output: v18.x.x or v20.x.x

# Check npm version (should be 9.x or higher)
npm --version
# Expected output: 9.x.x or 10.x.x
```

If both commands show version numbers, you're good to go! ✅

### 2. Git

Git is a version control system for tracking changes in your code.

#### Installation

**Windows:**
1. Download from [git-scm.com](https://git-scm.com/)
2. Run installer
3. Use default settings (select "Git from the command line and also from 3rd-party software")

**macOS:**
```bash
# Using Homebrew
brew install git

# Or use Xcode Command Line Tools
xcode-select --install
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install git
```

#### Verification

```bash
git --version
# Expected output: git version 2.x.x
```

#### Basic Git Configuration

```bash
# Set your name and email (used in commits)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name to 'main'
git config --global init.defaultBranch main

# Verify configuration
git config --list
```

### 3. Visual Studio Code (VS Code)

VS Code is a free, powerful code editor with excellent React and JavaScript support.

#### Installation

1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Run the installer
3. Follow installation steps

**Important settings during installation (Windows):**
- ✅ Add "Open with Code" action to context menu
- ✅ Add to PATH

#### First Launch

After installation:
1. Open VS Code
2. Press `Ctrl/Cmd + Shift + P` to open Command Palette
3. Type "shell command" and select "Shell Command: Install 'code' command in PATH" (macOS)

## Essential VS Code Extensions

Install these extensions for the best development experience:

### How to Install Extensions

1. Open VS Code
2. Click Extensions icon in sidebar (or press `Ctrl/Cmd + Shift + X`)
3. Search for extension name
4. Click "Install"

### Required Extensions

#### 1. ES7+ React/Redux/React-Native snippets
- **ID:** `dsznajder.es7-react-js-snippets`
- **Purpose:** Code snippets for React development
- **Usage:** Type `rafce` then Tab to create a React component

#### 2. Tailwind CSS IntelliSense
- **ID:** `bradlc.vscode-tailwindcss`
- **Purpose:** Autocomplete for Tailwind classes
- **Features:** Class suggestions, CSS preview on hover

#### 3. Prettier - Code Formatter
- **ID:** `esbenp.prettier-vscode`
- **Purpose:** Automatic code formatting
- **Setup:** Set as default formatter (see configuration below)

#### 4. ESLint
- **ID:** `dbaeumer.vscode-eslint`
- **Purpose:** JavaScript/React linting
- **Features:** Real-time error detection, auto-fix

#### 5. Auto Rename Tag
- **ID:** `formulahendry.auto-rename-tag`
- **Purpose:** Automatically rename paired HTML/JSX tags

#### 6. Path Intellisense
- **ID:** `christian-kohler.path-intellisense`
- **Purpose:** Autocomplete for file paths in imports

### Recommended Extensions

#### 7. GitLens
- **ID:** `eamodio.gitlens`
- **Purpose:** Enhanced Git integration
- **Features:** Blame annotations, commit history

#### 8. Bracket Pair Colorizer (built into VS Code now)
- **Purpose:** Color-code matching brackets
- **Note:** Enable in settings if using older VS Code version

#### 9. Error Lens
- **ID:** `usernamehw.errorlens`
- **Purpose:** Inline error messages
- **Features:** Shows errors directly in code

#### 10. Console Ninja
- **ID:** `WallabyJs.console-ninja`
- **Purpose:** Enhanced console logging in VS Code

### Quick Install All (Optional)

Open terminal in VS Code (`Ctrl/Cmd + `` `) and run:

```bash
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension formulahendry.auto-rename-tag
code --install-extension christian-kohler.path-intellisense
code --install-extension eamodio.gitlens
code --install-extension usernamehw.errorlens
```

## VS Code Configuration

Configure VS Code for optimal React/Tailwind development.

### Settings Configuration

1. Open Settings: `Ctrl/Cmd + ,` or File → Preferences → Settings
2. Click the "Open Settings (JSON)" icon in top-right
3. Add these settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
  "tailwindCSS.emmetCompletions": true,
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.fontFamily": "'Fira Code', 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": true,
  "workbench.colorTheme": "Default Dark+",
  "terminal.integrated.fontSize": 13,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "javascript.updateImportsOnFileMove.enabled": "always"
}
```

**What these settings do:**
- Format code automatically on save
- Use Prettier as default formatter
- Auto-fix ESLint errors on save
- Enable Tailwind autocomplete in strings
- Configure Emmet for JSX
- Set up code editor preferences

### Create Prettier Configuration

In your project root, create `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "avoid"
}
```

## Terminal Basics

### Opening Terminal

**VS Code:**
- Press `` Ctrl/Cmd + ` ``
- Or: Terminal → New Terminal

**System Terminal:**
- Windows: Search "Command Prompt" or "PowerShell"
- macOS: Search "Terminal"
- Linux: `Ctrl + Alt + T`

### Essential Commands

```bash
# Navigate directories
cd folder-name        # Enter folder
cd ..                 # Go up one level
cd ~                  # Go to home directory
pwd                   # Print working directory

# List files
ls                    # List files (macOS/Linux)
dir                   # List files (Windows)
ls -la                # List with details including hidden files

# File operations
mkdir folder-name     # Create directory
touch file.txt        # Create file (macOS/Linux)
rm file.txt           # Delete file
rm -rf folder-name    # Delete folder and contents

# npm commands (you'll use these a lot!)
npm init              # Create package.json
npm install           # Install dependencies
npm install package   # Install specific package
npm run dev           # Run development server
npm run build         # Build for production

# Git commands
git clone url         # Clone repository
git status            # Check status
git add .             # Stage all changes
git commit -m "msg"   # Commit changes
git push              # Push to remote
git pull              # Pull from remote
```

## Testing Your Setup

Let's verify everything is working by creating a test React + Tailwind project.

### Create Test Project

```bash
# Navigate to your projects folder
cd ~/Documents  # macOS/Linux
cd C:\Users\YourName\Documents  # Windows

# Create a new Vite + React project
npm create vite@latest my-test-app -- --template react

# Navigate into project
cd my-test-app

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure Tailwind

Replace content in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Replace `src/App.jsx`:

```javascript
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🎉 Setup Complete!
        </h1>
        <p className="text-gray-600 mb-6">
          Your React + Tailwind CSS environment is ready!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
```

### Run Development Server

```bash
npm run dev
```

**Expected output:**
```
VITE v5.x.x  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open browser to `http://localhost:5173/`

**You should see a beautiful card with gradient background! ✅**

### Stop the Server

Press `Ctrl + C` in terminal

### Clean Up

```bash
cd ..
rm -rf my-test-app  # macOS/Linux
rmdir /s my-test-app  # Windows
```

## Troubleshooting

### Node.js/npm Issues

**Problem:** `node: command not found`
- **Solution:** Reinstall Node.js, restart terminal/computer

**Problem:** Permission errors on macOS/Linux
- **Solution:** Don't use `sudo` with npm. Fix permissions:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
```

### Git Issues

**Problem:** `git: command not found`
- **Solution:** Install Git, restart terminal

**Problem:** Authentication errors
- **Solution:** Set up SSH keys or use HTTPS with token

### VS Code Issues

**Problem:** Extensions not working
- **Solution:** Reload VS Code (Ctrl/Cmd + Shift + P → "Reload Window")

**Problem:** Tailwind IntelliSense not working
- **Solution:** Ensure `tailwind.config.js` exists, reload VS Code

### Vite/Build Issues

**Problem:** `npm run dev` fails
- **Solution:** 
```bash
rm -rf node_modules package-lock.json
npm install
```

**Problem:** Port 5173 already in use
- **Solution:** Kill other process or change port in `vite.config.js`

## Additional Tools (Optional)

### React DevTools

Browser extension for inspecting React components:
- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### Recommended Fonts

**Fira Code** - Font with programming ligatures
- Download: [github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode)
- Install and set in VS Code: `"editor.fontFamily": "'Fira Code'"`

### Command Line Tools

**macOS:**
```bash
# Homebrew (package manager)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Windows:**
- Consider installing **Windows Terminal** from Microsoft Store
- Or use **Git Bash** (comes with Git)

## Quick Reference

### VS Code Shortcuts

```
Ctrl/Cmd + P         Quick open file
Ctrl/Cmd + Shift + P Command palette
Ctrl/Cmd + `         Toggle terminal
Ctrl/Cmd + B         Toggle sidebar
Ctrl/Cmd + /         Toggle comment
Ctrl/Cmd + D         Select next occurrence
Ctrl/Cmd + F         Find in file
Ctrl/Cmd + Shift + F Find in project
F2                   Rename symbol
Alt + Up/Down        Move line up/down
```

### React Snippets (with ES7+ extension)

```
rafce → Arrow function component with export
rfc   → Function component
useState → const [state, setState] = useState()
useEffect → useEffect hook
```

## Next Steps

Congratulations! Your development environment is ready! 🎉

**Checklist:**
- [ ] Node.js and npm installed and verified
- [ ] Git installed and configured
- [ ] VS Code installed with all extensions
- [ ] VS Code configured with settings
- [ ] Test project created and runs successfully
- [ ] Understand basic terminal commands

**Ready to code?**

Head to **[Module 01: Modern JavaScript](../01-Modern-JavaScript/)** to start learning the JavaScript features you'll use in React! →

---

## Getting Help

**VS Code:** Help → Welcome → "Get Started with VS Code"

**Node.js/npm:** [nodejs.org/docs](https://nodejs.org/docs/)

**Git:** [git-scm.com/doc](https://git-scm.com/doc)

**Troubleshooting:** Search Stack Overflow or create an issue in this repository

Happy coding! 💻✨
