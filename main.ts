import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "STAPLER (c. 2019). Steel, office-issue. Used by the tribe to bind loose agreements they did not trust; donated anonymously by the last believer in paper.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
