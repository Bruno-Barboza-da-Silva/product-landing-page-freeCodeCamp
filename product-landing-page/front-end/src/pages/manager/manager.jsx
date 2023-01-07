import "./manager.css"
import { Link } from "react-router-dom";
import React,{useState, useEffect} from "react";
import axios from 'axios'


function Manager() {
    const [User, setUser] = useState([])



    useEffect(()=>{
       axios.get('http://localhost:5000/manager/').then((res)=>{
        setUser([...res.data])
    })
    }, [])

      return (
        <div className="message">

<ul>
          {
            User.map(item => 
                <li key={item.name}>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <div>{item.product}</div>
                    <div>{item.createdAt}</div>
                    <div>{item.updatedAt}</div>
                    </li>
            )
          }
        </ul>
            <ul>
            {User.map((item) => {
                <li>{item.id}</li>
            })}
            </ul>
          <Link to="/" id="message-a">Return</Link>
        </div>
      );
    }
    
    export default Manager;