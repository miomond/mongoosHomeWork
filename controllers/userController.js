const User = require('../models/User');

const register= async (_userName,_password,_firstname,_age)=>{
    try{
        let regesteredData = await User.create({userName:_userName,password:_password,firstName:_firstname,age:_age})
        if (regesteredData) {
            console.log("regestered Data");
        }else{
            console.log("a try attempt but failed");
        }
    }catch(e){
        console.log(e);
    }
}


const login = async(_userName,_password)=>{

    try {
        let loginData = User.find({userName:_userName,password:_password}).orFail(new Error('No docs found!'))

        if ( loginData) {
            console.log("done");
        }else{
            console.log("err");
        }
    } catch (Error) {
        console.log(Error);
    }
}

const  GetAllUser =async(_firstname) =>{
    try {
      const data = await User.find({}, { firstName: 1 });
      if (data.length > 0) {
        return data;
      } else {
        return []; 
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  
  const DeleteUser =async (_user) => {
    try {
      let data = await User.deleteOne({ user: _user });
      if (data) {
        console.log("done");
      } else {
        console.log("Not found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  



module.exports ={register,login,GetAllUser,DeleteUser};
