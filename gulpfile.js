const gulp = require('gulp');
const eslint = require('gulp-eslint');
const gulpStylelint = require('gulp-stylelint');
const prettify = require('gulp-jsbeautifier');
const source = require("vinyl-source-stream");
const rollup = require('rollup-stream');
const babel = require('rollup-plugin-babel');
const path = require('path');

const JSFiles = [
  "js/player.js",
];

const watchFiles = JSFiles;

const JSONFiles = [
  '.babelrc',
  'package.json',
  '.jsbeautifyrc',
  '.stylelintrc',
];

const CSSFiles = [
  'css/**/*.css',
];

const HTMLFiles = [
  '*.html',
];

gulp.task('js:lint', () =>
  gulp.src(JSFiles)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('js:prettify', () =>
  gulp.src(JSFiles.concat(JSONFiles))
  .pipe(prettify({
    js: {
      file_types: ['.js', '.json'].concat(JSONFiles),
      config: './.jsbeautifyrc',
    },
  })).pipe(gulp.dest((_) => _.base)));

gulp.task('css:lint', () =>
  gulp.src(CSSFiles)
  .pipe(gulpStylelint({
    reporters: [{
      formatter: 'string',
      console: true,
    }],
  })));

gulp.task('css:prettify', () =>
  gulp.src(CSSFiles)
  .pipe(prettify({
    css: {
      file_types: ['.css', '.less', '.sass', '.scss'],
      config: './.jsbeautifyrc',
    },
  })).pipe(gulp.dest((_) => _.base)));

gulp.task('html:prettify', () =>
  gulp.src(HTMLFiles)
  .pipe(prettify({
    html: {
      file_types: ['.html'],
      config: './.jsbeautifyrc',
    },
  })).pipe(gulp.dest((_) => _.base)));

// Copy vendor files from /node_modules into /docs/vendor
gulp.task('copy', function() {
  gulp.src([
      'node_modules/font-awesome/**',
      '!node_modules/font-awesome/**/*.map',
      '!node_modules/font-awesome/.npmignore',
      '!node_modules/font-awesome/*.txt',
      '!node_modules/font-awesome/*.md',
      '!node_modules/font-awesome/*.json',
      '!node_modules/font-awesome/less/*',
      '!node_modules/font-awesome/scss/*',
    ])
    .pipe(gulp.dest('vendor/font-awesome'));
});

gulp.task('js:compile', () => {
  const scripts = JSFiles.map((f) => {
    return {
      taskName: path.basename(f),
      entry: f,
      source: path.basename(f),
      dest: './dist',
    };
  });
  let rollupCache;
  return scripts.forEach((script) =>
    rollup({
      input: script.entry,
      format: 'es',
      exports: 'none',
      sourcemap: true,
      plugins: [
        babel({
          babelrc: true,
        }),
      ],
      cache: rollupCache,
    })
    .on('unifiedcache', (unifiedCache) => rollupCache = unifiedCache)
    .pipe(source(script.source))
    .pipe(gulp.dest(script.dest)));
});

gulp.task('html', ['html:prettify']);
gulp.task('css', ['css:prettify', 'css:lint']);
gulp.task('js', ['js:prettify', 'js:lint']);
gulp.task('build', ['ext:build']);
gulp.task('docs', ['docs:copy', 'docs:js']);

gulp.task('dev', () => {
  gulp.watch(watchFiles, ['js:compile']);
});
// Default task
gulp.task('default', [
  'html',
  'js',
  'css',
  'copy',
]);
