function Form() {
    return (
      <div>
        <h1>Contact Us!</h1>
        <form id="form" method="post" action="/contact">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="Insert your e-mail"
          required
          name="email"
        />
                <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Insert your name"
          required
          name="name"
        />

        <h2>
          Whitch one is your favorite?
        </h2>
        <label htmlFor="begginer">Begginer </label>
        <input type="radio" name="begginer" id="" />

        <label htmlFor="advanced">Advanced </label>
        <input type="radio" name="advanced" id="" />

        <label htmlFor="Wizzard">Wizzard </label>
        <input type="radio" name="wizzard" id="" />
        <button type="submit">Send!</button>
      </form>
      </div>
    );
  }
  
  export default Form;