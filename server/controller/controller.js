const model = require('../models/model.js')


async function createCategories(res,req){
    const create = new model.categories({
        type: "Expense",
        color:'#1f3b5c',

    })

await create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({message: 'error'})

    })
}

async function getCategories(req,res){
    let data = await model.categories.find({})

    let filter = data.map(v=> Object.assign({type:v.type, color:v.color}))

    return res.json(filter);
}

async function createTransaction(req,res){
    if(!req.body)return res.status(400).json("ERROR")
    let{name, type, amount} = req.body;

    const create = await new model.transactions({
        name,
        type,
        amount,
        date: new Date()

    })
    create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({message: 'error'})

    })  
}

async function getTransaction(req,res){
    let data = await model.transactions.find({})

    return res.json(data);
}

async function deleteTransaction(req,res){
    if(!req.body)res.status(400).json({message: 'error'})

    await model.transactions.deleteOne(req.body,function(err){
        if(!err)res.json("Record Deleted");
    }).clone().catch(function(err){res.json("Error")})
    
}

async function getLabel(req,res){
    model.transactions.aggregate([
       {
           $lookup:{
               from:'categories',
               localField:"type",
               foreignField:"type",
               as:"categoriesInfo",
           }
       } ,
       {
            $unwind:"$categoriesInfo",
       }

    ]).then (result => {
        let data = result.map(v=> Object.assign({},{_id:v._id,name:v.name,type:v.type, amount:v.amount, color:v.categoriesInfo['color']}));

        res.json(result)
    }).catch(error => {res.status(400).json("Error")})
}

module.exports = {
    createCategories,
    getCategories,
    createTransaction,
    getTransaction,
    deleteTransaction,
    getLabel,
}