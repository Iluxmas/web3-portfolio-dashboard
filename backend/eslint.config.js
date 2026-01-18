import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
    ],
  },

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      /* Base */
      ...js.configs.recommended.rules,

      /* Code quality */
      'no-console': 'off', // backend logs are OK
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',

      /* Style (keep minimal, prettier handles formatting) */
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
    },
  },
]
