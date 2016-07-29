## Folder structure

```
.
├── .babelrc                  # Configures Babel
├── .editorconfig             # Configures editor rules
├── .eslintrc                 # Configures ESLint
├── .gitignore                # Tells git which files to ignore
├── .npmrc                    # Configures npm to save exact by default
├── README.md                 # This file.
├── dist                      # Folder where the build script places the built app. Use this in prod.
├── docs                      # Documentation
├── package.json              # Package configuration. The list of 3rd party libraries and utilities
├── src                       # Source code
│   ├── actions               # Redux actions. List of distinct actions that can occur in the app.
│   ├── components            # React components
│   ├── constants             # Application constants including constants for Redux
│   ├── containers            # Top-level React components that interact with Redux
│   ├── middleware            # Sagas actions. List of distinct async actions that can occur in the app.
│   ├── favicon.ico           # favicon to keep your browser from throwing a 404 during dev. Not actually used in prod build.
│   ├── index.html            # Start page
│   ├── index.js              # Entry point for your app
│   ├── reducers              # Redux reducers. Your state is altered here based on actions
│   ├── store                 # Redux store configuration
│   └── styles                # CSS Styles, typically written in Sass
│   ├── utils                 # Plain old JS objects (POJOs). Pure logic. No framework specific code here.
├── tools                     # Node scripts that run build related tools
│   ├── build.js              # Runs the production build
│   ├── buildHtml.js          # Builds index.html
│   ├── distServer.js         # Starts webserver and opens final built app that's in dist in your default browser
│   ├── srcServer.js          # Starts dev webserver with hot reloading and opens your app in your default browser
└── webpack.config.js         # Configures webpack
```

## Get Started

We need to implement a new feature, the singer Katy Perry will promote some of our products. The Product Owner ask us to implement this new feature, he said that "Clients needs to identify which products are promoted by Katy Perry".

So, time to rock!.

## Requirements

