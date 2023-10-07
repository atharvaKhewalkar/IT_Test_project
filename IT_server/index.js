const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/IT');
    console.log('db connected');
}

const userSchema = new mongoose.Schema({
    fullName: String,
    rollNo: Number,
    email: String,
    password: String
  });
  
const User = mongoose.model('User', userSchema);


const server = express();

server.use(cors());
server.use(bodyParser.json());


server.post('/signup', async (req,res) => {

let user = new User();
user.fullName = req.body.fullName;
user.rollNo = req.body.rollNo;
user.email = req.body.email;
user.password = req.body.password;
const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.listen(8080, ()=>{
    console.log('server started')
})