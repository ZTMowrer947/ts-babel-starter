module.exports = {
  presets: [
    // Environment
    [
      '@babel/env',
      {
        // Use core-js version 3
        corejs: 3,

        // Add polyfills based on usage
        useBuiltIns: 'usage',
      },
    ],

    // TypeScript
    '@babel/typescript',
  ],
  plugins: [
    // Resolve TypeScript module aliases
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
      },
    ],

    // Class properties
    ['@babel/proposal-class-properties', { loose: true }],

    // Object spread ({ ...a }) proposal
    '@babel/proposal-object-rest-spread',

    // Optional chaining (a?.b) proposal
    '@babel/proposal-optional-chaining',

    // Nullish coalescing operator (a ?? b) proposal
    '@babel/proposal-nullish-coalescing-operator',
  ],
};
