const config = {
    arrowParens: 'avoid',
    printWidth: 120,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    bracketSameLine: false,
    quoteProps: "consistent",
    bracketSpacing: true,
    importOrder: [
        '^react$', // React as first import always
        '^@/types(.*)$', // Type declarations
        '^@?[a-zA-Z0-9]+', // External packages
        '^@/(.*)$', // Internal packages
        '^.(.*(?<!(.css|.svg|.jpg|.png|.gql)))$', // Relative packages that are not known asset types
        '(.gql)$', // GraphQL
        '(.*(.svg|.jpg|.png))$', // Known asset types (svg, png, jpg)
        '(.css)$' // CSS files
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
};

module.exports = config;
