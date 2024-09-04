/**
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
    extends: ['eslint:recommended', 'airbnb-base', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: '2015',
        sourceType: 'module',
    },
    rules: {
        // default exports 우선 방식은 코드 참조 변경이나 자동 추론 시 이점을 제공하지 못한다.
        'import/prefer-default-export': 'off',
    },
};
