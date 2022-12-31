import AboutUs from "../src/components/AboutUs/AboutUs";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Products from "../src/components/Products/Products";
import SignUp from "../src/components/SignUp/SignUp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SignUp />
        <AboutUs />
        <Products />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
