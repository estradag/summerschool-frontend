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
├── docs                      # Exercise Documentation.
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
  2. Change `localhost` with the `summerschool.users public ip`.
4. For `summerschool.items`:
  1. Find `yield call` in `doRequestProducts` function.
  2. Change `localhost` with the `summerschool.items public ip`.
5. For `summerschool.cart`:
  1. Find `yield call` in `doRequestCart `function.
  2. Change `localhost` with the `summerschool.cart public ip`.
6. Save the file.
7. Verify that all test pass running `npm run test`.
8. Use Postman to check the following endpoints. Remember set the header with key: `authorization` value: `Bearer qphYSqjEFk1RcFxYqqIIFk4vaBJvDoBr3t9aHTp1JFEAO0NS7ECyLJJyUPybOUNf`
  1. http://SERVICE-PUBLIC-IP-ADDRESS:3100/api/v1/products
  2. http://SERVICE-PUBLIC-IP-ADDRESS/api/v1/cart/1 
  3. http://SERVICE-PUBLIC-IP-ADDRESS/api/v1/users/1
9. Run `npm run build`.

## Tasks

### 1. Modify Items API

Files route:

1. In `summerschool-items-api` repository.
2. Navigate to the folder /api and open `products.apib` in Atom editor.
3. Find the Body response.
4. Add `feature: true` for products with `id` 1, 4, 7 and `feature: false` for the rest. 

example:

```
  "id": 1,
  "title": "Luna Flower",
  "description": "Collared Neck Stylish",
  "price": 60.92,
  "category": "Women",
  "feature": true,
  "image": "pc.jpg"
```

5. Save the file and start the service running `npm run api-server`.
6. Use Postman to verify `HOST/api/v1/products` endpoint.

Clues:

1. Use spaces for indentation.
2. More info [APIBluePrint](https://apiblueprint.org/documentation/specification.html) specification.

### 2. Modify Cart API

Files route:

1. In `summerschool-cart-api` repository.
2. Navigate to the folder /api and open `cart.apib` in Atom editor.
3. Find the Body response.
4. Add `feature: true` for products with `id` 2 and `feature: false` for the rest. 

example:

```
  "id": 2,
  "title": "Dearlovers",
  "description": "Chiffon Blouse U Neck",
  "price": 89.99,
  "category": "Women",
  "feature": false,
  "image": "pc1.jpg"
```

5. Save the file and start the service running `npm run api-server`.
6. Use Postman to verify `HOST/api/v1/cart/1` endpoint.

Clues:

1. Use spaces for indentation.
2. More info [APIBluePrint](https://apiblueprint.org/documentation/specification.html) specification.

### 3. Add feature image to Products.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `ProductItem.js` in Atom editor.
3. Find `ProductItem` and create a const `PrintFeatureItem`.
4. Add `span` and `img` tags to `PrintFeatureItem` const.
  1. `span` tag with `className` equals to `feature-product`
  2. Nest `img` to `span` with `src` equal to `{require("../images/featured_product.png")}`

Const definition:

```
const Variable =
      <span>
        <img src="image-path" alt="alt-title"/>
      </span> : "";
```
  
5. Validate that show feature image only for products that have `feature` equal to `true`.

If condition assignment:

```
const Variable =
  (condition)?
    <p>True Condition</p> : <p>False Condition</p>;
```

6. Render `PrintFeatureItem` const after the div `tag` with `className="mid-pop"` 

How to Render a value:

```
  {CONST_NAME}
```

7. Verify the correct render of the change.
8. Save the file.

Clues:

1. [Span Tag](http://www.w3schools.com/tags/tag_span.asp) specification.
2. [Img Tag](http://www.w3schools.com/tags/tag_img.asp) specification.
3. [Nesting Tags](http://www.bu.edu/tech/services/comm/websites/www/non-wordpress/start/html-introduction/syntax/nesting-tags/) post.

### 4. Add feature prop to Products.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `Content.js` component in Atom editor.
3. Find `<ProductItem` component.
4. Add `feature` prop equal to `{value.get("feature")}`.

How to add a prop to a child Component:

```
  key={index}
  feature={value.get("feature")}
  price={value.get("price")}
```

5. Save the file.
9. Run `npm run build` and see the result in Chrome web browser.

Clues:

1. Check [Transfering Props](https://facebook.github.io/react/docs/transferring-props.html#consuming-and-transferring-the-same-prop)
2. Check [Get function](https://facebook.github.io/immutable-js/docs/#/Map/get)
3. See how get other properties like price.

### 5. Add feature product styles.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/styles` and open `styles.scss` in Atom editor.
3. Find `.mid-pop` class.
4. Nest `.feature-product` class with:
  1. `position: absolute;`
  2. `top: ??;` use the value obtained from Chrome Developer Tools.
  3. `right: ??;` use the value obtained from Chrome Developer Tools.
5. Save the file.
9. Run `npm run build` and see the result in Chrome web browser.

Clues:

1. Check [Sass 3](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html) syntax.
2. Check [CSS Position](http://www.w3schools.com/cssref/pr_class_position.asp) property.
6. How to see [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts?hl=en).

### 6. Add feature menu.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `Header.js` component in Atom editor.
3. Find `ul` tag with `className="nav navbar-nav nav_1"`
4. Add a new `li` tag nesting `<Link className="color" to={'/feature'}>Feature</Link>`

Clues:

1. Check [Link Component](https://github.com/reactjs/react-router/blob/master/docs/API.md#link).

### 7. Update Cart tests.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/test` and open `cart.spec.js` in Atom editor.
3. In `handles SET_CART`, `handles SET_CART_ITEM when no exist CART_ITEMS`, `handles SET_CART_ITEM when exist CART_ITEMS` and `handles DELETE_CART_ITEM test`.
4. Note: Modify in `action` and `expect`.
4. Add `"feature": true` for products with `id` 1, 4, 7 and `"feature": false` for the rest.
5. Save the file.
6. Verify that test pass running `npm run test`.

Clues:

1. Check [Expect equal](http://chaijs.com/api/bdd/#method_equal).

### 11. Update Order tests.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/test` and open `order.spec.js` in Atom editor.
3. In `handles SET_ORDER`.
4. Note: Modify in `action` and `expect`.
4. Add `"feature": true` for products with `id` 1, 4, 7 and `"feature": false` for the rest.
5. Save the file.
6. Verify that test pass running `npm run test`.

Clues:

1. Check [Expect equal](http://chaijs.com/api/bdd/#method_equal).

### 12.Update Products tests.

Files route:

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/test` and open `products.spec.js` in Atom editor.
3. In `handles SET_PRODUCTS`.
4. Note: Modify in `action` and `expect`.
4. Add `"feature": true` for products with `id` 1, 4, 7 and `"feature": false` for the rest.
5. Save the file.
6. Verify that test pass running `npm run test`.

Clues:

1. Check [Expect equal](http://chaijs.com/api/bdd/#method_equal).
