import { Link } from "react-router-dom";


function Send() {
    return (
      <div>
        <h1>Your message was sent! </h1>
        <h2>Please wait our team make contact!</h2>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
  
  export default Send;