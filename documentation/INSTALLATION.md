### Base install commands
1. `git clone https://github.com/igavelyuk/11tyAmtechBase.git`
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