1. [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
2. [Google Chrome](https://www.google.com/chrome/)
3. [Atom Editor](https://atom.io/)

## Instructions

We need to implement the following ranked User Stories.

1. As a Client I need to see which products were featured by Katy Perry.
2. As a Owner I need to feature some product.
3. As a Client I need to have a top menu to access all feature products.

## First al all - configure the ip of your APIs

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/middleware` and open `sagas.js` in Atom editor.
3. For `summerschool.users`:
  1. Find `yield call` in `doRequestUser` function.
  2. Change localhost with the `summerschool.users` public ip.
4. For `summerschool.items`:
  1. Find `yield call` in `doRequestProducts` function.
  2. Change localhost with the `summerschool.items` public ip.
5. For `summerschool.cart`:
  1. Find `yield call` in `doRequestCart `function.
  2. Change localhost with the `summerschool.cart` public ip.
6. Save the file.
7. Verify that all test pass running `npm run test`.
8. Use Postman to check the following endpoints. Remember set the header key: authorization value: Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf
  1. http://SERVICE-PUBLIC-IP-ADDRESS:3100/api/v1/products
  2. http://SERVICE-PUBLIC-IP-ADDRESS/api/v1/cart/1 
  3. http://SERVICE-PUBLIC-IP-ADDRESS/api/v1/users/1
7. Run `npm run build`.

Aqui hicieron un deploy manual al nuevo server.

## Tasks

### 1. Modify Items API

Files route:

1. In `summerschool-items-api` repository.
2. Navigate to the folder /api and open `products.apib` in Atom editor.

Add `feature true` for each product with `id 1, 4, 7` and `false` for the rest.

Clues:

1. Check [APIBluePrint](https://apiblueprint.org/documentation/specification.html) specification.
1. Respect identation.
2. Restart the service after do any change.
2. Remember verify the response making a call to this endpoint.

### 2. Modify Cart API

Files route:

1. In `summerschool-cart-api` repository.
2. Navigate to the folder `/api` and open `cart.apib` in Atom editor.

Add `feature true` for each product with `id 2` and `false` for the rest.

Clues:

1. Check [APIBluePrint](https://apiblueprint.org/documentation/specification.html) specification.
1. Modify the proper repository.
2. Restart the service after do any change.
2. Remember verify the response making a call to this endpoint.

### 3. Add feature image to Products.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `ProductItem.js` in Atom editor.

Add the feature image to Products in main page.

Clues:

1. Check [Span Tag](http://www.w3schools.com/tags/tag_span.asp) specification.
2. Check [Img Tag](http://www.w3schools.com/tags/tag_img.asp) specification.
3. Check [Nesting Tags](http://www.bu.edu/tech/services/comm/websites/www/non-wordpress/start/html-introduction/syntax/nesting-tags/) post.
4. Save the tags in `PrintFeatureItem` const before the return.
5. Add `span` tag with `className` equals to `feature-product`
6. Nest to `span` an `img` with `src` equal to `{require("../images/featured_product.png")}`
5. Remember validate that show feature image only for products that have `feature equal to true`.
6. Add `propType` for feature prop.
7. Print the value after the `tag` with `className mid-pop` 
8. Verify the correct render of the change.

Const definition example:

```
const Variable =
      <span>
        <img src="image-path" alt="alt-title"/>
      </span> : "";
```

If condition assignment example:

```
const Variable =
  (condition)?
    <p>True</p> : <p>False</p>;
```

### 4. Add feature product styles.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/styles` and open `styles.scss` in Atom editor.

Add styles for feature product image, the image needs to appear over product image.

Clues:

1. Check [Sass 3](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html) syntax.
2. Check [CSS Position](http://www.w3schools.com/cssref/pr_class_position.asp) property.
3. Nest feature image class to mid-pop.
4. Use position absolute property.
5. Use top and right properties.
6. Verify the styles in the browser with [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts?hl=en).

### 5. Add feature path.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src` and open `routes.js` component in Atom editor.

Add feature path.

Clues:

1. Check [Link Routes](https://github.com/reactjs/react-router/blob/master/docs/guides/IndexRoutes.md) documentation.

### 6. Add feature menu.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `Header.js` component in Atom editor.

Add feature menu link.

Clues:

1. Check [Link Component](https://github.com/reactjs/react-router/blob/master/docs/API.md#link).

### 7. Add validation for pathname /feature.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `MainStore.js` in Atom editor.

Add `/feature` validation for the new route in `MainStore.js` container.

Clues:

1. Nest a new condition.

### 8. Change filter when filter is equals to Feature.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `Content.js` component in Atom editor.

Clues:

1. Check [Filter function](https://facebook.github.io/immutable-js/docs/#/List/filter)
2. Value store product properties.
3. Use feature filter only if filter is equals to Filter.

### 9. Add feature prop to Products.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `Content.js` component in Atom editor.

Add `feature` prop in products map.

1. Check [Transfering Props](https://facebook.github.io/react/docs/transferring-props.html#consuming-and-transferring-the-same-prop)
2. Check [Get function](https://facebook.github.io/immutable-js/docs/#/Map/get)
3. See how get other properties like price.

### 10. Update Cart tests.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/test` and open `cart.spec.js` in Atom editor.

Modify the actual test to implement feature property support.

Clues:

1. Check [Expect equal](http://chaijs.com/api/bdd/#method_equal).
3. Add feature property to action and expect.
4. Verify that test pass with `npm run test`.

### 11. Update Order tests.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/test` and open `order.spec.js` in Atom editor.

Modify the actual test to implement feature property support.

Clues:

1. Check [Expect equal](http://chaijs.com/api/bdd/#method_equal).
3. Add feature property to action and expect.
4. Verify that test pass with `npm run test`.

### 12.Update Products tests.

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/test` and open `products.spec.js` in Atom editor.

Modify the actual test to implement feature property support.

Clues:

1. Check [Expect equal](http://chaijs.com/api/bdd/#method_equal).
3. Add feature property to action and expect.
4. Verify that test pass with `npm run test`.
