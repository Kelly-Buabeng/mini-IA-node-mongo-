const express = require('express');
const mongoose = require('mongoose');
const app = express();

// routes
app.get('/', (req, res) => {
  res.send('Hey,Welcome to UGMC web server');
});

app.get('/blog', (req, res) => {
  res.send('Hey, Welcome to ugmc blog');
});
 
app.post('/Patient',(req,res) =>{
  console.log(req.body);
  res.send(req.body)
})

mongoose
  .connect('mongodb+srv://kellybuabeng:wearehome@kellyapi.qufriw6.mongodb.net/kellyAPI?retryWrites=true&w=majority')
  .then(() => {
    console.log("Successfully connected to mongodb");
    app.listen(3000, () => {
      console.log("Backend app is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });