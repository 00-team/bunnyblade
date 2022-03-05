import { Configuration } from 'webpack'

// path
import { DIST_DIR, APP_DIR, PUBLIC_DIR } from './config/path'
import { resolve } from 'path'

// style
import { Style } from './config/style'

// plugins
import HtmlWP from 'html-webpack-plugin'

const Base: Configuration = {
    entry: resolve(APP_DIR, 'index.tsx'),
    output: {
        path: DIST_DIR,
        filename: '[name].bundle.js',
        chunkFilename: '[name].[id].chunk.js',
        clean: true,
        sourceMapFilename: 'source_maps/[file].map',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            Style,
        ],
    },
    plugins: [
        new HtmlWP({
            filename: resolve(DIST_DIR, 'index.html'),
            template: resolve(PUBLIC_DIR, 'template.html'),
            inject: true,
            publicPath: './',
            minify: false,
        }),
    ],
    resolve: {
        extensions: ['.mjs', '.tsx', '.ts', '.js'],
        alias: {
            '~comps': resolve(APP_DIR, 'components'),
            '~Hexa': resolve(APP_DIR, 'components/Hexa'),
            state: resolve(APP_DIR, 'state'),
        },
    },
    devtool: 'source-map',
}

export default Base
