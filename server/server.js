//*******************importing section started************** */
require("dotenv").config();

const express = require("express");
const app = express();

const authRouter = require("./auth-rounter/authRouter");
const connectDb = require("./utils/db");

//*******************importing section ended************** */

//*******************middleware section started************** */
app.use(express.json());
app.use("/api/auth", authRouter);

//*******************middleware section ended************** */

//*******************connection to db section started************** */
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    console.log("connected to mongo Db");
    app.listen(port, console.log(`listning on port ${port}....`));
  } catch (error) {
    console.log("while connection to database", error);
  }
};

start();
