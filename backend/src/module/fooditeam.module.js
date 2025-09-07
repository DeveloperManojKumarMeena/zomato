const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    video:{
        type:String,
      
    },
    caption:{
        type:String
    },
    foodPartner:{
        type: mongoose.Types.ObjectId,
        ref:"foodpartner"
    }

})

const foodModel = mongoose.model("Food Iteam",foodSchema)

module.exports =  foodModel