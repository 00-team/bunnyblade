import { Configuration } from 'webpack'
import { Configuration as DevConfig } from 'webpack-dev-server'

// Base config
import Base from './base'

interface Conf extends Configuration {
    devServer: DevConfig
}

const Config: Conf = {
    ...Base,
    mode: 'development',
    devServer: {
        port: 8000,
        hot: true, // true = full reload
        historyApiFallback: true,
        compress: true,
        client: {
            logging: 'none',
            reconnect: 7,
        },
    },
}

export default Config
