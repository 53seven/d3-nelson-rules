import npm from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  plugins: [npm({jsnext: true}), commonjs({})],
  moduleId: 'd3-nelson-rules',
  name: 'd3-nelson-rules',
  output: {
    format: 'umd'
  }
};
