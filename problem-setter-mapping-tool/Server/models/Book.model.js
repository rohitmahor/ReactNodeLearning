/*
    Books:
        _id:
        Book:
            Title:
            Author:
            Published:
            Publisher:
            Pages:
            Categories:
            Description:
            Status: 
            TOC:
                Chapter:
                    _id:
                    Name:
                    Sections:
                        _id:
                        name:
            
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema

const SectionSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String
});

const ChapterSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Sections: [SectionSchema]
});

const TOCSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Chapters: [ChapterSchema]
});

const PublisherSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    BookId: [mongoose.Schema.Types.ObjectId]
})

const BookSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Title: String,
    Author: String,
    Published: Date,
    PublisherId: String,
    Pages: Number,
    Description: String,
    Status: Boolean,
    TOC: TOCSchema
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;



