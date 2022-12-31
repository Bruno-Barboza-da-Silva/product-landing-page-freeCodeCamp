import './signUp.css'

function SignUp () {
    return (
        <section id="sign-up">
        <form id="form" action="https://www.freecodecamp.com/email-submit">
          <label htmlFor="email">Do you like our products?</label>
          <input type="email" id="email" placeholder="Insert your e-mail" required name="email"/>
          <input type="submit" id="submit" value="Sign-up"/>
        </form>
        <div id="video-container">
        <iframe width="624" height="351" src="https://www.youtube.com/embed/ipUuoMCEbDQ" title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen
          id="video"></iframe>
      </div>
      </section>

    )
}
 export default SignUp