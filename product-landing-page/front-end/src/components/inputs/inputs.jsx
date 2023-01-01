import "./inputs.css"

function Input({type, id, description, placeholder, name}) {
  return (
    <div>
      <label htmlFor={id}>{description}</label>
      <input
        type={type}
        id={id}
        required
        name={name}
        placeholder={placeholder}
      />   
    </div>
  );
}

export default Input;
