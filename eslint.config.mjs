// ores-lint house config for vorpal.
//
// MIGRATION NOTE: this repo declared its lint rules under the `eslintConfig`
// key in package.json. ESLint 9+ ignores that key completely, so the rules were
// dead. Ported semantically:
//
//   "comma-dangle": [...]        -> ported verbatim (downgraded to warn)
//   "no-underscore-dangle": "off" -> no-op; not in the house baseline anyway
//   "extends": @milesj/build-tool-config -> NOT ported (external package, and
//                                    it is not installed in this repo)
//
// The `eslintConfig` key can be deleted from package.json once this is trusted.
import oresConfig from './.ores-lint/eslint/base.mjs';

export default await oresConfig({
  rules: {
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
  },
});
