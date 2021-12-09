'use strict';
const addToCartController= require('../controllers/addToCart')
module.exports = app => {
    app.route('/addtocart').post(addToCartController.addtocart);
    app.route('/checkout').post(addToCartController.checkout);
}