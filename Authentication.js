const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET='cvrcollege';
var app = express();

 app.use(express.json());

 app.listen(2000,()=>{
   console.log("Server running on port 2000")
});

 app.post('/Login',(req,res)=>{
    const{username,password}=req.body;
    
    if((username == "cvr") && (password=='cvr123')){
      
    
    const token = jwt.sign({username,password},JWT_SECRET);
    res.json(token)}
    else{
      next()
    }
 })


 app.get('/protected',authenticateToken,(req,res)=>{
   res.json({"message":"Welcome to My Home page"})
})

app.get('/Students',(req,res)=>{
   res.json ({"message":"HI"})

})


 function authenticateToken(req,res,next){
    const authHeader= req.headers['authorization'];
   
    const token =  authHeader.split(' ')[1];
     
    
     jwt.verify(token,JWT_SECRET,(err,decode)=>{
        if(err) {
         return res.sendstatus(403).json({"message":"Invalid Token Login First"});
      }
      else{
         res.json({"message":"Welcome to My Home page"})
     }
 })
}
