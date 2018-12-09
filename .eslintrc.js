module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  "globals": {
    "expect": true
  },
  extends: [
    "plugin:vue/recommended",
    "standard"
  ],
  plugins: [
    "vue"
  ],
  rules: {
    "generator-star-spacing": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "quotes": [2, "double", "avoid-escape"],
    "semi": [2, "never"],
    "space-before-function-paren": ["warn", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
    "vue/max-attributes-per-line": ["off"]
  }
}
