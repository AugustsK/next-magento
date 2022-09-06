module.exports = (config, { isServer}) => {
    if (!isServer) {
        config.resolve.fallback = {
            net: false,
            tls: false,
            fs: false,
            child_process: false
        };
    }

    return config;
}
