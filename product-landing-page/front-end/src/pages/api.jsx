import "./api.css"
import React,{useState, useEffect} from "react";
// import api from "../services/api.js";
import axios from 'axios'

function Api() {
  const [frase, setFrase] = useState("")
  useEffect(()=>{
    axios.get('http://localhost:5000/api/').then(res=>{
      console.log(res.data.titulo)
      setFrase(res.data.titulo)});
  }, [])

const [nome, setNome] = useState("")

function post () {
  axios.post('http://localhost:5000/api/',{
    'titulo':{nome}
}).then(console.log(nome))



    
  }
  return (
    <div id="api">
        <h1>Hello</h1>
        <h2>{frase}</h2>
        <form >
          <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <button type="submit" onSubmit={post()}></button>
        </form>
    </div>
  );
}

export default Api;