import "./home.css"
import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";
function Home(){
      const navigate = useNavigate();
    const [cr,setcr] = useState(false)
    const [ji,setji] = useState(false)
    const [id,setid] =useState("")
    const [name,setname] = useState("")
    function create(){
        console.log("hi")
        setcr(true)
    }




function save(){
        const d = {id,name};
        console.log(id,name,"d")
     axios.post("http://localhost:4400/save",
         {data:JSON.stringify(d),
        headers:{"Content-Type":"application/json"}}).then(resp =>{
            console.log(resp.data)
        
          navigate(`/message/${id}`)
           
        })
       
    }
    function j(){
      const d = {id,name};
      console.log(id,name,"d")
    
        navigate(`/message/${id}/${name}`)
    
     
  }
       
    
    function i(e){
        setid(e.target.value)
    }
    function n(e){
        setname(e.target.value)
    }

    function join(){
      console.log("eee")
    setji(true)
    }
    return(
        <>
        <div className="big">
          {cr && 
          <div className="modal">
           <div className="conn">
            <input onChange = {(e)=>i(e)} className="in" type="text" placeholder="type id"></input>
            <input  className="in" onChange={(e)=>n(e)} type="text" placeholder="your name"></input>
            <p className="butt" onClick={save} >Create</p>
           </div>
          </div>
            }
             
             { ji && 
          <div className="modal">
           <div className="conn">
            <input onChange = {(e)=>i(e)} className="in" type="text" placeholder="type id"></input>
            <input  className="in" onChange={(e)=>n(e)} type="text" placeholder="your name"></input>
            <p className="butt" onClick={j} >JOIN</p>
           </div>
          </div>
            }
             
              <div className="conn">
              <p className="but" onClick={create}>CREATE </p>
              <p>OR</p>
              <p className="but" onClick={join}>JOIN</p>
          </div> 
      
        </div>
        </>
    )}

export default Home;