# study-publish-vue-library


## Passos para publicação
- `npm run build-bundle`
- `npm login`
- `npm publish --access public`
- no arquivo `public/index.html` adicionar referência para  `<link rel="stylesheet" href="../dist/testeLabLivre.css">`

No projeto desejado, para adicionar a dependência:
- npm i --save @vinnyfs89/study-publish-vue-library


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
