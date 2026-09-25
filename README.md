<div align="center">

<img src="https://raw.githubusercontent.com/Nephrite-theme/web/main/public/logo.svg" alt="Nephrite logo" width="72" height="72">

# Nephrite for Chrome

**English** · [Español](README.es.md)

A calm, jade-inspired theme for [Google Chrome](https://www.google.com/chrome/), in three flavors.

[![License: MIT](https://img.shields.io/badge/license-MIT-3db87a)](LICENSE)
[![Palette](https://img.shields.io/badge/palette-Nephrite-1f6b45)](https://github.com/Nephrite-theme/palette)
[![Stars](https://img.shields.io/github/stars/Nephrite-theme/chrome?color=3db87a)](https://github.com/Nephrite-theme/chrome/stargazers)

</div>

## Flavors

| Flavor | Colors used | For | Install |
| --- | --- | --- | --- |
| **Forest** | <img src="assets/forest.svg" alt="Forest swatches" width="260"> | Deep and dark, for late nights | [Chrome Web Store](https://chromewebstore.google.com/detail/nephrite-chrome-theme-for/efhfempmenojdgamociancffkcbncffp) |
| **Jade** | <img src="assets/jade.svg" alt="Jade swatches" width="260"> | Dark with more green, for long days | [Chrome Web Store](https://chromewebstore.google.com/detail/nephrite-chrome-theme-jad/ijmbncbgabefgapchogbdnhfgbiiimcm) |
| **Mint** | <img src="assets/mint.svg" alt="Mint swatches" width="260"> | Light and airy, for daylight | [Chrome Web Store](https://chromewebstore.google.com/detail/nephrite-chrome-theme-min/ogfckpiocojbdmefjoogcmjmgfofijpg) |

> [!NOTE]
> Version 0.2 rebuilds every flavor from the Nephrite palette, and Jade is now a dark flavor.

## Previews

| Forest | Jade | Mint |
| --- | --- | --- |
| ![Forest on GitHub](assets/forest-page.webp) | ![Jade on GitHub](assets/jade-page.webp) | ![Mint on GitHub](assets/mint-page.webp) |
| ![Forest new tab](assets/forest-ntp.webp) | ![Jade new tab](assets/jade-ntp.webp) | ![Mint new tab](assets/mint-ntp.webp) |

## Install

### From the Chrome Web Store (recommended)

Open the store link for the flavor you want and click **Add to Chrome**. Installing another flavor replaces the current one.

### Manually

1. Click **Code > Download ZIP** and unzip it. Each flavor lives in its own folder under `themes/`, for example `themes/Nephrite Forest`.
2. Open `chrome://extensions` and turn on **Developer mode** (top right).
3. Click **Load unpacked** and select the flavor's folder, the one containing `manifest.json`.

To go back to the default look, open `chrome://settings/appearance` and click **Reset to default**.

## Colors

Every color comes from the [Nephrite palette](https://github.com/Nephrite-theme/palette), mapped to Chrome by role:

| Chrome surface | Palette color |
| --- | --- |
| Tab strip (frame) | `mantle`, `crust` when the window is inactive |
| Active tab, toolbar, new tab page | `base` |
| Address bar | `surface0` |
| Main text | `text` |
| Inactive tabs, bookmarks, toolbar icons | `subtext` |
| Links on the new tab page | `jade` |

## Development

The manifests in `themes/` are generated, so don't edit them by hand. To pick up palette changes:

```sh
node scripts/sync-palette.mjs   # download the latest palette.json
node scripts/build.mjs          # regenerate the three manifests
```

To publish an update, bump `VERSION` in `scripts/build.mjs`, rebuild, and upload each flavor folder as a ZIP to its Chrome Web Store listing. Node 18 or newer, no dependencies.

## Contributing

Found a color that clashes or low contrast? [Open an issue](https://github.com/Nephrite-theme/chrome/issues/new/choose) with a screenshot. For how Nephrite ports are built and reviewed, see the [contributing guide](https://github.com/Nephrite-theme/.github/blob/main/CONTRIBUTING.md).

## Thanks

Created and maintained by [@ingfranciscastillo](https://github.com/ingfranciscastillo). Contributors will be listed here as the community grows.

## More Nephrite

Nephrite is coming to Firefox, VS Code and more. See every app at [getnephrite.dev/ports](https://getnephrite.dev/ports).
