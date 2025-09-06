const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    video:{
        type:String,
        require:true
    },
    caption:{
        type:String
    },
    foodPartner:{
        type: mongoose.Types.ObjectId,
        ref:"foodpartner"
    }

})