import "./api.css"
import React,{useState, useEffect} from "react";
// import api from "../services/api.js";
import axios from 'axios'

function Api() {
  const [frase, setFrase] = useState()
  useEffect(()=>{
    axios.get('http://localhost:5000/api/').then((res)=>{
      setFrase(res.data.nome)}).then(console.log("get")).catch();
  }, [])

const [titulo, setName] = useState()

function changeName(ev) {
  setName(ev.target.value)
}

const [email, setEmail] = useState()

function changeEmail(ev) {
  setEmail(ev.target.value)
}




const post = () => {
  axios.post('http://localhost:5000/api/',{
    "nome": titulo,
    "email": email
  }
    
,).then(console.log('post'))  
  }

  return (
    <div id="api">
        <h1>Hello</h1>
        <h2>Obrigado {frase ? frase : 'Sem frase'}!</h2>
        <form onSubmit={post}>
          {/* novo codigo */}
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={changeName}/>
          <input type="email" id="email" onChange={changeEmail}/>
          <input type="radio" id="begginer" description="Begginer " name="product"/>
          <input type="radio" id="advanced" description="Advanced " name="product"/>
          <input type="radio" id="wizzard" description="Wizzard " name="product"/>
          {/* novo codigo */}

        <button type="submit"></button>
        </form>
    </div>
  );
};

export default Api;