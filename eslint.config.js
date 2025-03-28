// eslint.config.js
import js from '@eslint/js'
import ts from 'typescript-eslint'
import next from 'eslint-plugin-next'
import prettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ts.configs.recommended,
  next.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js doesn't require importing React
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'warn'
    }
  }
]
