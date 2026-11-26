import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "STAPLER (c. 2019). Steel, office-issue. Used by the tribe to bind loose agreements they did not trust; donated anonymously by the last believer in paper.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Read-back validation: the written file must contain exactly the line.
const written = readFileSync(outPath, "utf8");
if (written !== LINE + "\n") {
  console.error("validation failed: entry.txt does not match the placard line");
  process.exit(1);
}
console.log("entry.txt validated: exact match, " + Buffer.byteLength(written, "utf8") + " bytes");
