
#  11ty blog Amtech
#### MitchellAnderson upwork task 06/21/2024

### Base install commands
1. `git clone git@github.com:igavelyuk/11tyAmtech.git`
2. `npm install`


### How it works
- You update separate parts of the website using ninja language (HTML+some addons)
- Building static files
- Compress and optimize static files
- Upload via FTP static files on your Server

#### Commands
- `npm run build`
  - removing `/no_optimization_public_folder` and build build fresh version inside, without optimization
- `npm run serve`
  - showing live version of current un optimized website (localhost:8080)
- `npm run zip`
  - removing `/public_folder` and build build fresh version inside, with optimization source from `/no_optimization_public_folder`

##### Global commans and information

  - Build from 11ty `npm run build` (same as 11ty build: `npx @11ty/eleventy`)

  - Run lcalhost:8080 `npm run serve` (Live Server: `npx @11ty/eleventy --serve`)

  - Compress images, minify JS, CSS, HTML `npm run zip`

##### Local GULP Commands
You can use it to do only one task
 - `gulp doAll` - equivalent to do all commands in proper order same as `npm run zip`
 - `gulp startup` init
 - `gulp cacheBust` clean cache
 - `gulp copyHTML` manipulate all htmls in project (copy to temporary folder etc.)
 - `gulp copyCss` manipulate all css in project (copy to temporary folder etc.)
 - `gulp compileStyles` manipulate all styles in project (copy to temporary folder, autoprefixer, cssnano etc.)
 - `gulp oneCss` - finds all css and create 1 file with purification
 - `gulp minifyScripts` compress all js files in projects
 - `gulp finalScript` - finds all css and create 1 file with minification
 - `gulp purifyCss` //not used done on previous step

 - `gulp copyAllExceptCss` - working with fonts
 - `gulp copyFontsTTF` - working with fonts optimization
 - `gulp copyFontsWeb` - working with fonts optimization

 - `gulp doImages` - working with `jpegs`, `png`
 - `gulp addFallbackAvif` - transpile `jpegs` and `png` to avif format (note Not all files compressed - reason wrong file format or missing extra data)
 - `gulp purifyHtml` finds any imports of styles and javascript and replace for `one big import` for styles and javascript - This is FINAL STEP

 - `gulp watcher`
 - `gulp oneCssCompress` /not used
 - `gulp cacheBust` /clean cache


#### Packages
npm install --global del-cli

#### Links

- [11ly blog engine help](https://www.11ty.dev/docs/)
- [Nunchaksjs -> help page](https://mozilla.github.io/nunjucks/),
- [Markdown -> help page](https://www.markdownguide.org/basic-syntax/)
- [WebP cli](https://developers.google.com/speed/webp/docs/precompiled)
- [Avif Webp compare online tool](https://squoosh.app)

#### Packages used
 - "@donmahallem/gulp-sharp": "^2.2.15",
 - "autoprefixer": "^10.4.2",
 - "cssnano": "^5.1.4",
 - "fancy-log": "^2.0.0",
 - "gulp-autoprefixer": "^8.0.0",
 - "gulp-avif": "^1.0.1",
 - "gulp-cheerio": "^1.0.0",
 - "gulp-clean": "^0.4.0",
 - "gulp-concat": "^2.6.1",
 - "gulp-cssmin": "^0.2.0",
 - "gulp-delete-lines": "^0.0.7",
 - "gulp-filter": "^7.0.0",
 - "gulp-fontmin": "^0.7.4",
 - "gulp-htmlmin": "^5.0.1",
 - "gulp-image-lqip": "^2.0.0",
 - "gulp-imagemin": "^8.0.0",
 - "gulp-postcss": "^9.0.1",
 - "gulp-purifycss": "^0.2.0",
 - "gulp-rename": "^2.0.0",
 - "gulp-replace": "^1.1.3",
 - "gulp-sass": "^5.1.0",
 - "gulp-sourcemaps": "^3.0.0",
 - "gulp-terser": "^2.1.0",
 - "htmlparser2": "^7.2.0",
 - "i": "^0.3.7",
 - "imagemin-gifsicle": "^7.0.0",
 - "imagemin-jpegtran": "^7.0.0",
 - "imagemin-mozjpeg": "^10.0.0",
 - "imagemin-optipng": "^8.0.0",
 - "imagemin-pngquant": "^9.0.2",
 - "imagemin-svgo": "^10.0.1",
 - "install": "^0.13.0",
 - "npm": "^8.5.4",
 - "plugin-error": "^1.0.1",
 - "sass": "^1.49.9",
 - "sharp": "^0.30.3",
 - "through2": "^4.0.2",
 - "vinyl-buffer": "^1.0.1"

README.md - `ver 0.0.5`
