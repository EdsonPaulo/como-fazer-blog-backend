"use strict";
const mongoose = require("../../database");
const mongoosePaginate = require("mongoose-paginate-v2");
const { ArticleCategories, Shared } = require("../utils/constants");
const Schema = mongoose.Schema;

const Article = new Schema({
  [Shared.Title]: { type: String, required: true, trim: true },
  [Shared.Body]: { type: String, required: true },
  [Shared.Image]: { type: String, trim: true },
  [Shared.Slug]: { type: String, trim: true, required: true, unique: true },
  [Shared.Likes]: { type: Number, default: 0 },
  [Shared.Category]: { type: String, enum: Object.values(ArticleCategories) },
  [Shared.Tags]: [{ type: String, trim: true }],
  [Shared.Comments]: [
    {
      [Shared.Name]: { type: String, trim: true },
      [Shared.Email]: { type: String, trim: true },
      [Shared.Body]: { type: String, trim: true },
      [Shared.CreatedAt]: { type: Date, default: Date.now },
    },
  ],
  [Shared.CreatedAt]: { type: Date, default: Date.now },
  [Shared.UpdatedAt]: { type: Date, default: Date.now },
});

Article.plugin(mongoosePaginate);
module.exports = mongoose.model("Article", Article);
