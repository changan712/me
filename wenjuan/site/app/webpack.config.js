//解决ionic-cli 无法hash bundle 问题   https://stackoverflow.com/questions/43415537/ionic-2-change-name-of-main-js-webpack-js-output-filename-setting

var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ionicWebpackFactory = require(process.env.IONIC_WEBPACK_FACTORY);
var cheerio = require('cheerio');

console.log('IONIC_ENV:', process.env.IONIC_ENV);

module.exports = {
    entry: process.env.IONIC_APP_ENTRY_POINT,
    output: {
        path: '{{BUILD}}',
        publicPath: 'build/',
        filename: (process.env.IONIC_ENV == 'dev' ? '' : '[chunkhash].') + process.env.IONIC_OUTPUT_JS_FILE_NAME,
        devtoolModuleFilenameTemplate: ionicWebpackFactory.getSourceMapperFunction(),
    },
    devtool: process.env.IONIC_SOURCE_MAP_TYPE,

    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.resolve('node_modules')]
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /(\.sass|\.css)$/,
            },
            {
                test: /\.ts$/,
                loader: process.env.IONIC_WEBPACK_LOADER
            },
            {
                test: /\.js$/,
                loader: process.env.IONIC_WEBPACK_TRANSPILE_LOADER
            }
        ]
    },

    plugins: [
        ionicWebpackFactory.getIonicEnvironmentPlugin(),
        updateFileName,
        updateIndexHTML
    ],

    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};



function updateFileName() {
    this.plugin("done", function (stats) {
        var buildOutput = stats.toJson()['assetsByChunkName']['main'],
            fileName = process.env.IONIC_OUTPUT_JS_FILE_NAME,
            manifest = {
                [fileName]: buildOutput[0],
                [fileName + '.map']: buildOutput[1]
            };

        updateUglifyConfig(fileName, manifest);

        process.env.IONIC_OUTPUT_JS_FILE_NAME = manifest[fileName];
        console.log('IONIC_OUTPUT_JS_FILE_NAME', process.env.IONIC_OUTPUT_JS_FILE_NAME);
    });
}

function updateIndexHTML() {
    this.plugin("done", function (stats) {
        var buildOutput = stats.toJson()['assetsByChunkName']['main'],
            outputFileName = buildOutput[0],
            currentIndexHTML = fs.readFileSync(
                path.join(__dirname, 'src', 'index.html'),
                {encoding: 'utf8'}
            ),
            $ = cheerio.load(currentIndexHTML);

        $('body').append(`<script src="build/${outputFileName}"></script>`);

        fs.writeFileSync(
            path.join(process.env.IONIC_WWW_DIR, 'index.html'),
            $.html()
        );
    });
}

function updateUglifyConfig(fileName, manifest) {
    var uglifyConfig = {
        sourceFile: manifest[fileName],
        destFileName: manifest[fileName],
        inSourceMap: manifest[fileName + '.map'],
        outSourceMap: manifest[fileName + '.map'],
        mangle: true,
        compress: true,
        comments: true
    };

    // we're writing this to www because it's specific to the current
    // build and we don't want to commit it
    fs.writeFileSync(
        path.join(__dirname, 'dist', 'uglifyjs.config.json'),
        JSON.stringify(uglifyConfig, null, 4)
    );
}
