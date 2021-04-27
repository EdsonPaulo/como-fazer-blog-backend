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
const { Shared, APIEndpoints } = require("../utils/constants.js");

const router = Router();

router.get("/", getArticles);
router.post("/", createArticle);

router.get(`/:${Shared.Id}`, getArticleById);
router.put(`/:${Shared.Id}`, updateArticle);
router.delete(`/:${Shared.Id}`, deleteArticle);

router.get(`/${Shared.Slug}/:${Shared.Slug}`, getArticleBySlug);

router.patch(`/${APIEndpoints.Like}/:${Shared.Slug}`, likeArticle);
router.patch(`/${APIEndpoints.Comment}/:${Shared.Slug}`, commentArticle);

module.exports = router;
