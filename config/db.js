const mongoose=require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false)

const connection=mongoose.connect(process.env.mongoURL).then(()=> {
    console.log("connected")
}).catch((error) => {
    console.log(error)
})


module.exports={connection};