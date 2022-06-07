const mongoose = require('mongoose');

const Schema = mongoose.Schema


const categoriesModel = new Schema({
    type: {type: String, default:'Expense'},
    color: {type: String, default: '#FCBE44'}

})

const transactionModel = new Schema({
    name:{type: String, default:"Anonymous"},
    type:{type: String, default:"Expense"},
    amount:{type: Number},
    date:{type: Date, default: Date.now},

})


const categories = mongoose.model('categories', categoriesModel);
const transactions = mongoose.model('transactions',transactionModel);

exports.default = transactions;

module.exports = {
    categories,
    transactions,
}