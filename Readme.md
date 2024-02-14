#  Backend Learning
 This readme file is created for revision purposes.
Also to keep in mind the important features used.

// File Structure
 1.Files
 * index  - Database needs to be connected as soon as file starts ,So usually we connect database  in index.js file
 * app  - It contains configurations, like cookies , url encode
 * constants  -   Contains enums , database name

 2.Folder/Directory
 * DB -  actual code which connects to database
 * Models - Schema (Structure) of the database 
 * Controllers - These are methods / functions bascially  
 * Routes - For routing purposes 
 * Middlewares - For authentication purposes
 * Utils - Utilities
// Database
* Best practice is to use async/await and try/catch when dealing with databases

// user.model.js
* While using "pre" hook of express , don't use arrow function, we don't have  reference to "this" keyword