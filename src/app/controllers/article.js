"use strict";
const mongoose = require("mongoose");
const guid = require("guid");
const { paginateOptions, Shared } = require("../utils/constants.js");

const Article = mongoose.model("Article");

exports.getArticles = async (req, res) => {
  const { page = 1, limit = 15, category } = req.query;
  let query = {};
  if (category) query.category = category;
  try {
    const data = await Article.paginate(query, {
      ...paginateOptions,
      page,
      limit,
      sort: { createdAt: -1 },
    });
    return res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getArticleById = async (req, res) => {
  try {
    const data = await Article.findById(req.params.id);
    return res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getArticleBySlug = async (req, res) => {
  try {
    const data = await Article.findOne({ slug: req.params.slug });
    return res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.createArticle = async (req, res) => {
  try {
    const { title, body, image, category, tags } = req.body;
    const slug = title
      .trim()
      .split(" ")
      .join("-")
      .split("?")
      .join("")
      .concat("-")
      .concat(guid.raw().substring(0, 8))
      .toLowerCase();
    const data = await Article.create({
      title,
      body,
      image,
      tags,
      category,
      slug,
    });
    res.status(201).send({ message: "Artigo salvo com sucesso!", data });
  } catch (error) {
    res.status(400).send({ message: "Falha ao salvar artigo!", error });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const data = await Article.findByIdAndUpdate(req.params.id, {
      $set: {
        ...req.body,
        updatedAt: Date.now(),
      },
    });
    res.status(200).send({ message: "Artigo actualizado com sucesso!", data }); //sucesso
  } catch (error) {
    res.status(400).send({ message: "ERRO: Falha ao atualizar Artigo", error });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const data = await Article.findByIdAndRemove(req.params.id);
    res.status(200).send({ message: "Artigo eliminado com sucesso!", data });
  } catch (error) {
    res.status(400).send({ message: "ERRO: Falha ao eliminar Artigo", error });
  }
};

exports.likeArticle = async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (!article) throw new Error("Artigo não encontrado!");
    await Article.findOneAndUpdate(
      { slug: req.params.slug },
      {
        $set: {
          [Shared.Likes]: article[Shared.Likes] + 1,
          updatedAt: Date.now(),
        },
      }
    );
  } catch (error) {
    res.status(400).send({ message: "Falha ao curtir artigo!", error });
  }
};

exports.commentArticle = async (req, res) => {
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (!article) throw new Error("Artigo não encontrado!");
    const { nome, email, body } = req.body;
    await Article.findOneAndUpdate(
      { slug: req.params.slug },
      {
        $set: {
          [Shared.Comments]: [
            ...article[Shared.Comments],
            { nome, email, body, createdAt: Date.now() },
          ],
          updatedAt: Date.now(),
        },
      }
    );
  } catch (error) {
    res.status(400).send({ message: "Falha ao comentar no artigo!", error });
  }
};
