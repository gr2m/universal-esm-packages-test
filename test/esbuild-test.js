import { readFileSync, writeFileSync, existsSync } from "fs";

import { strictEqual } from "assert";
import { build } from "esbuild";

const tests = {
  default: {},
  node: {
    platform: "node",
  },
};

for (const [name, options] of Object.entries(tests)) {
  const result = await build({
    ...options,
    entryPoints: ["index.js"],
    bundle: true,
    write: false,
  });

  const fixturePath = `test/fixtures/${name}.js`;

  if (process.env.UPDATE_SNAPSHOTS) {
    writeFileSync(fixturePath, result.outputFiles[0].text);
    console.log(`✏️  ${fixturePath} updated.`);
  } else {
    if (!existsSync(fixturePath)) {
      writeFileSync(fixturePath, result.outputFiles[0].text);
      console.log(`✏️  ${fixturePath} created.`);

      continue;
    }

    try {
      strictEqual(
        result.outputFiles[0].text,
        readFileSync(fixturePath, "utf-8")
      );
    } catch (error) {
      console.log(error);
      console.log(
        '\nℹ️  Update snapshots with "UPDATE_SNAPSHOTS=1 npm test"\n'
      );
      process.exit(1);
    }
    console.log(`✅  ${fixturePath}`);
  }
}

console.log("\ndone.\n");
