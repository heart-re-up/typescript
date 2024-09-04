module.exports = {
    extends: [require('index.js'), 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
};
