# udemy graphql client app

## create-next-app

```
npx create-next-app .
```

## Apollo Client + heroicons + cross-fetch

```
yarn add @apollo/client graphql @apollo/react-hooks cross-fetch @heroicons/react@1.0.6
```

## React-Testing-Library + MSW(モックサーバー) + next-page-tester 

```
yarn add react@17.0.2 react-dom@17.0.2
yarn add next@11.1.2
yarn add -D msw@0.35.0 next-page-tester@0.29.0 jest@26.6.3 @testing-library/react@11.2.6 @types/jest@26.0.22 @testing-library/jest-dom@5.11.10 @testing-library/dom@7.30.3 @testing-library/user-event@13.1.3 babel-jest@26.6.3 @babel/core@7.17.9 jest-css-modules
```

## babelrc

```
touch .babelrc
{
    "presets": ["next/babel"]
}
```

## jest

```
//package,json
"jest": {
    "testPathIgnorePatterns": [
        "<rootDir>/.next/",
        "<rootDir>/node_modules/"
    ],
    "moduleNameMapper": {
        "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
    }
}
    
"scripts": {
    ...
    "test": "jest --env=jsdom --verbose"
},
```

## prettier

```
{
    "singleQuote": true,
    "semi": false
}
```

## TypeScript

```
touch tsconfig.json
yarn add -D typescript @types/react@17.0.41 @types/node
yarn dev

_app.js, index.js -> _app.tsx, index.tsxに変更
```

## Tailwind

```
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p

//tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
```

lintに引っかかるので
<https://zenn.dev/shimotaroo/articles/c8f2e751cd7877>

```css:global.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## GraphQL codegen

```
yarn add -D @graphql-codegen/cli
yarn graphql-codegen init

//スキーマファイルの置き場所
queries/**/*.ts
//output
types/generated/graphql.tsx
//codegenのscript
gen-types

yarn
yarn add -D @graphql-codegen/typescript
```
