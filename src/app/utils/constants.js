exports.paginateOptions = {
  page: 1,
  limit: 15,
  customLabels: {
    totalDocs: "total",
    docs: "data",
    limit: "limit",
    page: "page",
    nextPage: "next",
    prevPage: "prev",
    totalPages: "totalPages",
  },
};

exports.Roles = {
  Admin: "admin",
  User: "user",
};

exports.ArticleCategories = {
  Tudo: "tudo",
  Saude: "saúde",
  Financas: "finanças",
  Tecnologia: "tecnologia",
  Entretenimento: "entretenimento",
  Internet: "internet",
  Educacao: "educação",
  Social: "social",
  Relacionamento: "relacionamento",
  Hobby: "hobby",
  Filosofia: "filosofia",
  Religiao: "religião",
  Culinaria: "culinária",
  Estilo: "estilo",
  SemCategoria: "sem categoria",
};

exports.Shared = {
  Id: "id",
  MongoId: "_id",
  Article: "article",
  Articles: "articles",
  Slug: "slug",
  Title: "title",
  Body: "body",
  Image: "image",
  Categories: "categories",
  Tags: "tags",
  Category: "category",
  Comments: "comments",
  Comment: "comment",
  Name: "name",
  Likes: "likes",
  Username: "username",
  Email: "email",
  CreatedAt: "createdAt",
  UpdatedAt: "updatedAt",
};

exports.APIKeys = {
  Query: "query",
  Search: "search",
  Page: "page",
  Limit: "limit",
  Total: "total",
  Next: "next",
  Prev: "prev",
  TotalPages: "totalPages",
};

exports.APIEndpoints = {
  Like: "like",
  Comment: "comment",
  Articles: "articles",
};
