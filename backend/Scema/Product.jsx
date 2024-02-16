const mongoose = require('mongoose')
const {Schema}= mongoose;



const ProductSchema = new Schema({
    Pro_titile : {
        type    : String,
        require : true
    },
    Pro_img:{
        type   : String,
        require: true
    },
    Pro_price:{
        type   : Number,
        require: true
    },
    Pro_cat:{
        type   : String,
        require: true 
    },
    Pro_tag:{
        type    : String,
        require : true
    },
    Pro_details:{
        type   : String,
        require: true
    }
})

const post =  mongoose.model('product', ProductSchema);
module.exports = post;
