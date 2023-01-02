import "./api.css"
import React,{useState, useEffect} from "react";
// import api from "../services/api.js";
import axios from 'axios'

function Api() {
  const [frase, setFrase] = useState()
  useEffect(()=>{
    axios.get('http://localhost:5000/api/').then((res)=>{
      setFrase(res.data.titulo)}).then(console.log("get")).catch();
  }, [])

  // problema: axios duplicando no get
// const [nome, setNome] = useState("")

// const post = () => {
//   axios.post('http://localhost:5000/api/',{
//     'titulo':'post'
// }).then(console.log('post'))  
//   }



  return (
    <div id="api">
        <h1>Hello</h1>
        <h2>{frase}</h2>
        {/* <form >
          <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <button type="submit" onSubmit={post()}></button>
        </form> */}
    </div>
  );
};

export default Api;