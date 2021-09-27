module.exports = {
    mode: 'production', // "production" | "development" | "none"
    resolve: {
        extensions: ['*', '.mjs', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                type: 'javascript/auto',
            }
        ]
    }
}