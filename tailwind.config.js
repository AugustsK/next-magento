/** @type {import('tailwindcss').Config} */
module.exports = {
    content: {
        files: [
            './pages/**/*.{js,ts,jsx,tsx,module.css}',
            './src/**/*.{js,ts,jsx,tsx,module.css}',
            './styles/**/*.{js,ts,jsx,tsx,module.css}',
            'node_modules/@magento/**/*.{js,ts,jsx,tsx,module.css}',
        ],
        extract: {
            wtf: content => content.match(matcher) || []
        }
    },
    separator: '_',
    theme: {
        extend: {
            zIndex: {
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
                '6': '6',
                '7': '7',
                '8': '8',
                '9': '9',
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ]
};

const matcher = /(?<=composes:.*)(\b\S+\b)(?=.*from global;)/g;
