<div align="center">

<img src="https://raw.githubusercontent.com/Nephrite-theme/web/main/public/logo.svg" alt="Logo de Nephrite" width="72" height="72">

# Nephrite para Chrome

[English](README.md) · **Español**

Un tema sereno, inspirado en el jade, para [Google Chrome](https://www.google.com/chrome/), en tres sabores.

[![Licencia: MIT](https://img.shields.io/badge/licencia-MIT-3db87a)](LICENSE)
[![Paleta](https://img.shields.io/badge/paleta-Nephrite-1f6b45)](https://github.com/Nephrite-theme/palette)
[![Estrellas](https://img.shields.io/github/stars/Nephrite-theme/chrome?color=3db87a&label=estrellas)](https://github.com/Nephrite-theme/chrome/stargazers)

</div>

## Sabores

| Sabor | Colores | Para | Instalar |
| --- | --- | --- | --- |
| **Forest** | <img src="https://raw.githubusercontent.com/Nephrite-theme/palette/main/assets/forest.svg" alt="Muestras de Forest" width="220"> | Oscuro y profundo, para la noche | [Chrome Web Store](https://chromewebstore.google.com/detail/nephrite-chrome-theme-for/efhfempmenojdgamociancffkcbncffp) |
| **Jade** | <img src="https://raw.githubusercontent.com/Nephrite-theme/palette/main/assets/jade.svg" alt="Muestras de Jade" width="220"> | Oscuro con más verde, para jornadas largas | [Chrome Web Store](https://chromewebstore.google.com/detail/nephrite-chrome-theme-jad/ijmbncbgabefgapchogbdnhfgbiiimcm) |
| **Mint** | <img src="https://raw.githubusercontent.com/Nephrite-theme/palette/main/assets/mint.svg" alt="Muestras de Mint" width="220"> | Claro y ligero, para el día | [Chrome Web Store](https://chromewebstore.google.com/detail/nephrite-chrome-theme-min/ogfckpiocojbdmefjoogcmjmgfofijpg) |

> [!NOTE]
> La versión 0.2 reconstruye cada sabor desde la paleta Nephrite, y Jade ahora es un sabor oscuro. Las capturas nuevas vienen en camino.

## Instalación

### Desde la Chrome Web Store (recomendado)

Abre el enlace del sabor que quieras y haz clic en **Añadir a Chrome**. Instalar otro sabor reemplaza el actual.

### A mano

1. Haz clic en **Code > Download ZIP** y descomprímelo. Cada sabor está en su propia carpeta dentro de `themes/`, por ejemplo `themes/Nephrite Forest`.
2. Abre `chrome://extensions` y activa el **Modo de desarrollador** (arriba a la derecha).
3. Haz clic en **Cargar descomprimida** y elige la carpeta del sabor, la que contiene `manifest.json`.

Para volver al aspecto original, abre `chrome://settings/appearance` y haz clic en **Restablecer valores predeterminados**.

## Colores

Cada color sale de la [paleta Nephrite](https://github.com/Nephrite-theme/palette), asignado a Chrome según su función:

| Parte de Chrome | Color de la paleta |
| --- | --- |
| Barra de pestañas (marco) | `mantle`, `crust` si la ventana está inactiva |
| Pestaña activa, barra de herramientas, nueva pestaña | `base` |
| Barra de direcciones | `surface0` |
| Texto principal | `text` |
| Pestañas inactivas, marcadores, íconos de la barra | `subtext` |
| Enlaces en la nueva pestaña | `jade` |

## Desarrollo

Los manifiestos de `themes/` se generan, así que no los edites a mano. Para aplicar cambios de la paleta:

```sh
node scripts/sync-palette.mjs   # descarga el palette.json más reciente
node scripts/build.mjs          # regenera los tres manifiestos
```

Para publicar una actualización, sube `VERSION` en `scripts/build.mjs`, regenera y sube cada carpeta de sabor en ZIP a su ficha de la Chrome Web Store. Requiere Node 18 o superior, sin dependencias.

## Contribuir

¿Un color que choca o poco contraste? [Abre un issue](https://github.com/Nephrite-theme/chrome/issues/new/choose) con una captura. Para saber cómo se crean y revisan los ports de Nephrite, lee la [guía para contribuir](https://github.com/Nephrite-theme/.github/blob/main/CONTRIBUTING.es.md).

## Agradecimientos

Creado y mantenido por [@ingfranciscastillo](https://github.com/ingfranciscastillo). Aquí sumaremos a quienes contribuyan a medida que crezca la comunidad.

## Más Nephrite

Nephrite llega a Firefox, VS Code y más. Mira todas las apps en [getnephrite.dev/es/ports](https://getnephrite.dev/es/ports).
