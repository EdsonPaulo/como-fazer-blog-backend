"use strict";
import { model } from "mongoose";
import { paginateOptions } from "../utils/constants";

const Article = model("Article");

export const getArticles = async (req, res) => {
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

export const getArticleById = async (req, res) => {
  try {
    const data = await Article.findById(req.params.id);
    return res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getArticleBySlug = async (req, res) => {
  try {
    const data = await Article.findOne({ slug: req.params.slug });
    return res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createArticle = async (req, res) => {
  try {
    const { title, body, image, category, slug } = req.body;
    const data = await Article.create({
      title,
      body,
      image,
      category,
      slug,
    });
    res.status(201).send({ message: "Artigo salvo com sucesso!", data });
  } catch (error) {
    res.status(400).send({ message: "Falha ao salvar artigo!", error });
  }
};

export const updateArticle = async (req, res) => {
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

export const deleteArticle = async (req, res) => {
  try {
    const data = await Article.findByIdAndRemove(req.params.id);
    res.status(200).send({ message: "Artigo eliminado com sucesso!", data });
  } catch (error) {
    res.status(400).send({ message: "ERRO: Falha ao eliminar Artigo", error });
  }
};
