import "./inputs.css"
import React,{useState, useEffect} from "react";
import '../../pages/form/form'

function Input({type, id, description, placeholder, name, valueRadio, funcao}) {

  return (

    <div>
      <label htmlFor={id}>{description}</label>
      <input
        type={type}
        id={id}
        required
        name={name}
        key={name}
        value={valueRadio}
        onChange={(ev) => funcao(ev)}
      />   
    </div>
  );
}

export default Input;
