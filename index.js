/**
 * Importing packages for the API
 */
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const { PORT, DB_CONFIG, END_POINT, QUERY } = require("./constants");
const { sequelize } = require("./connection");
const routes =  require('./src/routes');
/**
 * Creating a global express server object
 */
const app = express();

/**
 * Using body parser for our app to extract request body
 */
app.use(bodyParser.json());

/**
 * Importing the global routes for the application
 */
app.use('/', routes);

/**
 * Creating a connection variable to the database
 */
// const connection = mysql.createConnection(DB_CONFIG);

sequelize.authenticate().then(res=>{
  console.log("DB Connected")
})
.catch(err=>{
  console.log(err);
})

/**
 * This method connects the DB with the API
 */
// connection.connect();

/**
 * Response model for our application
 * @param {object} results
 * @returns response object
 */
// function apiResponse(results) {
//   return { status: 200, error: null, response: results };
// }

/**
 * This api returns all the books from the API
 *
 * @return List of books
 */
// app.get(END_POINT.book.get, (req, res) => {
//   connection.query(QUERY.book.get, (err, results) => {
//     if (err) throw err;
//     res.send(apiResponse(results));
//   });
// });

/**
 * This api returns a single books from the API
 *
 * @return Single books
 */
// app.get(END_POINT.book.getById, (req, res) => {
//   connection.query(QUERY.book.getById(req.params.id), (err, results) => {
//     if (err) throw err;
//     if (results.length > 0) res.send(apiResponse(results[0]));
//     else res.send(apiResponse(null));
//   });
// });

/**
 * This API Creates New Book
 *
 * @return Created response
 */
// app.post(END_POINT.book.post, (req, res) => {
//   connection.query(QUERY.book.post, req.body, (err, results) => {
//     if (err) throw err;
//     res.send(apiResponse(results));
//   });
// });

/**
 * By using this API we can edit the existing book in the table by using its ID
 *
 * @return Edited response
 */
// app.put(END_POINT.book.put, (req, res) => {
//   connection.query(QUERY.book.put(req.body, req.params.id), (err, results) => {
//     if (err) throw err;
//     res.send(apiResponse(results));
//   });
// });

/**
 * By using this API we can delete the book from the table by using its ID
 *
 * @return Deleted response
 */
// app.delete(END_POINT.book.delete, (req, res) => {
//   connection.query(QUERY.book.delete(req.params.id), (err, results) => {
//     if (err) throw err;
//     res.send(apiResponse(results));
//   });
// });

// ----------------------------- Author ----------------------------------------

/**
 * This api returns all the Authors from the API
 *
 * @return List of Authors
 */
app.get(END_POINT.author.get, (req, res) => {
  connection.query(QUERY.author.get, (err, results) => {
    if (err) throw err;
    let formattedResponse = results.map(({id, author_name, age, book_id, book_name, price}, index) => ({
      id: id,
      author_name: author_name,
      age: age,
      book: {
        id : book_id,
        name : book_name,
        price : price
      },
    }));
    res.send(apiResponse(formattedResponse));
  });
});

/**
 * This api returns a single Author from the API
 *
 * @return Single Author
 */
app.get(END_POINT.author.getById, (req, res) => {
   connection.query(QUERY.author.getById(req.params.id), (err, results) => {
    if (err) throw err;
    if (results.length > 0) res.send(apiResponse(results[0]));
    else res.send(apiResponse(null));
  });
});

/**
 * This API Creates New Author
 *
 * @return Created response
 */
app.post(END_POINT.author.post, (req, res) => {
  connection.query(QUERY.author.post, req.body, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

/**
 * By using this API we can edit the existing author in the table by using its ID
 *
 * @return Edited response
 */
app.put(END_POINT.author.put, (req, res) => {
  connection.query(
    QUERY.author.put(req.body.name,req.body.age, req.params.id, req.body.book_id),
    (err, results) => {
      if (err) throw err;
      res.send(apiResponse(results));
    }
  );
});

/**
 * By using this API we can delete the book from the table by using its ID
 *
 * @return Deleted response
 */
app.delete(END_POINT.author.delete, (req, res) => {
  connection.query(QUERY.author.delete(req.params.id), (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});


/**
 * This method starts the server in the listened port
 */
// app.listen(PORT, () => {
//   console.log("App is listening on port 7000");
// });


sequelize.sync().then(() => {
  app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));