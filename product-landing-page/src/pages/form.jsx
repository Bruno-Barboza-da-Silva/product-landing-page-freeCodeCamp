import Footer from "../components/Footer/Footer";
import "./form.css";
import Input from "../components/inputs/inputs";



function Form() {

  // const type = ['email', 'text', 'radio', 'radio', 'radio'];
  // const id = ['email', 'name', 'begginer', 'advanced', 'wizzard']
  // const description = ['E-mail:', "Name:", "Begginer", "Advanced", "Wizzard"]
  // const name = ['email', 'name', 'product', 'product', 'product']
    return (
      <div id="page">
        <form id="form" method="post" action="/contact">
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