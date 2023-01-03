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

// const [nome, setNome] = useState("")

const [titulo, setName] = useState()

function changeName(ev) {
  const valor = ev.target.value ;
  setName(valor)
}

const post = () => {
  axios.post('http://localhost:5000/api/',
    {titulo}
,).then(console.log('post'))  
  }

// novo codigo
// const [values, setValues] = useState(null)
// function onChange(ev) {
//   const {value} = ev.target
//   setValues({... values, [name]:value}) 
// }


  return (
    <div id="api">
        <h1>Hello</h1>
        <h2>{frase ? frase : 'Sem frase'}</h2>
        <form onSubmit={post}>
          {/* novo codigo */}
          {/* <input type="text" name="title" onChange={onChange}/> */}
          <input type="text" onChange={changeName}/>
          {/* novo codigo */}
        <button type="submit"></button>
        </form>
    </div>
  );
};

export default Api;