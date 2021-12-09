const dbMigrConfirm = require('dbMigrationConfirm');
const dbMigrPreparation = require('dbMigrationPreparation');




// Fs.readdirSync(__dirname)
//   .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
//   .forEach(file => {
//     const model = sequelize.import(Path.join(__dirname, file));
//     db[model.name] = model;
//   });

module.exports = {dbMigrConfirm, dbMigrPreparation};