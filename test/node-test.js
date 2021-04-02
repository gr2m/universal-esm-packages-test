import { deepStrictEqual } from "assert";

import { test } from "../packages/universal-esm-packages-test/index.js";

deepStrictEqual(test(), { subDependency: "node", dependency: "node" });

console.log("\ndone.");
