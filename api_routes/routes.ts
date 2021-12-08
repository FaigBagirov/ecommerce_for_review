'use strict';

const addToCartController= require('../controllers/addToCart')

//+TODO: implement controllers | implemented
app.route('/addtocart').post(addToCartController.addtocart);

app.route('/checkout').post(addToCartController.addtocart);

// app.route("/addtocart").post()
