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

    let filter = await data.map(v=> Object.assign({type:v.type, color:v.color}))

    return res.json(filter);
}
