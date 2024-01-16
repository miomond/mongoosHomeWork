const {json} = require('body-parser');
const express = require('express');
const app = express();
let f = require('fs');
const path = require("path");
const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userControler= require('./controllers/userController');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


// userControler.register("mohamed", "01554833784","ahmed",15);
/////worked once per user 
////////it print erorr but doesn't shutdown the server in case of multible users 
////user 1 ("ahmed","01004833784")
///user 2 ("mohamed","01554833784")

// userControler.login("mohamed","01554833784");//////test run for login
userControler.login("mostafa","01554833756");//////test run for login FAILED 


  // userController.GetAllUser()
  // .then(users => {console.log("Found Users:", users)})
  //.catch(error => { console.log(error)});

// DeleteUser

  // userController.DeleteUser("mohamed")
  //.then(user=>{console.log("deleted")})
  //.catch(error=>{ console.log(error) })

  //   todoController.CreateNewTodo("learn nodejs","Don't Todo",["Node Js","Mongodb"])


  // todoController.GetAllToDo().then(data=>{
  //   console.log(data)
  
  // }).catch(error=>{ 
  //     console.log(error);
  // })

//   todoController.DeleteTodo().then(data=>{
//     console.log(data);
//   }).catch (error=>{
//     console.log(error);
//   })








app.get('/', (req, res) => {
    res.send('hello world')
})




app.listen(8080, () => {
    console.log("lestining ");
})