/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        files: [
            './pages/**/*.{js,ts,jsx,tsx,module.css}',
            './src/**/*.{js,ts,jsx,tsx,module.css}',
            './styles/**/*.{js,ts,jsx,tsx,module.css}'
        ],
        extract: {
            wtf: content => content.match(matcher) || []
        }
    },
    separator: '_',
    theme: {
        extend: {}
    },
    plugins: [require('@tailwindcss/forms')]
};

const matcher = /(?<=composes:.*)(\b\S+\b)(?=.*from global;)/g;
