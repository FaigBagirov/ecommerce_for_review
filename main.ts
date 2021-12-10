const {port} = require("./config");
// const port = process.env.PORT || 8000;
const addToCartController= require('./controllers/addToCart')

const express = require("express");
var router = express.Router();
const app = express();

const bodyParser = require("body-parser");
const db_test = require("./db_test");


//all routing code relies here in the routes module
const routes = require("./routes/shoppingRoutes");
// routes(app);

var cors = require('cors'); 
app.use(cors());

//TODO: maybe have to move it above the routes(app); line
//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post("/addtocart", (req: any, res: any)=>{
    console.log(`my get request`, req.body)
    addToCartController.addToCart(req, res);
});
router.post("/checkout", (req: any, res: any)=>{
    console.log(`my get request`, req.body)
    addToCartController.checkout(req, res);
});

app.use(router);

// app.get("/", (req: any, res: any)=>{
//     console.log(`get request`, req)
// })

db_test.select('*', 'userCart');


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
    })














// pool.query("CREATE TABLE users2 (id SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL)", (err, res) => {
// console.log(err, res);
// pool.end();
// });

/* pool.query('SELECT NOW()', (err, res) => {
console.log(err, res);
pool.end();
}); */
// console.log('yep');