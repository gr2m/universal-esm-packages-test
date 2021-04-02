// packages/universal-esm-packages-test/node_modules/@universal-esm-packages-test/sub-dependency/node.js
function subDependency() {
  return {
    subDependency: "node"
  };
}

// packages/universal-esm-packages-test/node_modules/@universal-esm-packages-test/dependency/node.js
function dependency() {
  return {
    ...subDependency(),
    dependency: "node"
  };
}

// packages/universal-esm-packages-test/index.js
function test() {
  return dependency();
}

// index.js
console.log(test());
