import mongoose, { Promise as mongoosePromise, connect } from "mongoose";
import { BD_CONNECTION_STRING } from "../config/environment";

//configurando o mongoose (conexão com MongoDB)
mongoosePromise = global.Promise;
connect(BD_CONNECTION_STRING, {
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

export default mongoose;
