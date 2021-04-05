# Express-React-Dom-fluent

This code could be help you to have a express server 4 which work like a charm with React-Router-Dom, with direct access from Browser.
Your url like intra.comet.app/about or intra.comet.app/user/MyLove, go directly to the good react dom component or function

Versions use:
* [Express JS](https://expressjs.com/): `~4.16.1`
* [React](https://reactjs.org/) : `^17.0.2`
* [React Dom Router](https://reactrouter.com/) : `^5.2.0`

We integrate a 

* Express Server create with [Express application generator](https://expressjs.com/en/starter/generator.html) :

		express --no-view {yourProject}

after we install react apps , 
* create a reactApp 

		yarn create react-app client
* in client folder add react-dom-router

		yarn add react-router-dom

* add Fluent ui Northstar library

		yarn add @fluentui/react-northstar
        
1. in /app.js (Express app) add this lines
	
    `//client part
    
	app.use('/*', express.static(path.join(__dirname, 'client/build/index.html')))`
    
    just before at the end of /app.js
    
	`module.exports = app;`
2. 	Prepare your React router
3. 	Build your client app with 

	`yarn build` in client path
4. Enjoy :)
