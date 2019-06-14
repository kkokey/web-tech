# baas-web

> baas-web for SASEUL

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

### Folder explain

- components
  - define components area in layout pages. It's not whole page, just part of page.
  
- middleware 
  - define custom function to be ran before rendering a page or a group of pages (layouts).

- pages
  - define layout pages and routing path.
  
- store
  - define data structure in state, mutations, actions, getters 
