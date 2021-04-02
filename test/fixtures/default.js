(() => {
  // packages/universal-esm-packages-test/node_modules/@universal-esm-packages-test/sub-dependency/browser.js
  function subDependency() {
    return {
      subDependency: "browser"
    };
  }

  // packages/universal-esm-packages-test/node_modules/@universal-esm-packages-test/dependency/browser.js
  function dependency() {
    return {
      ...subDependency(),
      dependency: "browser"
    };
  }

  // packages/universal-esm-packages-test/index.js
  function test() {
    return dependency();
  }

  // index.js
  console.log(test());
})();
