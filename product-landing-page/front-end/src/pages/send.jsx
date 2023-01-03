import { Link } from "react-router-dom";
import "./send.css"
import React,{useState, useEffect} from "react";
import axios from 'axios'


function Send() {
  const [frase, setFrase] = useState()
  useEffect(()=>{
     axios.get('http://localhost:5000/contact-us/').then((res)=>{
      setFrase(res.data.nome)});
  }, [frase])

    return (
      <div className="message">
        <h1 id="message-h1">Your message was sent! </h1>
        <h2 id="message-h2">Please wait our team make contact!</h2>
        <h3 id="message-h3">Thank you{ frase ? `, ${frase}` : ""}!</h3>
        <Link to="/" id="message-a">Return</Link>
      </div>
    );
  }
  
  export default Send;