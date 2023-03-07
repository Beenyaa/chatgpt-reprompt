module.exports = {
    extends: ['plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        // our custom rules
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
        'spaced-comment': 'error',
        'no-inline-comments': 'error',
        'no-console': 'error',
        'no-warning-comments': ['warn', { terms: ['@todo', 'todo', 'fixme'], location: 'start' }],
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterOverload: true, exceptAfterSingleLine: true }],
        '@typescript-eslint/no-floating-promises': 'error',
    },
};
