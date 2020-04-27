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

While babel is fine.
