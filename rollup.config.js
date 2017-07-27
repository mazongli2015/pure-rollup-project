/*
在命令行指定配置文件 ，使用选项--config或者-c,配置文件默认为项目根目录下的rollup.config.js
rollup --config rollup.config.dev.js
rollup --config rollup.config.prod.js
*/
var  resolve = require('rollup-plugin-node-resolve');
var  babel = require('rollup-plugin-babel');
module.exports= {
  entry: 'src/index.js',
  allowRealFiles: true,
  format: 'umd',
  dest: './dist/index.bundle.js', // equivalent to --output
  sourceMap: true,
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
}
