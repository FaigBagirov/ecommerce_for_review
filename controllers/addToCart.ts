import {Request, Response} from 'express';
import {ShoppingItem, ShoppingItemType} from '../entities/shopingItem';
const addToCartWorker = require('./workers/addToCartWorker');

// var qs = require('querystring');
interface CustomRequest<T> extends Request {
    body: T
  }


//TODO: body-parser is needed here
module.exports = { 
    addToCart (req: Request<{}, {}, ShoppingItemType>, res: Response) {
 
//   let myBody = req.body;
    //  let parsedReq  = qs.parse(req.body) as ShoppingItemType;

    let shoppingItem = req.body;
    console.log('request.body FROM ADDTOCART: ', shoppingItem);
    // let shoppingItem = new ShoppingItem(req);

    // //check before insertion
    addToCartWorker.before(shoppingItem);

    // // insert
    addToCartWorker.add(shoppingItem);

    // // confirm insertion
    addToCartWorker.after(shoppingItem);

    res.status(200).send(shoppingItem);
    return req;
}
}
// const addToCart_old = (req: any, res: any,  next: any)=>{
//     let productid = req.body.productid,
//         productqty = req.body.productquantity;
        
//         console.log('body ', req.body,'productid ', productid,'productqty ', productqty);
        
//     // checkBeforeInsert();

//     //TODO: realize somehow updating of existing product 
//     db.insert(
//         'userCart', 
//         ['productid', 'productqty'],
//         [productid, productqty]
//         );

//     // checkAfterInsert();
//     // TODO: check inserted data in the DB before sending 200-ok response
//     res.status(200).send( req.body);
// }

