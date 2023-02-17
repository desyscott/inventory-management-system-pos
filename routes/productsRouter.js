import express from "express"
import expressAsyncHandler from "express-async-handler"
import {productsData} from "../data/data.js"

const productsRouter=express.Router();


productsRouter.get("/", expressAsyncHandler(async(req,res)=>{
    res.send(productsData)
}));


productsRouter.get("/:id",expressAsyncHandler(async(req, res) => {
    const product = productsData.find((x)=>x._id === req.params.id)
    if(product){
      res.send(product)
    }else{
      res.status(404).send({message:"Product Not Found"})
    }
  }));

export default productsRouter;