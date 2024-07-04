#  11ty blog Amtech
#### MitchellAnderson upwork task 06/21/2024

### Use/Why/Base
Raw HTML template putted as 11ty blog engine base with git, contain mostly original HTML design, as base for future development and optimization.
On top Gulp with tasks for image, Html, Css and Js compressing and optimization.
In this form it can be improved and developed in the future.
Initial Raw HTML template got errors as multiple anchors with ID, luck of flexbox etc, photos order cant be changed ets.. This all bugs from my prespective what I trinsfer as is, just want to point it exist as in original, probably it have special purpose or maybe not.
[How 11ty template works](https://github.com/igavelyuk/11tyAmtechBase/blob/unstable-alpha/documentation/UPDATEWEBSITE.md)

### Base install commands
(Read INSTALLATION.md)[https://github.com/igavelyuk/11tyAmtechBase/blob/unstable-alpha/documentation/INSTALLATION.md]

##### Global commans and information

  - Build from 11ty `npm run build` (same as 11ty build: `npx @11ty/eleventy`)

  - Run lcalhost:8080 `npm run serve` (Live Server: `npx @11ty/eleventy --serve`)

  - Compress images, minify JS, CSS, HTML `npm run zip`


#### Packages
Versions is important

`npm install --global del-cli`

`npm install donmahallem/gulp-sharp@2.2.15 autoprefixer@10.4.2 cssnano@5.1.4 fancy-log@2.0.0 gulp-autoprefixer@8.0.0 gulp-avif@1.0.1 gulp-cheerio@1.0.0 gulp-clean@0.4.0 gulp-concat@2.6.1 gulp-cssmin@0.2.0 gulp-delete-lines@0.0.7 gulp-filter@7.0.0 gulp-fontmin@0.7.4 gulp-htmlmin@5.0.1 gulp-image-lqip@2.0.0 gulp-imagemin@8.0.0 gulp-postcss@9.0.1 gulp-purifycss@0.2.0 gulp-rename@2.0.0 gulp-replace@1.1.3 gulp-sass@5.1.0 gulp-sourcemaps@3.0.0 gulp-terser@2.1.0 htmlparser2@7.2.0 i@0.3.7 imagemin-gifsicle@7.0.0 imagemin-jpegtran@7.0.0 imagemin-mozjpeg@10.0.0 imagemin-optipng@8.0.0 imagemin-pngquant@9.0.2 imagemin-svgo@10.0.1 install@0.13.0 npm@8.5.4 plugin-error@1.0.1 sass@1.49.9 sharp@0.30.3 through2@4.0.2 vinyl-buffer@1.0.1`

#### Links

- [11ly blog engine help](https://www.11ty.dev/docs/)
- [Nunchaksjs -> help page](https://mozilla.github.io/nunjucks/),
- [Markdown -> help page](https://www.markdownguide.org/basic-syntax/)
- [WebP cli](https://developers.google.com/speed/webp/docs/precompiled)
- [Avif Webp compare online tool](https://squoosh.app)

README.md - `ver 0.0.6`
