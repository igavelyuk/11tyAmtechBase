
# UPDATEWEBSITE

All files located in `src` during 1st stage it compiles via 11ty to `no_optimization_public_folder` during 2nd stage it optimize it to `public_folder`

### SRC

 - favicon.ico  
 - index.njk
 - products.njk
    - /prod  (markdown with links to images)
 - teams.njk
    - /teams (markdown with links to images)
 - about.njk
 - contact.njk
 - /css (folder with resources css)
 - /images (folder with resources images *.jpeg, *.png, *.avif)
 - /js (folder with resources javascript)
 - /_include


 #### `/_include` folder (general structure)

 Main page
 - 1header.njk
 - 1base.njk
 - 1content.njk
 - 1footer.njk

 Product page
 - 2prod_header.njk
 - 2prod.njk
 - 2posts.njk
 - 2posts_slides.njk
 - 2prod_content.njk
   - Dependency - 1footer.njk

 Teams page
 - 3teamsheader.njk
 - 3teams.njk
 - 3base_content_teamsgroup.njk

 About page
 - 4about_company_header.njk
 - 4about_company.njk

 Contact page
 - 5contact_company_header.njk           
 - 5contact_company.njk                       

All uses common footer `footer.njk`
Beacause of menu and SEO had different headers
