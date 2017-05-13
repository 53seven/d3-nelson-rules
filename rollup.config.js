import npm from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  plugins: [npm({jsnext: true}), commonjs({})],
  moduleId: 'd3-nelson-rules',
  moduleName: 'd3-nelson-rules',
  format: 'umd'
};
