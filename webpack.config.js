var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ReactTabHotkeyReplacer.js',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactTabHotkeyReplacer.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
};
