// Pigeon Pitch, One Line — u-donrulezz-pigeon-pitch-one-line-af06c6cf
// A city pigeon pitches investors on CooDash, a crumb-delivery startup:
// fast fries, a crumb commission, free statue "advertising" — and the
// seed round is literal. Writes exactly one line (169 chars) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Invest in CooDash: I deliver your fries in four minutes flat, take ten percent in crumbs, and poop on your statue for free — we're raising a seed round. Literally seeds.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
