const mongoose = require("mongoose");
const { BD_CONNECTION_STRING } = require("../config/environment");

//configurando o mongoose (conexão com MongoDB)
mongoose.Promise = global.Promise;
mongoose
  .connect(BD_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("BD sucessfull conected!");
  })
  .catch((e) => {
    console.log("ERROR: BD connection error: " + e);
  });

module.exports = mongoose