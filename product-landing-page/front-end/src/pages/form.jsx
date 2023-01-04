import Footer from "../components/Footer/Footer";
import "./form.css";
import Input from "../components/inputs/inputs";
import axios from 'axios'
import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";



function Form() {
  const navigate = useNavigate();
  const [titulo, setName] = useState()

  function changeName(ev) {
    setName(ev.target.value)
  }
  
  
  const [email, setEmail] = useState()
  function changeName (ev) {
        setName(ev.target.value)
      }
  
  function changeEmail(ev) {
    setEmail(ev.target.value)
  }
  
  const [product, setProduct] = useState()
  
  function changeProduct(ev) {
    setProduct(ev.target.value)
  }
  
  const post = () => {
    axios.post('http://localhost:5000/contact-us/',{
      "name": titulo,
      "email": email,
      "produt": product
    },)
    .then(navigate("/send"))
    }
    return (
      <div id="page">
        <form id="form" onSubmit={post} >
        <h1 id="h1-form">Contact Us!</h1>
        <Input type="text" id="name" description="Name: " placeholder="Insert your name" name="name" funcao={changeName}/>
          <Input type="email" id="email" description="E-mail: " placeholder="Insert your e-mail" name="email" funcao={changeEmail}/>
        <h2 id="h2-form">
          Whitch one is your favorite?
        </h2>
        <div id="radios">
        <Input type="radio" id="begginer" description="Begginer " name="product" valueRadio="begginer"  funcao={changeProduct}/>
          <Input type="radio" id="advanced" description="Advanced " name="product" valueRadio="advanced"  funcao={changeProduct}/>
          <Input type="radio" id="wizzard" description="Wizzard " name="product" valueRadio="wizzard"  funcao={changeProduct}/>
        </div>
        <button type="submit" id="button-form">Send!</button>
      </form>
      <Footer/>
      </div>
    );
  }
  
  export default Form;