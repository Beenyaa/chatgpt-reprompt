module.exports = {
    extends: ['plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        // our custom rules
        'no-use-before-define': 'off',
        'spaced-comment': 'error',
        'no-inline-comments': 'error',
        'no-console': 'error',
        'no-warning-comments': ['warn', { terms: ['@todo', 'todo', 'fixme'], location: 'start' }],
    },
};
