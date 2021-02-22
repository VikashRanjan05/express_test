const express = require("express");
const Router = express.Router();
const axios = require("axios");
const testdata = require("../Data/testdata");

Router.post("/", (req, res) => {
  const userId = req.body.userId;
  const Id = req.body.Id;

  axios.get("https://jsonplaceholder.typicode.com/posts").then((resp) => {
    const filterdata = resp.data.filter((data) => {
      if (data.userId == userId && data.id == Id) {
        return data;
      }
    });

    res.json(filterdata);
  });
});

module.exports = Router;
