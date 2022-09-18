module.exports = async () => {
    const apiBase = new URL('/graphql', process.env.MAGENTO_BACKEND_URL).toString();

    return {
        beforeFiles: [
            // graphql proxy for client-side
            {
                source: '/api/:graphql*',
                destination: apiBase + '/:graphql*'
            }
        ]
    };
}
