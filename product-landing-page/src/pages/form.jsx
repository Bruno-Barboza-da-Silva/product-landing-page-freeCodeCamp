function Form() {
    return (
      <div>
        <form id="form" action="https://www.freecodecamp.com/email-submit">
        <label htmlFor="email">Do you like our products?</label>
        <input
          type="email"
          id="email"
          placeholder="Insert your e-mail"
          required
          name="email"
        />
        <input type="submit" id="submit" value="Sign-up" />
      </form>
      </div>
    );
  }
  
  export default Form;