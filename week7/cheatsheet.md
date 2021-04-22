# Your node and databse cheat sheet!

# NODE SERVER

- 1. Make you files
- 2. NPM init
- 3. NPM INSTALL EXPRESS CORS PG whatever you need
- 4. .gitignore
- 5. GET YOUR Tools, aka const require stuff(express, pg, etc)
- 6. Add node_modules to gitignore
- 7. create an instance of express
     `e.g const app = express()`
- 8. Use middleware, like `app.use, app.use(express.json())`
- 9. Define your port number, aka const PORT = XXXX
- 10.
  ```
  App.listen(PORT, () => {` `console.log("listening on ${PORT}") })
  ```
- 11. RUN YOUR CODE. `node . , node index.js, nodemon` whatever you need to start it. http://localhost:INSERT YOUR PORT NUMBER.
- 12. Make your first route, / , and have it return a string for your response.
      ```
      app.get("/", (req,res) => {
       res.send("Howdy")
      })
      ```
      ^ If you want to make more routes, repeat step 12 with different urls

  # DATABASE CREATION

- 13. psql postgres in your terminal (this might be psql -U postgres)
  - remember, SQL has to have semicolons at the end of every line
- 14. Make a database. CREATE DATABASE **insert your name of the database here**, if you did this right, you will see CREATE DATABASE
- 15. Connect to database. \c nameOfDatabase (you can get a list of datatbases by doing \l)
- 16. Create the table (aka your table schema). CREATE TABLE nameOfTable(schema goes in here), if you did this correctly, you will see CREATE TABLE as a message
- 17. \dt to check and see if you have a relation. If not, you need to remake the table. Go back to step 16

# Connect your database to your node server

- 18. Create a db.js
- 19. Require pool, aka `const Pool = require("pg").Pool`
- 20. In a variable, you put in your credentials to your postgres database.
      ```
      const pool = new Pool({
      user: "jwfrasier",
      password: `passwordgoesinhere`,
      host: "localhost",
      port: 5432,
      database: "addressbook",
      });
      ```
- 21. module.exports = pool
- 22. Const pool = require("./db.js") on your index.js
- 23. pool.query is then used to send SQL from your server to the database. This SQL that you write is up to your route.
