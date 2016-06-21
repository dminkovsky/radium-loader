// Loader for `/\.css$/` files configured in  webpack.config.js

import radiumStyles from './test.css'

if (typeof radiumStyles !== 'object') {
  throw new Error('Expected object')
}
