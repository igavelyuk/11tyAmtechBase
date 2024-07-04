### Commands
Can be used for use specific actions

- `gulp doAll` - equivalent to do all commands in proper order same as `npm run zip`
- `gulp startup` init - some packages are asyncronous and require additional initialization.
- `gulp cacheBust` clean cache
- `gulp copyHTML` manipulate all htmls in project (copy to temporary folder etc.)
- `gulp copyCss` manipulate all css in project (copy to temporary folder etc.)
- `gulp compileStyles` manipulate all styles in project (copy to temporary folder, autoprefixer, cssnano etc.)
- `gulp oneCss` - finds all css and create 1 file with purification (all unused HTML classes removed in CSS)
- `gulp minifyScripts` compress all js files in projects
- `gulp finalScript` - finds all css and create 1 file with minification
- `gulp purifyCss` //not used done on previous step

- `gulp copyAllExceptCss` - working with fonts
- `gulp copyFontsTTF` - working with fonts optimization
- `gulp copyFontsWeb` - working with fonts optimization

- `gulp doImages` - working with `jpegs`, `png`
- `gulp addFallbackAvif` - transpile `jpegs` and `png` to avif format (note Not all files compressed - reason wrong file format or missing extra data)
- `gulp purifyHtml` finds any imports of styles and javascript and replace for `one big import` for styles and javascript - This is FINAL STEP

- `gulp watcher` - no "browser sync, exists for tests, no virtual server
