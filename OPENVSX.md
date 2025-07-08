# Open VSX Publishing Configuration

This extension is compatible with Open VSX Registry for VSCodium users.

## Publishing to Open VSX

To publish to Open VSX, you need to:

1. Create an account at https://open-vsx.org/
2. Get your personal access token
3. Run: `npx ovsx publish --pat YOUR_TOKEN`

## Environment Variables

You can set these environment variables for automated publishing:

```bash
export OVSX_PAT=your_open_vsx_token
export VSCE_PAT=your_vscode_marketplace_token
```

Then run:
```bash
npm run deploy
```

This will publish to both VSCode Marketplace and Open VSX Registry.

## Manual Publishing

VSCode Marketplace:
```bash
npm run publish
```

Open VSX Registry:
```bash
npm run publish:openvsx
```
