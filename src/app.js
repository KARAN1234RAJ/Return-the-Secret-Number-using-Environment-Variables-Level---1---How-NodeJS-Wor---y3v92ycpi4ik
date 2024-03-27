const express = require("express");

const dotenv = require("dotenv");

const app = express();

app.use(express.json());

dotenv.config();

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file

/*

{

"number" : "2"

}

*/



app.get("/api/get-env", (req, res) => {
  // Check if data is not undefined or null
const data = process.env.NUMBER;
  if (data !== undefined && data !== null) {
    res.status(200).json({
      status: "success",

      number: data,
    });
  } else {
    res.status(404).json({
      err: "Not Found",
    });
  }
});

module.exports = app;
