// Generates each flavor's Chrome theme manifest from palette.json.
// Usage: node scripts/sync-palette.mjs && node scripts/build.mjs
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const VERSION = "0.2";
const root = new URL("../", import.meta.url);
const palette = JSON.parse(readFileSync(new URL("palette.json", root)));

const rgb = (hex) => [1, 3, 5].map((i) => Number.parseInt(hex.slice(i, i + 2), 16));

// Chrome surfaces mapped to palette roles (see the palette's porting guide).
const ROLES = {
	frame: "mantle",
	frame_inactive: "crust",
	frame_incognito: "crust",
	frame_incognito_inactive: "crust",
	toolbar: "base",
	toolbar_text: "text",
	toolbar_button_icon: "subtext",
	tab_text: "text",
	tab_background_text: "subtext",
	tab_background_text_inactive: "overlay1",
	bookmark_text: "subtext",
	ntp_background: "base",
	ntp_text: "text",
	ntp_link: "jade",
	omnibox_background: "surface0",
	omnibox_text: "text",
};

const ICONS = ["icon16.png", "icon48.png", "icon128.png"];

for (const [key, flavor] of Object.entries(palette.flavors)) {
	const dir = new URL(`themes/Nephrite ${flavor.name}/`, root);
	mkdirSync(new URL("icons/", dir), { recursive: true });
	// Chrome only reads files inside the theme folder, so each gets its icons.
	for (const icon of ICONS) {
		copyFileSync(new URL(`icons/${icon}`, root), new URL(`icons/${icon}`, dir));
	}

	const colors = Object.fromEntries(
		Object.entries(ROLES).map(([surface, role]) => [surface, rgb(flavor.colors[role])]),
	);

	const manifest = {
		manifest_version: 3,
		version: VERSION,
		name: `Nephrite Chrome Theme - ${flavor.name}`,
		description: `A calm, jade-inspired theme for Chrome. ${flavor.name} flavor of the Nephrite palette.`,
		icons: { 16: "icons/icon16.png", 48: "icons/icon48.png", 128: "icons/icon128.png" },
		theme: { colors },
	};

	// Keep each [r, g, b] on one line so the manifest stays readable.
	const json = JSON.stringify(manifest, null, 2).replace(
		/\[\s+(\d+),\s+(\d+),\s+(\d+)\s+\]/g,
		"[$1, $2, $3]",
	);
	writeFileSync(new URL("manifest.json", dir), `${json}\n`);
	console.log(`${key}: themes/Nephrite ${flavor.name}/manifest.json v${VERSION}`);
}

// README swatches: only the palette colors this port actually uses, in
// palette order, so the preview never promises colors the theme skips.
const used = new Set(Object.values(ROLES));
const usedKeys = [...palette.neutrals, ...palette.accents].filter((k) => used.has(k));
mkdirSync(new URL("assets/", root), { recursive: true });
for (const [key, flavor] of Object.entries(palette.flavors)) {
	const c = flavor.colors;
	const size = 44;
	const gap = 10;
	const pad = 14;
	const w = pad * 2 + usedKeys.length * size + (usedKeys.length - 1) * gap;
	const h = pad * 2 + size + 22;
	const cells = usedKeys
		.map((k, i) => {
			const x = pad + i * (size + gap);
			return `<rect x="${x}" y="${pad}" width="${size}" height="${size}" rx="10" fill="${c[k]}" stroke="${c.surface1}" stroke-width="1"/><text x="${x + size / 2}" y="${pad + size + 16}" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="9" fill="${c.subtext}">${k}</text>`;
		})
		.join("");
	writeFileSync(
		new URL(`assets/${key}.svg`, root),
		`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="100%" height="100%" rx="14" fill="${c.base}"/>${cells}</svg>\n`,
	);
}
console.log(`swatches: ${usedKeys.length} colors (${usedKeys.join(", ")})`);
