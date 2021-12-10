// const port = process.env.PORT || 8000;
const {port} = require("./config"); 
//This should be inside the separate route files, but I still have problems with importing the route files
const addToCartController= require('./controllers/addToCart')

const express = require("express");
var router = express.Router();
const app = express();

const bodyParser = require("body-parser");
const db_test = require("./db_test");

//I have problems with importing the routes file
//Just ignoring it for now
//all routing code relies here in the routes module
// const routes = require("./routes/shoppingRoutes");
// routes(app);

//Didn't need it yet
// var cors = require('cors'); 
// app.use(cors());

//TODO: maybe have to move it above the "routes(app);"" line
//configuring express to use body-parser as middle-ware to parse the body of post requests
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

//Don't need it right now during the tests
// app.get("/", (req: any, res: any)=>{
//     console.log(`get request`, req)
// })

//Just to test connection with the database
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