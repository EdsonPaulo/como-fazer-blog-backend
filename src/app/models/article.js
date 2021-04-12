"use strict";
const mongoose = require("../../database");
const mongoosePaginate = require("mongoose-paginate-v2");
const { ArticleCategories } = require("../utils/constants");
const Schema = mongoose.Schema;

const Article = new Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true },
  image: { type: String, trim: true },
  slug: { type: String, trim: true, required: true, unique: true },
  categories: [{ type: String, enum: Object.values(ArticleCategories) }],
  comments: [
    {
      username: { type: String, trim: true },
      email: { type: String, trim: true },
      body: { type: String, trim: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

Article.plugin(mongoosePaginate);
module.exports = mongoose.model("Article", Article);
