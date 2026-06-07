import { parse } from "@babel/parser";
import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

function walk(dir, files = []) {
  for (const f of readdirSync(dir)) {
    if (f === "node_modules" || f === ".next") continue;
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, files);
    else if (/\.(js|jsx|mjs)$/.test(f)) files.push(p);
  }
  return files;
}

const files = walk("src");
let errors = 0, ok = 0;
for (const f of files) {
  try {
    parse(readFileSync(f, "utf8"), {
      sourceType: "module",
      plugins: ["jsx"],
      errorRecovery: false,
    });
    ok++;
  } catch (e) {
    errors++;
    console.log(`✗ ${f}: ${e.message}`);
  }
}
console.log(`\n${ok} files parsed OK, ${errors} errors.`);
process.exit(errors > 0 ? 1 : 0);
