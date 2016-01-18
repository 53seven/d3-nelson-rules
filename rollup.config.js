import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'index.js',
  plugins: [npm({jsnext: true}), commonjs({})],
  moduleId: 'd3-es-geohashgrid',
  moduleName: 'd3-es-geohashgrid',
  format: 'umd'
};
