import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products"
import SignUp from "../components/SignUp/SignUp"



function Home() {
  return (
    <div>
      <Header />
      <SignUp />
      <AboutUs />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
