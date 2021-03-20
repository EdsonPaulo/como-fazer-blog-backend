"use strict";
import { Schema, model } from "../../database";
import mongoosePaginate from "mongoose-paginate-v2";
import { ArticleCategories } from "../utils/constants";

const Article = new Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true },
  image: { type: String, trim: true },
  slug: { type: String, trim: true, required: true, unique: true },
  categories: [{ type: String, enum: Object.values(ArticleCategories) }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

Article.plugin(mongoosePaginate);
export default model("Article", Article);
