"use strict";
import { Router } from "express";
import {
  getArticles,
  getArticleById,
  getArticleBySlug,
  updateArticle,
  createArticle,
  deleteArticle,
} from "../controllers/article";

const router = Router();

router.get("/", getArticles);
router.get("/:slug", getArticleBySlug);
router.get("/:id", getArticleById);

router.post("/", createArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
