import express from "express";
import cors from "cors";
import colors from "colors"
import dotenv  from "dotenv";
import morgan  from "morgan";

const app=express();

import productsRouter from "./routes/productsRouter.js"

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/products",productsRouter)

app.get("/",(req,res)=>{
    res.send("Api running");
});

const PORT = process.env.PORT || 5000;
const HOSTNAME = "0.0.0.0";

//Always the port must be the first parameter
app.listen(PORT, HOSTNAME, () => {
  console.log(
    `Express server is running in the ${process.env.NODE_ENV} mode at http://${HOSTNAME}:${PORT} 🚀`
    .yellow.bold
  );

});