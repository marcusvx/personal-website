import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'react/no-unknown-property': 'off',
      'react/jsx-key': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '.astro/', 'worker-configuration.d.ts'],
  }
)
