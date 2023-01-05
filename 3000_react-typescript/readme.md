## JBook : Start@Section 5

- section 5 : Overview, Big Problem and Solution
  - problem 1 : execute string
  - problem 2 : modern syntax
  - problem 3 : handle export/import statement
- section 6 : Code Bundler

  - babel for transpiler
  - web pack for bundler (cannot use in browser)
  - esbuild for both and work in browser

- section 7 : In-Browser Bundling with ESBuild & Unpkg

  - esbuild written in go (not work in browser), use esbuild-wasm instead
  - problem : no file system in browser, cannot import library such as react
  - solution : intercept esbuild while bundling with download package from unpkg
    ![](/3000_react-typescript/assets/01.png)

  - how to hijack esbuild bundle process
    ![](/3000_react-typescript/assets/02.png)

- section 8 : Dynamics Fetch (Multi-file package with relative path)

  - multiple package download
  - nested require in VDO No.83 : Failing Nested Paths

- section 9 : Caching (localForage)
- section 10 : Display code in iframe & Security concern
  - webpack config with react-app-rewired https://alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5 this link absolutely save my life
