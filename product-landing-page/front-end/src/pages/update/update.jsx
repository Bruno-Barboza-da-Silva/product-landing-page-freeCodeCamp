import Footer from "../../components/Footer/Footer";
import "./update.css";
import Input from "../../components/inputs/inputs";
import axios from 'axios'
import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'



function Update() {

const { id } = useParams();
// console.log(id)

const [User, setUser] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/update/${id}`)
        .then((response) => {
            setUser(response.data)
        })
}, [])

const nome = User.name
// console.log(User.name)

// csrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr


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
  
  const put = () => {
    axios.put(`http://localhost:5000/update/${id}`,{
      "name": titulo,
      "email": email,
      "product": product
    },)
    // .then(navigate("/send"))
    }

    // console.log(product)
    // console.log(titulo)


    return (
      <div id="page">
        <form id="form" onSubmit={put} >
        <h1 id="h1-form">Contact Us!</h1>
        <Input type="text" id="name" description="Name: " placeholder="Insert your name" name="name" funcao={changeName} />
          <Input type="email" id="email" description="E-mail: " placeholder="Insert your e-mail" name="email" funcao={changeEmail} />
        <h2 id="h2-form">
          Whitch one is your favorite?
        </h2>
        <div id="radios">
        <Input type="radio" id="begginer" description="Begginer " name="product" value="begginer"  funcao={changeProduct}/>
          <Input type="radio" id="advanced" description="Advanced " name="product" value="advanced"  funcao={changeProduct}/>
          <Input type="radio" id="wizzard" description="Wizzard " name="product" value="wizzard"  funcao={changeProduct}/>
        </div>
        <button type="submit" id="button-form">Send!</button>
      </form>
      <Footer/>
      </div>
    );
  }
  
  export default Update;