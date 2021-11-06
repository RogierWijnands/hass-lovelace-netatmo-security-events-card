// Packages
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

// Config
import * as tsConfig from './tsconfig.json';

export default {
  input: 'src/netatmo-security-events-card.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  plugins: [typescript(tsConfig.compilerOptions), nodeResolve()],
};
