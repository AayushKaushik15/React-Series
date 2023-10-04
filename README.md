# React-Series
## Namaste React


# parcel
- dev Build
- Local server
- automatically refresh page HMR hot module replacement
- file watching algorithm - written in C++;
- faster Builds because it is all doing caching;
- image optimization 
- minification
- bundling
- compress the files
- consistent hashing 
- code splitting {split files}
- differential bundling
- Error handling
- HTTPs
- Tree shaking - remove unused code 


# Dist use ?
When you develop a React application, you typically write your code using JSX and ES6 syntax. However, browsers don't understand JSX and ES6 directly, so this code needs to be transformed into regular JavaScript that browsers can interpret. Additionally, it's common practice to minify and bundle your code to reduce its size and improve performance.

project-root/
|-- src/
|   |-- index.html
|   |-- js/
|       |-- app.js
|   |-- css/
|       |-- styles.css
|-- dist/
|   |-- index.html
|   |-- js/
|       |-- app.abc123.js  (minified and bundled)
|   |-- css/
|       |-- styles.abc123.css (minified and bundled)
