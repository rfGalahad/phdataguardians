import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react' 
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'


export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],

    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      react
    },

    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,           
      react.configs.flat['jsx-runtime'],
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],

    settings: {
      react: { version: 'detect' },             
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },

    rules: {
      'react/prop-types': 'off', 
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['warn', { 
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_' 
      }],


      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // 1. React (core)
            ['^react', '^react-dom'],

            // 2. External libraries
            ['^@?\\w'],

            // 3. Internal aliases (@/)
            ['^@/'],

            // 4. Parent imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

            // 5. Same-folder imports
            ['^\\./'],

            // 6. Styles
            ['^.+\\.s?css$'],
          ],
        },
      ],

      'simple-import-sort/exports': 'warn',
    }
  },
])