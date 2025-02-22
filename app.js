const express = require('express');
const app = express();
let students = [
    { id : 1274, name : 'Phani'},
    {id : 1275, name : 'Charan'},
    {id : 1276, name : 'Harsha'},
    {id : 1280, name : 'Karthikeya Sharma'}
];
app.use(express.json());
app.listen(2000,()=>{
     console.log("Server Created and Running on the Server-----");
});
app.get("/students",(req,res)=>{
    if(students.length > 0){
        res.status(200).json({
            "message" : "student found",
            "students" : students
        });
    }else{
        res.status(404).json({
            "Message" : "The Entered Students Not Found"
        })
    }
});
app.post("/addStudent",(req,res)=>{
    const {id, name} = req.body;
    if(id && name){
        students.push({id,name});
        res.status(201).json({"message":"student added Successfully---"});
    }else{
        res.status(400).json({"message": "invalid"});
    }
});
app.delete("/deletestudent/:id",(req,res) => {
    const id = parseInt(req.params.id)
    students = students.filter(s=>s.id!=id)
    res.status(200).json({
        message:"Student Deleted Successfully---",
        "students":students
    })
})
