# universal-esm-packages-test

The goal of this repository is to create a dependency tree with different code paths for Node.js and browsers. It is meant to be used as a test case for build tools / bundlers as well as module CDNs such as [Skypack](https://www.skypack.dev/)

## Usage in node

Install

```
npm install universal-esm-packages-test
```

Use

```js
import { test } from "universal-esm-packages-test";

console.log(test());
// { subDependency: 'node', dependency: 'node' }
```

## Usage in browser

```js
const { test } = await import(
  "https://cdn.skypack.dev/universal-esm-packages-test"
);

console.log(test());
// { subDependency: "browser", dependency: "browser" }
```

## How it works

The structure of the module is

```
universal-esm-packages-test
└─┬ @universal-esm-packages-test/dependency
  └── @universal-esm-packages-test/sub-dependency
```

Each package is implemented as ES Modules, utilizing Node's [ES Modules support](https://nodejs.org/api/esm.html) (Node 12+ required). The respective `package.json` files use [conditional exports](https://nodejs.org/api/packages.html#packages_conditional_exports) in order to define different code for Node and browser.

## Tests

```
npm test
```

## License

[ISC](license.md)
