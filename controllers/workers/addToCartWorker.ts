export {};
// const ShoppingItemType = require('../../entities/shopingItem');
 import {ShoppingItemType} from '../../entities/shopingItem';

// TODO: replace "object" with actural return value
type addToCartWorker = {
    before: (arg0: ShoppingItemType) => object;
    add:    (arg0: ShoppingItemType) => object;
    after: (arg0: ShoppingItemType) => object;
}


const addToCartWorker:addToCartWorker = {
  before: (arg0: ShoppingItemType) => {
    // return db.any('SELECT * FROM articles');
    console.log("code before adding to cart");
    return arg0;
  },

  add: (arg0: ShoppingItemType) => {
    // return db.any('SELECT * FROM articles');
    console.log("adding to cart");
    return arg0;
  },

  after: (arg0: ShoppingItemType) => {
    // return db.none(`INSERT into articles(title, content)` + `VALUES($1, $2)`, [title, content]);
    console.log("code after adding to cart");
    
    return arg0;
  },

};


module.exports = addToCartWorker;
