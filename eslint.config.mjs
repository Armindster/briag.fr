import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import stylisticJs from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      '@stylistic': stylisticJs,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/space-before-function-paren': ['error', 'never'],
      '@stylistic/keyword-spacing': ['error'],
      '@stylistic/comma-spacing': ['error'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    },
  }
];

export default eslintConfig;
