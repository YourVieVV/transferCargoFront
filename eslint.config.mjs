// @ts-check
import eslint from '@eslint/js';
import recommendedConfig from 'eslint-plugin-prettier/recommended';
import prettierConfig from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    recommendedConfig,
    prettierConfig,
);