const rewrites = require('./next.js/rewrites');
const webpack = require('./next.js/webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    rewrites,
    webpack
};

module.exports = nextConfig;
