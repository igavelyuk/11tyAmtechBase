const {
  task,
  src,
  dest,
  watch,
  series,
  parallel,
  gulp
} = require('gulp');
// const imagemin = require('gulp-imagemin'); // require() is not proper imagemin import for current version
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const terser = require('gulp-terser');
const sass = require('gulp-sass')(require('sass')); //reccomended to install two versions and import two versions
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const buffer = require('vinyl-buffer');
const purify = require('gulp-purifycss');
const fontmin = require('gulp-fontmin');
const gaprefixer = require('gulp-autoprefixer');
const deleteLines = require('gulp-delete-lines');
const cheerio = require('gulp-cheerio');
const gulpFilter = require('gulp-filter');
const clean = require('gulp-clean');
const gulpImgLqip = require('gulp-image-lqip');
const log = require('fancy-log');
const gulpAvif = require('gulp-avif');
const bust = require('gulp-buster');

const {
  WritableStream
} = require("htmlparser2/lib/WritableStream");

// Proper import of imagemin and all components,
// for easy setup recomemded install all and manage in config
// webP format in pipe will compress all *.jpg and *.jpeg
// files to webp with exstension of *.jpg and *.jpeg

let /** @type {import("gulp-imagemin")} */ imagemin;
let /** @type {import("imagemin-gifsicle")} */ imageminGiftran;
let /** @type {import("imagemin-optipng")} */ imageminOpngtran;
let /** @type {import("imagemin-svgo")} */ imageminSvgotran;
let /** @type {import("imagemin-jpegtran")} */ imageminJpegtran;
let /** @type {import("imagemin-mozjpeg")} */ imageminMoztran;
let /** @type {import("imagemin-pngquant").default} */ imageminPngquant;
let /** @type {import("imagemin-webp").default} */ imageminWebptran;
// let /** @type {import("insert-tag").default} */ insertTag;

const startup = async () => {
  // @ts-ignore
  imagemin = (await import("gulp-imagemin")).default;
  // @ts-ignore
  imageminGiftran = (await import("imagemin-gifsicle")).default;
  imageminOpngtran = (await import("imagemin-optipng")).default;
  imageminSvgotran = (await import("imagemin-svgo")).default;
  imageminJpegtran = (await import("imagemin-jpegtran")).default;
  imageminMoztran = (await import("imagemin-mozjpeg")).default;
  imageminPngquant = (await import("imagemin-pngquant")).default;
  imageminWebptran = (await import("imagemin-webp")).default;
  // insertTag = (await import("insert-tag")).default;
};
// ============= finish of import of imagemin =====================

// run this task before any that require imagemin, proper initialization
task("startup", async () => {
  await startup();
});
// ============= finish initialization of imagemin ================

// Configs per project
const srcfolder = "./no_optimization_public_folder";
const srcfolderfonts = "./src";
const destfolder = "./public_folder/";
const assetFinal = "";
// All paths
const paths = {
  html: {
    src: [ srcfolder + '/**/*.html'],
    dest: destfolder,
    srcpurity: [destfolder +  '/**/*.html'],
    destpurity: destfolder,
  },
  images: {
    src: [ srcfolder + '/images/**/**/*'],
    dest: destfolder + '/images/',
    destavif: destfolder + '/images/avif',
  },
  css: {
    src: [ srcfolder + '/css/**/*.css'],
    dest: destfolder + '/tmp/css/',
    srcone: [destfolder + '/tmp/css/**/*.css'],
    destone: destfolder + '/css/',
  },
  fonts_ttf: {
    src: [ srcfolderfonts + '/css/ttf/**/*'],
    dest: destfolder + 'css/ttf/',
  },
  fonts_web: {
    src: [srcfolderfonts + '/css/webfonts/**/*'],
    dest: destfolder + 'css/webfonts/',
  },
  styles: {
    src: [ srcfolder + '/scss/**/*.scss'],
    dest: destfolder + 'scss/',
  },
  scripts: {
    src: [ srcfolder + '/js/**/*.js'],
    dest: destfolder + 'tmp/js/',
    srcone: [destfolder + 'tmp/js/**/*.js'],
    destone: destfolder + '/js/',
  },
  cachebust: {
    src: [ srcfolder + '/**/*.html'],
    dest: destfolder + '/',
  },
  final: {
    srcjs: [destfolder +  'tmp/js/**/*.js'],
    srccss: [destfolder + 'css/**/all-min.css'],
    destcss: destfolder + 'css/',
    destjs: destfolder +  'js/',
  }
};

