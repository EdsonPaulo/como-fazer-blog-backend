"use strict";
const { Router } = require("express");
const {
  getArticles,
  getArticleById,
  getArticleBySlug,
  updateArticle,
  createArticle,
  deleteArticle,
  commentArticle,
  likeArticle,
} = require("../controllers/article.js");

const router = Router();

router.get("/", getArticles);
router.get("/:id", getArticleById);
router.get("/slug/:slug", getArticleBySlug);

router.post("/", createArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

router.patch("/like/:slug", likeArticle);
router.patch("/comment/:slug", commentArticle);

module.exports = router;
