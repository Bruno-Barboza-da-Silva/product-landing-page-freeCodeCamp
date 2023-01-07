import "./manager.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import add from "../../images/add_icon.svg"
import edit from "../../images/edit_icon.svg"
import del from "../../images/delete_icon.svg"

function Manager() {
  const [User, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/manager/").then((res) => {
      setUser([...res.data]);
    });
  }, []);

  const destroy = (ev) => {
    const number = ev.target.id
    console.log(number)
    axios.delete(`http://localhost:5000/manager/${number}`).then(window.location.reload())
  }




 
  // const destroy = (number) => {
  //   // const number = number
  //   axios.delete(`http://localhost:5000/manager/${number}`)
  //   .then(navigate("/manager"))
  //   }



  return (
    <div className="manager">
      <Link to="/contact-us">
      <img src={add} alt="" />
      </Link>
      <ul className="manager">
      <li>
            <div>Name</div>
            <div>E-mail</div>
            <div>Product</div>
            <div>Created at</div>
            <div>Updated At</div>
            <div>Buttons</div>
          </li>
        {User.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.product}</div>
            <div>{item.createdAt}</div>
            <div>{item.updatedAt}</div>
            <div className="buttons-manager">              
              <button id={item.id} onClick={(ev) => destroy(ev)}> 
              <img src={edit} alt="" />.
              </button>
              <button >
              <img src={del} alt="" />
              </button>
              </div>
          </li>
        ))}
      </ul>
      <Link to="/"  id="message-a">
        Return
      </Link>
    </div>
  );
}

export default Manager;
