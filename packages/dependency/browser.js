import { subDependency } from "@universal-esm-packages-test/sub-dependency";
export { subDependency } from "@universal-esm-packages-test/sub-dependency";

export function dependency() {
  return {
    ...subDependency(),
    dependency: "browser",
  };
}
