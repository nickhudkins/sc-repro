# Styled Components (Rollup / Babel) Repro

- Run `yarn build` (Rollup)
- Run `yarn build:babel` (Raw Babel)

Note that the output of Rollup is Borked...
Missing:

```js
.withConfig({
  displayName: "sc-repro__MyComponent",
  componentId: "sc-18r44ql-0",
})
```

Babel's fine though.

Checkout 'old-babel-sc' to see that output from 1.10.5 is A.O.K, for both rollup and babel.
