var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce2');
var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:3000'
}
var config = require('./config.js')
var app = express();
var port = 3000;
var ProductModel = require('./models/products.js');
var UserModel = require('./models/users.js')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))
app.post('/api/users', function(req, res){

  UserModel.create(req.body, function(err, user){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json(user)
    }
  })
})
app.get('/api/users/:id', function(req, res){

  UserModel.findOne({'username': req.params.id}, function(err, user){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json(user)
    }
  })
})
app.get('/api/users', function(req, res){

  UserModel.find(function(err, user){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json(user)
    }
  })
})
app.delete('/api/users/:id', function(req, res){
  UserModel.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json('item deleted')
    }
  })
})
app.put('/api/cart/:id', function(req, res){

  UserModel.findByIdAndUpdate(req.params.id, {$push: {cart: req.body._id}}, function(err, savedCartItem){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json(savedCartItem)
    }
  })
})
app.get('/api/cart/:id', function(req, res){

  UserModel.findById(req.params.id).populate("cart").exec(function(err, cartItems){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json(cartItems.cart)
    }
  })
})
app.put('/api/removeItem/:id', function(req, res){

  UserModel.findByIdAndUpdate(req.body._id, {$pull: {cart: req.params.id}}, function(err){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json('item deleted')
    }
  })
})

app.post('/api/products', function(req, res){
  ProductModel.create(req.body, function(err, savedProduct){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json(savedProduct)
    }
  })
})

app.get('/api/products', function(req, res){
  ProductModel.find(function(err, products){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json(products)
    }
  })
})
app.get('/api/products/:id', function(req, res){
  ProductModel.findById(req.params.id, function(err, product){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json(product)
    }
  })
})
app.put('/api/products/:id', function(req, res){

  ProductModel.findByIdAndUpdate(req.params.id, {$set: {title:req.body.title, description:req.body.description, price:req.body.price}}, function(err, updateResponse){
    if(err){
      res.status(500).json(err);
    }
    else {
      res.status(200).json(updateResponse);
    }
  })
})

app.delete('/api/products/:id', function(req, res){
  ProductModel.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.status(500).json(err)
    }
    else {
      res.status(200).json('item deleted')
    }
  })
})


















app.listen(port, function(){
  console.log("listening on port " + port);
})
