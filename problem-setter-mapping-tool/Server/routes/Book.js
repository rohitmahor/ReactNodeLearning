const router = require("express").Router();
const Book = require("../models/Book.model");
const mongoose = require("mongoose");
const bookData = require("./bookData");

router.route("/").get((req, res) => {
  Book.find()
    .then(Book => res.json(Book))
    .catch(err => console.log("error " + err));
});

router.route("/id").post((req, res) => {
  const _id = req.body.id;

  Book.findById(_id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json(err));
}); 

router.route("/add").post((req, res) => {
  const newBook = new Book(bookData);
  newBook
    .save()
    .then(() => res.json("Book Added"))
    .catch(err => res.status(400).json("error: ", err));
});

module.exports = router;
