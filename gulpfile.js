// Imports
const gulp = require('gulp');
const ts = require('gulp-typescript');
const npmConfig = require('./package.json');
const tsConfig = require('./tsconfig.json');
const minify = require('gulp-minify');

// Config
const tsBuildConfig = {
  out: `${npmConfig.name}.js`,
  allowJs: true,
  ...tsConfig.compilerOptions,
};

// Polyfills
const polyfills = ['./node_modules/systemjs/dist/s.js'];

// Build TypeScript files
gulp.task('build-ts', async () => {
  const tsResult = gulp
    .src([...polyfills, 'src/**/*.ts'])
    .pipe(ts(tsBuildConfig));
  tsResult.js.pipe(minify()).pipe(gulp.dest('dist'));
});

// Build project
gulp.task('build', gulp.series('build-ts'));

// Watch project
gulp.task('watch', () => {
  gulp.watch('src/**/*.ts', gulp.series('build-ts'));
});
