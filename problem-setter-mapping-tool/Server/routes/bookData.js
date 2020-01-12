const mongoose = require('mongoose');

module.exports = {
    _id: mongoose.Types.ObjectId(),
    Title: "Cost Accounting and Financial Management",
    Author: "CA B. Saravana Prasath",
    Published: (new Date()).getDate(),
    PublisherId:  mongoose.Types.ObjectId(),
    Pages: 814,
    Description: "Book Description",
    Status: false,
    TOC: {
      _id:  mongoose.Types.ObjectId(),
      Chapters: [
        {
          _id:  mongoose.Types.ObjectId(),
          Name: "The Balance Sheet",
          Sections: [
            { _id:  mongoose.Types.ObjectId(), Name: "Assets" },
            { _id:  mongoose.Types.ObjectId(), Name: "Liabilities" }
          ]
        },
        {
          _id:  mongoose.Types.ObjectId(),
          Name: " Types of Journal Entries",
          Sections: [
            {
              _id:  mongoose.Types.ObjectId(),
              Name: "The Diagonal Journal Entry"
            },
            {
              _id:  mongoose.Types.ObjectId(),
              Name: "The Horizontal Journal Entry"
            },
            { _id:  mongoose.Types.ObjectId(), Name: "Section Summary" }
          ]
        }
      ]
    }
  };