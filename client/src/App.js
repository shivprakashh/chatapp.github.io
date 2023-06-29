import logo from './logo.svg';
import './App.css';
import {FaTelegramPlane} from "react-icons/fa"
import { useEffect, useState } from 'react';
import {socket} from "./Socket"
import { useParams } from 'react-router-dom';
function App() {
  const idd = useParams();
  const [mess,setmess] = useState("")
const [data,setdata] =useState([])

  const useid =idd.id;
  console.log(useid,"useid")
  
const name =  idd.name;
 const [id,setid] = useState(idd.id)
 console.log(data,"usesatte data")
useEffect(()=>{
  console.log("useeffect clllllllll")
})
   useEffect(()=>{
  
   console.log("sockettt",socket)
   
  
    
    

   
      console.log(name,id)
      socket.emit("id",{name,id})
   },[])

function text(e){
setmess(e.target.value)
}
function send(){
  socket.emit("message",{id,name,mess})
  
}
socket.on(id,(d)=>{
 
  const name = d.name;
  const mess = d.mess;

setdata([{id,name,mess},...data])
console.log(data,"kkk")
}) 

  


  return (
    <div className="app">
     <div className='con'>
     <div className='head'>
     <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGbxnqm-l1GHdl0HmFqHQrErAJN9X8WMU6g&usqp=CAU"></img>
     <p className='name'>{name}</p>
     </div>
     <div className='message'>
     {data && data.map((e) => {
      if(e.name === name){
        return(<>  
           <div className='titlecon'>
          <div className='messageconright'>
          
       
        
           
           <p>{e.mess}</p>
          </div>
          <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBXNuO6PezhC18aYH_2cYtS0I7KbxoKYdwA&usqp=CAU"></img>
          </div>
     
     
             </>
     
           )
      } else{
        return(<>  
           <div className='titlecon'>    
           <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBXNuO6PezhC18aYH_2cYtS0I7KbxoKYdwA&usqp=CAU"></img>    
           <div className='messagecon'>
           <div className='titlecon'>
              
             <p className='titlename'> Name :{e.name}</p> </div>  <p>{e.mess}</p>
          </div>
         
          </div>

     
             </>
     
           )
      }
    
     })}
     </div>
     <div className='type'>
      <input className='inpu'onChange={(e)=> text(e)} type="text"></input>
    <FaTelegramPlane className='su' onClick={send}/>
     </div>
     </div>
    </div>
  );
}

export default App;
