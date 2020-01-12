const router = require("express").Router();
const Problem = require("../models/Problem.model");

router.route("/").get((req, res) => {
  Problem.find()
    .then(problem => res.json(problem))
    .catch(err => res.json(err));
});

module.exports = router;
