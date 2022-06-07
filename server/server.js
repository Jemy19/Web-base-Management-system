const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path:"./config.env"});

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const con = require('./db/connection.js')

con.then(db =>  {if(!db)return process.exit(1)})




app.use(require('./routes/route'))


app.listen(port,() => {
    console.log(`Server is running on PORT: ${port}`)
})