async function doAll() {
  // series(copyHTML, compileStyles, copyCss, cacheBust, oneCss, minifyScripts,
  //   purifyCss, finalScript, copyAllExceptCss, copyFontsTTF, copyFontsWeb, oneCssCompress, addFallbackAvif, cacheBust)();
  // series(series(startup, optimizeImages, as, purifyHtml))();
  // series(series(purifyHtml))();

// Backup Good
  // series(startup, cacheBust, copyHTML, copyCss, copyFontsTTF, copyFontsWeb, compileStyles, oneCss, minifyScripts, finalScript, purifyHtml, optimizeImages, addFallbackAvif)();

  series(startup, cacheBust, copyHTML, copyCss, copyFontsTTF, copyFontsWeb, compileStyles, oneCss, bustCss, minifyScripts, finalScript, bustJs, purifyHtml, hashJs, hashCss)();
}

// Early prototype, not finished
// will lead to produce
function addFallbackAvif() {
  return (series('addFallbackAvif1')())
    // <picture>
    // <source type="image/avif" srcset="./to/show.avif" />
    // <source type="image/webp" srcset="./to/show.webp" />
    // <img src="./to/show.png">
    // </picture>
}
function loadJsons(path) {
  var sources = require(path+'/busters.json');
  return (sources);

  //(log(toString(hash)))
    // <picture>
    // <source type="image/avif" srcset="./to/show.avif" />
    // <source type="image/webp" srcset="./to/show.webp" />
    // <img src="./to/show.png">
    // </picture>
}
task('addFallbackAvif1', ()=>{
    return src(paths.images.src+'.{png,jpg,jpeg}')
        .pipe(
          gulpAvif({
            quality: 40,
            lossless: false,
            speed: 8,
            chromaSubsampling: '4:2:0'
          })
        )
        .pipe(dest(paths.images.destavif));
});
function placeholder() {
  return src('/src/preview-file/*.html')
    // `gulp-image-lqip` needs filepaths
    // so you can't have any plugins before it
    .pipe(gulpImgLqip('/img/placeholder/*'))
}

// gulp.task('default', function() {
// 	var srcGlob = 'scss/*.scss';
// 	return gulp.src(srcGlob)
// 		.pipe(watch(srcGlob, function(files) {
// 			return files
// 				.pipe(sass())
// 				.pipe(gulp.dest('css'))
// 				.pipe(bust())           // pipe generated files into gulp-buster
// 				.pipe(gulp.dest('.'));  // output busters.json to project root
// 	}));
// });

function copyFontsTTF() {
  return src(paths.fonts_ttf.src)
    .pipe(fontmin())
    .pipe(dest(paths.fonts_ttf.dest));
}

function copyFontsWeb() {
  return src(paths.fonts_web.src)
    .pipe(fontmin())
    .pipe(dest(paths.fonts_web.dest));
}

function copyHTML() {
  return src(paths.html.src)
    // .pipe(htmlmin({
    //    collapseWhitespace: true
    //  }))
    .pipe(dest(paths.html.dest));
}

