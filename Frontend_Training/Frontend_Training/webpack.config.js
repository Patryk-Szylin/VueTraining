/// <binding ProjectOpened='Watch - Development' />
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'wwwroot'),
    entry: {
        App: './js/main.js',
    },
    watch: true,
    watchOptions: {
        poll: 500
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: './bundles/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            },
            {
                test: /.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                    // other vue-loader options go here
                }
            },
        ]

    },
    // THIS IS NEEDS TO BE HERE IN ORDER FOR THE VUE TO WORK WITH 
    // import Vue from 'vue';
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    optimization: {
        minimize: true
        // uncommenting the below code will make your bundles readable for dev. 
        //minimize: false,
        //namedModules: true,
        //namedChunks: true,
        //moduleIds: 'named'
    }
};