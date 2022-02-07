import { Configuration } from 'webpack'

// Base config
import Base from './base'

const Config: Configuration = {
    ...Base,
    mode: 'production',
    optimization: {
        emitOnErrors: false,
        chunkIds: 'deterministic',
        minimize: true,
        splitChunks: {
            chunks: 'all',
            maxSize: 200000,
        },
    },
}

export default Config