//2 Must run second from CSS Optimization
function oneCss() {
  return src(paths.css.srcone)
    // .pipe(sourcemaps.init())
    // .pipe(gaprefixer())
    // .pipe(bust())
    // .pipe(dest('.'))
    .pipe(concat('all-min.css'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulpFilter(['**', `!*/css/all-min.css`]))
    .pipe(clean())
    // .pipe(loadJsons(paths.css.destone))
    // .pipe(bust())
    .pipe(dest(paths.css.destone));
}
function bustCss() {
  return src('./public_folder/css/*.css')
    .pipe(bust())
    .pipe(clean())
    .pipe(dest(paths.css.destone));
}
function hashCss() {
  return src('./public_folder/css/*.css')
  .pipe(rename('base' + (hashCss1()) + '.css'))
  // pipe(rename({
  //   suffix: hashCss1()
  // }))
  .pipe(dest('public_folder/'));
}
function hashCss1() {

  let CSSHash = loadJsons(`./public_folder/css/`);
  CSSHash = CSSHash["public_folder/css/all-min.css"];
  let CSSHashString = `${'../../css/'+CSSHash}`
  return CSSHashString;
  // .pipe(dest(`"${'../../css/'+CSSHash+'.css'}"`));
}
function copyAllExceptCss() {
  return src(['' + '/css/**/*','!' + '/css/**/*.css','!' + '/css/**/*.map'])
    .pipe(dest(paths.css.destone));
}
//1 Must run first from CSS Optimization
function copyCss() {
  return src(paths.css.src)
    .pipe(postcss([autoprefixer(), cssnano()]))
    // .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.css.dest));
}

function oneCssCompress() {
  return src(paths.css.src)
    // .pipe(sourcemaps.init())
    // .pipe(gaprefixer())
    .pipe(concat('all-min.css'))
    // .pipe(sourcemaps.write('.'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    // .pipe(bust())
    .pipe(dest(paths.css.destone));
    // .pipe(bust());
}

function purifyCss() {
  const HTML = paths.html.src;
  // const JS = paths.scripts.src;
  return src(paths.final.srccss)
    // takes source CSS what have all stules for page it can be bundle of Bootstrap
    // than takes file what probably can use it and depend how often they used it cut parts of  source to dist
    // .pipe(purify([HTML, JS]))
    //previous line with javascript removed, gives an errors
    .pipe(purify(HTML))
    // .pipe(postcss([autoprefixer(), cssnano()]))
    // .pipe(postcss([autoprefixer(), cssnano()]))
    // .pipe(bust())
    // .pipe(loadJsons(paths.final.srccss))
    .pipe(dest(paths.css.destone))
    // .pipe(bust())
    // .pipe(loadJsons(paths.final.srccss));
};

// ------------------ deleteLines -------------------------------------
// I think pretty dangerous function
function purifyHtml() {
  return src(paths.html.srcpurity)
    .pipe(deleteLines({
      'filters': [/<script\s+type=["']text\/javascript["']\s+src=/i]
    }))
    .pipe(deleteLines({
      'filters': [/<script\s+src=/i]
    }))
    .pipe(deleteLines({
      'filters': [/<link\s+rel=["']/i]
    }))
    .pipe(deleteLines({
      'filters': [/<!--/i]
    }))
    .pipe(cheerio(function($) {
      // $('script').remove(); /broken files
      // $('link').remove();
      let CSSHash = loadJsons(`./public_folder/css/`);
      // console.log(CSSHash["public_folder/css/all-min.css"]);
      CSSHash = CSSHash["public_folder/css/all-min.css"];
      $('head').append(`<link rel="stylesheet" href="${assetFinal+'../../css/'+CSSHash+'.css'}"/>`);
      // +${(loadJsons(`./public_folder/css/`))}
      // loadJsons(`./public_folder/js/`);
      let JSHash = loadJsons(`./public_folder/js/`);
      JSHash = JSHash["public_folder/js/all-min.js"];

      $('body').append(`<script src="${assetFinal+'../../js/'+JSHash+'.js'}"></script>`);
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest(paths.html.destpurity))
    // .on('end', function() {
    //   log("Process => "+srcfolder)
    //   log.warn("Status => ============ purifyHtml ==============")
    //   log.info("Time => "+new Date().toLocaleString())
    //   })
}

function optimizeImages() {
  return src(paths.images.src)
    // in pipe converts all JPEGS to webp format
    // must be used with cautions
    .pipe(imagemin([
    	imageminGiftran({interlaced: true}),
    	imageminMoztran({quality: 40, progressive: true}),
    	imageminOpngtran({optimizationLevel: 5}),
    	// svgo({
    	// 	plugins: [
    	// 		{
    	// 			name: 'removeViewBox',
    	// 			active: true
    	// 		},
    	// 		{
    	// 			name: 'cleanupIDs',
    	// 			active: false
    	// 		}
    	// 	]
    	// })
    ]))
    // .pipe(
    //
    //   imagemin([
    //    	// imageminWebptran({
    //     //    quality: 50
    //     // }),
    //   imageminGiftran({
    //     colors: 128,
    //     interlaced: true,
    //     optimizationLevel: 3
    //   }),
    //   imageminMoztran({
    //     progressive: true,
    //     quality: 50,
    //     quantTable: 0
    //   }),
    //   imageminOpngtran({
    //     optimizationLevel: 6
    //     // Level and trials:
    //     // (1)     (2)      (3)       (4)       (5)        (6)        (7)
    //     // 1 trial 8 trials 16 trials 24 trials 48 trials 120 trials 240 trials
    //   })
    // ]).on('error', (error) => console.log(error)))
    // .pipe(bust())
    .pipe(dest(paths.images.dest))
}
// Minify Images
/**
 * Lot of headache
 *
 */
function doImages() {
  return (series('copyImages')())
  // OR
  // (gulp.parallel("task1", "task2")());
}
task('copyImages', series(startup, optimizeImages));

// Compile styles
/**
 * To concat styles, add below code after sourcemaps is initialized
 * .pipe(concat('{OutputFileName}.css'))
 *
 * Note - Not all plugins work with postcss, only the ones mentioned in their documentation
 */
function compileStyles() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest));
}
// Minify scripts
/**
 * To concat scripts, add below code after sourcemaps is initialized
 * .pipe(concat('{OutputFileName}.js'))
 */

function finalScript() {
  return src(paths.final.srcjs)
    .pipe(sourcemaps.init())
    .pipe(concat('all-min.js'))
    .pipe(sourcemaps.write('.'))
    // .pipe(del([paths.scripts.src, `!${assetFinal} + /js/all-min.js`]))
    .pipe(gulpFilter(['*', `!${assetFinal} + ../../js/all-min.js`]))
    // .pipe(clean())
    .pipe(dest(paths.final.destjs));
}
function bustJs() {
  return src("./public_folder/js/*.js")
    .pipe(bust())
    .pipe(clean())
    .pipe(dest("./public_folder/js/"));
}
function hashJs() {
  return src('./public_folder/js/*.js')
  .pipe(rename('base' + (hashJs1()) + '.js'))
  .pipe(dest('public_folder/'));
}
function hashJs1() {
  let JSHash = loadJsons(`./public_folder/js/`);
  JSHash = JSHash["public_folder/js/all-min.js"];
  let JSHashString = `${'../../js/'+JSHash}`
  return JSHashString;
}
function as() {
  return src('./public_folder/tmp', {
      read: false
    })
    .pipe(clean());
}
// task('aa',series(del(['dist/preview-file/assets/**/*','!dist/preview-file/assets/js/all-min.js'])));

function minifyScripts() {
  return src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(terser().on('error', (error) => console.log(error)))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.scripts.dest));
}
// Cache bust
/**
 * For cache bust, include 'chache_bust' parameter with any number to all styles and scripts links
 * For e.g. -
 * <link rel="stylesheet" href="/dist/css/style.min.css?cache_bust=123" />
 * <script src="/dist/js/script.min.js?cache_bust=123"></script>
 */
function cacheBust() {
  return src(paths.cachebust.src)
    .pipe(replace(/cache_bust=\d+/g, 'cache_bust=' + new Date().getTime()))
    .pipe(dest(paths.cachebust.dest));
}

// Watch for file modification at specific paths and run respective tasks accordingly
function watcher() {
  watch(paths.html.src, series(copyHTML, cacheBust));
  watch(paths.images.src, series(startup, optimizeImages));
  watch(paths.styles.src, series(compileStyles, cacheBust));
  watch(paths.scripts.src, parallel(minifyScripts, cacheBust));
}
// Export tasks to make them public
// exports.copyImages = copyImages;
exports.addFallbackAvif = addFallbackAvif;
exports.copyAllExceptJs = copyAllExceptCss;
// exports.finishInfo = finishInfo;
exports.oneCssCompress = oneCssCompress;
exports.placeholder = placeholder;
exports.as = as;
exports.doAll = doAll;
exports.doImages = doImages;
exports.oneCss = oneCss;
exports.bustCss = bustCss; // second pass script
exports.hashCss = hashCss;
exports.hashCss1 = hashCss1;
exports.copyCss = copyCss;
exports.purifyCss = purifyCss;
exports.copyHTML = copyHTML;
exports.purifyHtml = purifyHtml; // second pass script
exports.copyFontsTTF = copyFontsTTF;
exports.copyFontsWeb = copyFontsWeb;
exports.optimizeImages = optimizeImages;
exports.compileStyles = compileStyles;
exports.finalScript = finalScript; // second pass script
exports.bustJs = bustJs;
exports.hashJs = hashJs;
exports.hashJs1 = hashJs1;
exports.minifyScripts = minifyScripts;
exports.cacheBust = cacheBust;
exports.watcher = watcher;
exports.default = series(
doAll
);
//
