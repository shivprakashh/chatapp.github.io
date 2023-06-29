const express = require("express")
const app = express();
const bodyparser = require("body-parser")
const mysql= require("mysql")
const cors = require("cors");
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1111",
    database:"chat"
})
app.use(bodyparser.json())
app.use(cors())
app.get("/",(req,resp)=>{
    console.log("hii")
    resp.send("Hi")
})
app.post("/save",(req,resp)=>{
    
    const data = req.body.data;
    const d = JSON.parse(data)
    console.log("ds",d)
    const roomid = d.id;
    const admin = d.name;
    con.query(`insert into creator (roomid,admin) values ("${roomid}","${admin}")`,(err,s)=>{
        if(err){
            console.log(err)
        }
        else{
            resp.send("successful")
        }
})})
const http = require("http").createServer(app);
var io = require("socket.io")(http,{
    cors:{origin:"*"}
});

io.on("connection",function (socket){
    console.log("connect")
   socket.on("id",(d)=>{
    console.log(d,"dd")
   })
   socket.on("message",(d)=>{
    console.log(d,d.id,d.mess,"this is")
    io.emit(`${d.id}`,{id:d.id,mess:d.mess,name:d.name})
   })

   socket.on("disconnect",() => {
    console.log("disconnected")
})

})



    


http.listen(4400)