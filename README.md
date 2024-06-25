
#  11ty blog Amtech
## MitchellAnderson

### Base install commands
1. `git clone git@github.com:igavelyuk/11tyAmtech.git`
2. `npm install`


### How it works
- You update separate parts of the website using ninja language (HTML+some addons)
- Building static files
- Compress and optimize static files
- Upload via FTP static files on your Server

###### Commands
- `npm run build`
- `npm run serve`
- `npm run zip`

- Global commans and information
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
- [11ly blog engine](https://www.11ty.dev/docs/)
with using
- [Nunchaksjs -> help page](https://mozilla.github.io/nunjucks/),
- [Markdown -> help page](https://www.markdownguide.org/basic-syntax/)

#### Packages used
- copyHTML -> Copy HTML from src to dist folder
  - (package: )
- compileStyles -> Compile SASS
  - (package: `npm install sass npm-run-all --save-dev` )
- copyCss -> autoprefix and minify css put to /dist/.../tmp/css
  - (package: `npm install clean-css`)
- cacheBust -> cache bust
  - (package: )
- oneCss -> make from all min.css files makes one all-min.css
  - (package: )
- minifyScripts -> minify js
  - (package: )
- purifyCss -> pass HTML export to filter classes from CSS
  - (package: )
- finalScript -> make from all min.js files makes one all-min.js
  - (package: )
- copyAllExceptCss -> in css folder can be extra resources, it copy to dist folder
  - (package: )
- copyFontsTTF -> copy fonts with optimizations from fonts folder
  - (package: )
- copyFontsWeb -> copy fonts with optimizations from webfonts folder
  - (package: )
- oneCssCompress -> compress all-min.css
  - (package: )
- optimizeImages -> optimize pictures
  - (package: `npm install @11ty/eleventy-img`)
- deleteTemps -> delete tmp folder (stored css)
  - (package: )
- purifyHtml -> removes all CSS and JS import s (package: )

README.md - `ver 0.0.3`
