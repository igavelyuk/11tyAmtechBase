
#UPDATEWEBSITE

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


 #### _include
 Main page
 - header.njk
 - base.njk
 - content.njk
 - footer.njk

 Product page
 - prodheader.njk
 - prod.njk
 - posts.njk
 - postsslides.njk
 - prodcontent.njk

 Teams page
 - teamsheader.njk
 - teams.njk
 - base_content_teamsgroup.njk

 About page
 - about_company_header.njk
 - about_company.njk

 Contact page
 - contact_company_header.njk           
 - contact_company.njk                       

All uses common footer `footer.njk`
Beacause of menu and SEO had different headers
