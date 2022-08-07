module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    'vue/setup-compiler-macros': true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended"
  ],
  'parser': 'vue-eslint-parser',
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
    'eqeqeq': 'error',
    'no-empty-function': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-self-compare': 'error',
    'no-useless-concat': 'error',
    'require-await': 'error',
    'indent': ['error', 2],
    'no-unneeded-ternary': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'rest-spread-spacing': 'error'
  }
}
