# TypeScript Programming 🚀

A comprehensive repository for learning TypeScript from fundamentals to advanced concepts through practical examples, algorithm implementations, and hands-on projects.

## 📚 Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Compilation & Execution](#compilation--execution)
- [Contributing](#contributing)
- [License](#license)

## About

This repository documents my journey learning TypeScript, featuring

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- TypeScript (`npm install -g typescript`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imranparthib/typescript-from-scratch.git
   cd typescript-from-scratch
   ```

2. Install dependencies (if needed):
   ```bash
   npm install
   ```


## Compilation & Execution

### Compile TypeScript files

```bash
# Compile a single file
tsc filename.ts

# Compile with project configuration
cd LeetCode  # or Series/
tsc
```

### Run compiled JavaScript

```bash
node filename.js
# Or if using outDir
node out/filename.js
```

### Direct execution (without compilation)

```bash
# Install ts-node globally
npm install -g ts-node

# Run TypeScript directly
ts-node filename.ts
# or with code runner
```

### Project-specific compilation

Each subfolder ([`LeetCode/`](LeetCode/), [`Series/`](Series/)) has its own [`tsconfig.json`](LeetCode/tsconfig.json) with configurations:
- **Target**: ES6
- **Module**: CommonJS
- **Output**: `out/` directory
- **Source Maps**: Enabled for debugging
- **Strict Mode**: Enabled for type safety

## Contributing

Contributions are welcome! Whether it's fixing bugs, adding new examples, or improving documentation.

### How to Contribute

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

### Contribution Ideas
- Add more LeetCode solutions
- Implement additional algorithms
- Create tutorials for advanced TypeScript features
- Improve code documentation and comments

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Author**: Imran Parthib  
**Connect**: [GitHub](https://github.com/imranparthib)

Happy TypeScript coding! 💻✨
