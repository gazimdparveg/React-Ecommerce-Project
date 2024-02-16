const express = require('express') 
const mongoose = require('mongoose');
const app = express()
const port = process.env.port || 5000

app.use(express.json())
var cors = require('cors')
app.use(cors())

const AddProduct = require('./Scema/Product.jsx');
const { ObjectId } = require('mongodb');

app.post('/AddProduct', function(req,res){
    const ProductInfo = {
      Pro_titile:req.body.Pro_titile,
      Pro_img:req.body.Pro_img,
      Pro_price:req.body.Pro_price,
      Pro_cat:req.body.Pro_cat,
      Pro_tag:req.body.Pro_tag,
      Pro_details:req.body.Pro_details
    }
    const savePro = new AddProduct(ProductInfo);
    savePro.save();
    res.send('Your Product is Save..');
})

 

app.get('/showProduct', async(req,res)=>{
  let date = await AddProduct.find({}).limit(12);
  res.send(date)
  
})  

 
app.get('/showProducts/:id', async(req,res)=>{
  const id = req.params.id;
  let date = await AddProduct.findById(id)
  res.send(date)
  
}) 

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(() => console.log('Connected!'));

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port)