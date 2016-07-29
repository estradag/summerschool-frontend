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

## Fix new Feature errors task

### 1. Fix Items API service.

1. In `summerschool-items-api` repository.
2. Navigate to the folder `/api` and open products.apib in Atom editor.
3. Modify this file to change `product` to `products`.
4. Save the file.
5. Restart the server running `npm run api-server`.
6. Verify the response making a `get call` to `/api/v1/products` on `Postman` application.

### 2. Fix Product test.

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/test/` and open `products.spec.js` in Atom editor.
3. Find `SET_PRODUCT test`.
4. Add the respective feature element for expect values.
5. Save the file.
6. Verify the test running `npm run test`.

### 3. Fix the typo for feature menu.

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `Header.js` component in Atom editor.
3. Find the `className nav`.
4. Fix typo on `feture menu`.
5. Save the file.
6. Verify the style in the web browser, if the service is not running run `npm run build`.

### 4. Fix Link Proceed To Buy.

1. In `summerschool-frontend` repository.
2. Navigate to the folder `/src/components` and open `Checkout.js` component in Atom editor.
3. Find the `PrintBtnProceedToBuy const`.
4. Add prop to equals to `/orderSummary` and add `onClick` event equals to `handleProceedToBuyClick`.

```
<Link onClick={handleSomeClick} to={'/somePath'}>
  Link text
</Link>
```

5. Save the file.
6. Verify the style in the web browser, if the service is not running run `npm run build`.