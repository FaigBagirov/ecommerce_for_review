const {port} = require("./config");
// const port = process.env.PORT || 8000;

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
//all routing code relies here in the routes module
const routes = require("./routes/shoppingRoutes");
routes(app);

var cors = require('cors'); 
app.use(cors());


//configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req: any, res: any)=>{
//     console.log(`get request`, req)
// })

db.select('*', 'userCart');


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