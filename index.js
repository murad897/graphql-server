const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const gqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const connectDB = require("./config/db");

connectDB();
app.use(cors());
app.use(
  "/graphql",
  gqlHTTP.graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`server is running on port ${port}`));

//env PORT = 8000
//NODE_ENV = 'development'
//MONGO_DB = 'mongodb+srv://skillet123:skillet123@cluster0.xt0lo4m.mongodb.net/gq-db?retryWrites=true&w=majority'