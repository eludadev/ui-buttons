Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

### Installation:

```
npm install --save express-async-handler
```
or
```
yarn add express-async-handler
```

### Usage:

```javascript
const asyncHandler = require('express-async-handler')

express.get('/', asyncHandler(async (req, res, next) => {
	const bar = await foo.findAll();
	res.send(bar)
}))
```

Without express-async-handler

```javascript
express.get('/',(req, res, next) => {
    foo.findAll()
    .then ( bar => {
       res.send(bar)
     } )
    .catch(next); // error passed on to the error handling route
})
```

#### Import in Typescript:

```javascript
import asyncHandler from "express-async-handler"
```
