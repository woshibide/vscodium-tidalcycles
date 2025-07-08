# TidalCycles for VSCode & VSCodium
> **warning**  
i absolutely vibe coded this port to openvsx marketplace in 3 prompts without any idea whats going on

## Compatibility

This extension works with:
- **VSCode**: Available on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/)
- **VSCodium**: Available on [Open VSX Registry](https://open-vsx.org/)

## Installation

### VSCode
Install from the Extensions view (`Ctrl+Shift+X`) or from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/).

### VSCodium
Install from the Extensions view (`Ctrl+Shift+X`) or download from [Open VSX Registry](https://open-vsx.org/). 

Make sure your VSCodium is configured to use Open VSX Registry by setting:
```json
{
    "extensions.gallery": {
        "serviceUrl": "https://open-vsx.org/vscode/gallery",
        "cacheUrl": "https://open-vsx.org/vscode/gallery",
        "itemUrl": "https://open-vsx.org/vscode/item"
    }
}
```

## Features

This VSCode extension for TidalCycles is inspired by the commands from the popular Atom package:

- `Shift+Enter` to evalulate a single line
- `Ctrl+Enter` to evaluate multiple lines
- `Ctrl+Alt+H` to hush

## Syntax Highlighting

In order to get syntax highlighting in `.tidal` files you must do
two things:

- Install the [Haskell Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=justusadam.language-haskell) extension
- Associate `.tidal` files to the Haskell language by adding the following 
settings in `settings.json`:

```
"files.associations": {
    "*.tidal": "haskell"
}
```

## Prerequisites

You will need to have TidalCycles (a Haskell package) installed before
using this extension. If you want to produce sound, you'll also
need to have SuperDirt running. You can find instructions to install
TidalCycles and SuperDirt at [TidalCycles](https://tidalcycles.org).

## Extension Settings

Take a look in the Contributions tab on the extension page to see what config setting options are available. Here is
a more verbose explanation of a few of them:

### GHCi path

Probably the most important setting. This is the path to `ghci.exe` on your machine. 
If it's on your OS `PATH`, then just setting this value to `ghci` will probably do fine.

Examples:

`"tidalcycles.ghciPath" : "ghci"`

`"tidalcycles.ghciPath" : "c:\\path\\to\\ghci.exe"`

`"tidalcycles.ghciPath" : "/path/to/ghci"`

If you are using Stack, you can enable the `useStackGhci` option and the extension will use `stack ghci` to launch GHCi.

### Boot Files

This extension has a default internal bootup process to load the Tidal libraries into GHCI.
If instead you wish you run your own bootup process, you can configure this extension to point
to a Tidal bootup file on your machine, or use a `BootTidal.hs` file located in the first directory
of your VS Code IDE.

* `tidalcycles.bootTidalPath` - path to a file that contains line-by-line commands to boot the TidalCycles Haskell package.
* `tidalcycles.useBootFileInCurrentDirectory` - when equal to `true`, the extension will boot from a file named `BootTidal.hs` in the first workspace folder

Examples:

```
"tidalcycles.bootTidalPath" : "c:\\path\\to\\file\\boot.tidal",
"tidalcycles.useBootFileInCurrentDirectory" : false
```

```
"tidalcycles.useBootFileInCurrentDirectory" : true
```

### Full Config Example

```
{
    "tidalcycles.ghciPath" : "ghci",
    "tidalcycles.evalCountPrefix": "Evals: ",
    "tidalcycles.feedbackColor": "rgba(100,250,100,0.5)",
    "tidalcycles.useStackGhci": false,
    "tidalcycles.showEvalCount": true,
    "tidalcycles.showGhciOutput": false,
    "tidalcycles.showOutputInConsoleChannel": true,
    "tidalcycles.useBootFileInCurrentDirectory": false,
    "tidalcycles.bootTidalPath" : "c:\\path\\to\\file\\boot.tidal"
}
```

## Known Issues

- The `Eval and Copy` and `Eval Multi Line and Copy` commands from the Atom package are not supported.