import { RuleSetRule, RuleSetUseItem } from 'webpack'

const SassLoaders: RuleSetUseItem[] = [
    {
        loader: 'sass-loader',
        options: {
            sassOptions: {
                includePaths: ['./src/App/style'],
            },
        },
    },
]

const Style: RuleSetRule = {
    test: /\.(s|)[ac]ss$/i,
    use: ['style-loader', 'css-loader', ...SassLoaders],
}

export { Style }
