export {};
const db = require('../config/config');
const ShoppingItem = require('../entities/shopingItem');

type shoppingItemsModel = {
  getOne: (object) => object;
  getAll: (object) => object;
  add:    (object) => object;
  update: (object) => object;
  delete: (object) => object;
}

// EMPTY OBJECT
// USED FOR EXPORTING THE FUNCTIONS BELOW
const ShoppingItemsActions:shoppingItemsModel = {
  getOne: (object) => {
    // return db.any('SELECT * FROM articles');
    console.log("getOne");
    return object;
  },

  getAll: (object) => {
    // return db.any('SELECT * FROM articles');
    console.log("getOne");
    return object;
  },

  add: (object) => {
    // return db.none(`INSERT into articles(title, content)` + `VALUES($1, $2)`, [title, content]);
    
    return object;
  },

  update: (object) => {
    // return db.none(`UPDATE articles SET title = $1, content = $2 WHERE id = $3`, [
    //   title,
    //   content,
    //   id
    // ]);

    return object;
  },

  delete: (object) => {
   // return db.none(`DELETE from articles WHERE id = $1`, id);
   
   return object;
  }
};

module.exports = ShoppingItemsActions;
