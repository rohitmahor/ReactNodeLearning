const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProblemSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: "MCQ" | "Sheet" | "Chart",
    QuestionText: String
});

const Problem = mongoose.model('Problem', ProblemSchema);

module.exports = Problem;