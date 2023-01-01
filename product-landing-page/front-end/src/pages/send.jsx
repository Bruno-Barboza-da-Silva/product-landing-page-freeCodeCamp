import { Link } from "react-router-dom";
import "./send.css"


function Send() {
    return (
      <div className="message">
        <h1 id="message-h1">Your message was sent! </h1>
        <h2 id="message-h2">Please wait our team make contact!</h2>
        <Link to="/" id="message-a">Return</Link>
      </div>
    );
  }
  
  export default Send;