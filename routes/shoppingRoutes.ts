'use strict';
var express = require('express');
var router = express.Router();
export {};
const addToCartController= require('../controllers/addToCart')

//I have problems with the routes file
//Just ignoring it for now
module.exports = (app: any) => {
    router.post("/addtocart", (req: any, res: any)=>{
        console.log(`my get request`, req.body)
        addToCartController.addToCart(req, res);
    });
    router.post("/addtocart", (req: any, res: any)=>{
        console.log(`my get request`, req.body)
        addToCartController.checkout(req, res);
    });

}