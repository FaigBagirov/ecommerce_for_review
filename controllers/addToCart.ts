// const ShoppingItem = require('../entities/shopingItem');
const {addToCartCheckBefore, addToCartCheckAfter} = require('./validation/addToCartCheck');


const addToCart = (req: any)=>{
    console.log('request.body: ', req.body);
    let shoppingItem = new ShoppingItem(req.body);


    addToCartCheckBefore();
    // insert
    // confirm insertion
}

const addToCart_old = (req: any, res: any,  next: any)=>{
    let productid = req.body.productid,
        productqty = req.body.productquantity;
        
        console.log('body ', req.body,'productid ', productid,'productqty ', productqty);
        
    // checkBeforeInsert();

    //TODO: realize somehow updating of existing product 
    db.insert(
        'userCart', 
        ['productid', 'productqty'],
        [productid, productqty]
        );

    // checkAfterInsert();
    // TODO: check inserted data in the DB before sending 200-ok response
    res.status(200).send( req.body);
}

module.exports = addToCart;