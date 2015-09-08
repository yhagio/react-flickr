## Photo viewer + Storage
- Flicker Clone

### TODO
- Responsive Design
- Complete client-side app
- Flickr API

### How to run locally

```
npm init
npm install --save react react-router
npm install --save-dev babel-core babel-loader node-libs-browser
npm install webpack -g
```
create `index.html`
create `webpack.config.js`
create first components `app/components/Main.js`

```
webpack -w
```
Open `index.html` in browser. Voila!

### Resources

 - [React](http://facebook.github.io/react/index.html)
 - [Babel](https://babeljs.io/)
 - [Babel-Loader](https://github.com/babel/babel-loader)
 - [Webpack](http://webpack.github.io/)


#### Thinking ...
- Isomorphic with react-router + Node.js/Expressjs
- Testing
- Authentication with Stripe Subscription
- Photo upload locally
- Deploy to Heroku for free
