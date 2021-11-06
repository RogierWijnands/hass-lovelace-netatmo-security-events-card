// Packages
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

// Config
import * as tsConfig from './tsconfig.json';

export default {
  input: tsConfig.files[0],
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [nodeResolve(), typescript(tsConfig.compilerOptions), uglify()],
};
