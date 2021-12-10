// Loading and initializing the library:
const pgp = require('pg-promise')({
    // Initialization Options
});

type pgResult = {
    rows: Array<any>;
    fields: Array<any>;
    command: string;
    rowCount: number;
};


// Preparing the connection details:
const dbConnection = '';

// Creating a new database instance from the connection details:
const database = pgp(dbConnection);

let select = function (what: string, where: string){

    database.any(`SELECT ${what} FROM ${where}`, [true])
    .then(function(data: any) {
        // success;
        console.log("success selecting: ", data);
        console.log('type of "select" data: ', typeof data);

    })
    .catch(function(error: any) {
        // error;
        console.log('error selecting: ', error);
    });
}

function checkBeforeInsert(columns: Array<string>, table: string, productID: number, userID?: string){
    let columnsString = columns
    // select(what, where);
}

let insert = function (tableName: string, columnNames: Array<string>, values: Array<string>){
    
    database.none(
        `INSERT INTO ${tableName} (${columnNames[0]}, ${columnNames[1]}) 
        VALUES ( ${values[0]}, ${values[1]});`,
         [true])
    .then(function() {
        console.log("confirming inserted data...");
        
        // select(, 'userCart');

        // success;
        console.log("success inserting: ");
    })
    .catch(function(error: any) {
        // error;
        console.log('error in inserting: ', error);
    });
}

// const pool = new pg.Pool({
// user: "sysadmin",
// host: "20.121.34.247",
// database: "testwebstore",
// password: "Kuznec32",
// port: "3105"});


// pool.query(
//     `INSERT INTO userCart (productid, productqty) VALUES ( ${productid}, ${productqty});`,
//      (err: any, res: any) => {
// console.log(err, res);
// pool.end();
// });


    // pool.query("CREATE TABLE userCart (id SERIAL PRIMARY KEY, productId integer NOT NULL, productQty integer NOT NULL)", (err, res) => {
// console.log(err, res);
// pool.end();
// });

// Exporting the database object for shared use:
module.exports = {
    select: select,
    insert: insert,
  };
