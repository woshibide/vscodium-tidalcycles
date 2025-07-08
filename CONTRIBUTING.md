# Contributing to TidalCycles VSCode Extension

Thank you for your interest in contributing to the TidalCycles VSCode/VSCodium extension!

## Development Setup

1. **Prerequisites**
   - Node.js 18 or higher
   - npm or yarn
   - VSCode or VSCodium

2. **Clone and Setup**
   ```bash
   git clone https://github.com/tidalcycles/vscode-tidalcycles.git
   cd vscode-tidalcycles
   npm install
   ```

3. **Development**
   ```bash
   npm run watch  # Compile TypeScript in watch mode
   ```

4. **Testing**
   - Open the project in VSCode/VSCodium
   - Press `F5` to open a new Extension Development Host window
   - Test your changes

## Building and Packaging

```bash
npm run compile    # Compile TypeScript
npm run package    # Create .vsix package
```

## Publishing

### Prerequisites
- For VSCode Marketplace: [vsce personal access token](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)
- For Open VSX: [Open VSX personal access token](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions#1-obtain-a-personal-access-token)

### Manual Publishing

1. **VSCode Marketplace**
   ```bash
   npx vsce publish --pat YOUR_VSCODE_TOKEN
   ```

2. **Open VSX Registry**
   ```bash
   npx ovsx publish --pat YOUR_OPENVSX_TOKEN
   ```

3. **Both Marketplaces**
   ```bash
   # Set environment variables
   export VSCE_PAT=your_vscode_token
   export OVSX_PAT=your_openvsx_token
   
   # Publish to both
   npm run deploy
   ```

### Automated Publishing

The repository includes GitHub Actions workflows that automatically publish to both marketplaces when:
- A new release is created
- The workflow is manually triggered

#### Required Secrets

Add these secrets to your GitHub repository:
- `VSCE_PAT`: Your VSCode Marketplace personal access token
- `OVSX_PAT`: Your Open VSX Registry personal access token

## Open VSX Compatibility

This extension is designed to work with both VSCode and VSCodium. Key compatibility considerations:

1. **Engine Version**: Uses `vscode` engine with version `^1.74.0`
2. **Dependencies**: All dependencies are compatible with both editors
3. **API Usage**: Only uses stable VSCode APIs
4. **Testing**: CI tests on multiple platforms

## Pull Request Guidelines

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add/update tests if necessary
5. Ensure all tests pass
6. Update documentation if needed
7. Submit a pull request

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Commit changes
4. Create a new release tag
5. The GitHub Actions workflow will automatically publish to both marketplaces

## VSCodium Users

VSCodium users can install this extension from the Open VSX Registry. Make sure VSCodium is configured to use Open VSX:

```json
{
    "extensions.gallery": {
        "serviceUrl": "https://open-vsx.org/vscode/gallery",
        "cacheUrl": "https://open-vsx.org/vscode/gallery",
        "itemUrl": "https://open-vsx.org/vscode/item"
    }
}
```
