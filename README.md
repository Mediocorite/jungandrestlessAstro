## Jung and Restless 

Description: A blogging site to research various psychological studies, analysis and research, authored by Dinaish Kaizad Mistry.

### Tech stack: 
#### UI/UX
- Astro
- Preact
- HTML/CSS/JS
#### Devops 
- Git
- Netlify
- TinaCMS

### Project structure 
/src
- /layout
  - BaseLayout (Header, Footer)
  - PostLayout
    - Slot in the blog posts
    - Related posts logic
- /pages
  - index.astro (home)
  - index.css
  - about.astro 
  - about.css
  - /posts
    - index.astro
    - posts.css
  - /categories
    - index.astro
    - index.css
- /styles
  - global.css
- /component
  - /header
    - index.astro
    - index.css
    - Hamburger.astro
    - ThemeToggle.astro
  - Footer.astro
  - /home
    - Hero.astro
    - Carousel.astro
  - blogGroup.astro
  - related.astros