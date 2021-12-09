const db = require('../config/config');

// EMPTY OBJECT
// USED FOR EXPORTING THE FUNCTIONS BELOW
const ShoppingItem = {};

// CREATE ARTICLE
ShoppingItem.add = (title, content) => {
  // return db.none(`INSERT into articles(title, content)` + `VALUES($1, $2)`, [title, content]);
};

// GET ALL ARTICLES
ShoppingItem.get = () => {
  // return db.any('SELECT * FROM articles');
};

// UPDATE AN ARTICLE
ShoppingItem.update = (title, content, id) => {
  // return db.none(`UPDATE articles SET title = $1, content = $2 WHERE id = $3`, [
  //   title,
  //   content,
  //   id
  // ]);
};

// DELETE AN ARTICLE
ShoppingItem.delete = id => {
  // return db.none(`DELETE from articles WHERE id = $1`, id);
};

module.exports = ShoppingItem;
