import { Configuration } from 'webpack'

// Base config
import Base from './base'

const Config: Configuration = {
    ...Base,
    mode: 'development',
    watch: true,
}

export default Config
