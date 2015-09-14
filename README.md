## Simple Flicker Photo Search & Viewer
- Use ES2015, React, BABEL, Webpack

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
 - [Seamless responsive photo grid CSS](https://css-tricks.com/seamless-responsive-photo-grid/)
 - [Three Super Easy Ways to Pull Off a Masonry Layout](http://designshack.net/articles/css/masonry/)

#### Thinking ...
- Isomorphic with react-router + Node.js/Expressjs
- Testing
- Authentication with Stripe Subscription
- Photo upload locally
- Deploy to Heroku for free
