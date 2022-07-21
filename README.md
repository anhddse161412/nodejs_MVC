Features.\
-Fundamental of Express: routing, middleware, sending response and more.\
-Fundamental of Mongoose: Data model and middleware.\
-CRUD operations with MongoDB.\

Project Structure.\
-app.js : Configure everything that has to do with Express application and responsible for connecting the MongoDB and starting the server.\
-routes -> person.js: The goal of the route is to guide the request to the correct handler function which will be in one of the controllers.\
-controllers -> PersonController.js: Handle the application request, interact with models and send back the response to the client.\
-models -> person.js: (Business logic) related to business rules, how the business works and business needs .\
