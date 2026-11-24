// Funniest Time Machine Warning Label — make.fun entry.
// Writes one warning label (120 chars max) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "WARNING: If you meet yourself, do not make eye contact. One of you is lying about being the original.";

// Gate: the sealed scorer requires 1–120 chars, a single non-blank line.
function validateEntry(text: string): void {
  if (text.trim().length === 0) throw new Error("entry must not be blank");
  if (text.length < 1 || text.length > 120)
    throw new Error(`entry must be 1-120 characters, got ${text.length}`);
  if (text.includes("\n")) throw new Error("entry must be a single line");
}
validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
console.log(`(${ENTRY.length} characters)`);
