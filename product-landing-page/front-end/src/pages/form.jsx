import Footer from "../components/Footer/Footer";
import "./form.css";
import Input from "../components/inputs/inputs";
import axios from 'axios'



function Form() {
  axios.post('https://api.aluroni.com.br/pratos', {
    nome: 'Lasanha',
    descricao: 'O jantar mais gostoso do mundo inteirinho!'
})
  .then(function () {console.log("ok")
    // se tudo der certo, o prato vai ser criado!
  })

    return (
      <div id="page">
        <form id="form"   >
        <h1 id="h1-form">Contact Us!</h1>
        <Input type="email" id="email" description="E-mail: " placeholder="Insert your e-mail" name="email"/>
        <Input type="text" id="name" description="Name: " placeholder="Insert your name" name="name"/>
        <h2 id="h2-form">
          Whitch one is your favorite?
        </h2>
        <div id="radios">
        <Input type="radio" id="begginer" description="Begginer " name="product"/>
        <Input type="radio" id="advanced" description="Advanced " name="product"/>
        <Input type="radio" id="wizzard" description="Wizzard " name="product"/>
        </div>
        <button type="submit" id="button-form">Send!</button>
      </form>
      <Footer/>
      </div>
    );
  }
  
  export default Form;