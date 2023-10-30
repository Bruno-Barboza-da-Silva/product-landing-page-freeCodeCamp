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
  const convertDate = (item) => {
    let data = String(item).split("T")[0].split("-").reverse().join("-")
    let hour = String(item).split("T")[1].split(".")[0]
    let date = data + " " + hour
    
    console.log(date)

    return date
  }


  return (
    <div className="manager">
      <ul className="manager">
      <li>
            <div className="title-manager">Name</div>
            <div className="title-manager">E-mail</div>
            <div className="title-manager">Product</div>
            <div className="title-manager">Created at</div>
            <div className="title-manager">Updated at</div>
            <div className="title-manager">Action</div>
          </li>
        {User.map((item) => (
          <li key={item.id}>
            <div>{item.name}</div>
            <div>{item.email}</div>

            <div>{item.product}</div>
            <div>{convertDate(item.createdAt)}</div>
            <div>{convertDate(item.updatedAt)}</div>
            <div className="buttons-manager">              
              <button id={item.id} onClick={(ev) => destroy(ev)}> 
              <img src={del} alt="delete" id="del"/>
              </button>
              <Link id="a-update"to={`/update/${item.id}`}>
              <img src={edit} alt="update" id="update" />
              </Link>
              </div>

          </li>
        ))}
      </ul>
      <div id="links-container">
      <Link to="/contact-us">
      <img src={add} alt="" id='add'/>
      </Link>
      <Link to="/"  id="message-a">
        Return
      </Link>
      </div>

    </div>
  );
}

export default Manager;
