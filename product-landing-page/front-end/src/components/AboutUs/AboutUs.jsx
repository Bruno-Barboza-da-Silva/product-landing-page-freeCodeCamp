import "./aboutUs.css";
import quality from "../../images/quality.svg";
import quickService from "../../images/quick-service.svg";
import lamp from "../../images/lamp.svg";

function AboutUs() {
  return (
    <section >
      <h2 id="about-us">
        <br />
        About us
        </h2>
      <div id="policy">
        <div className="benefits">
          <div className="header-benefits">
            <img
              id="quick-service"
              src={quickService}
              alt=""
              className="icon"
            />
            <h3>Quick Service</h3>
          </div>
          <p className="description-policy">
            Our team does its best to provide your access in less than 10 hours
          </p>
        </div>
        <div className="benefits">
          <div className="header-benefits">
            <img id="quick-service" src={quality} alt="" className="icon" />
            <h3>Satisfaction</h3>
          </div>
          <p>
            If you don't like the product within 30 days, you will get all your
            money back 
          </p>
        </div>
        <div className="benefits">
          <div className="header-benefits">
            <img id="easy" src={lamp} alt="" className="icon" />
            <h3>Easy to Use</h3>
          </div>
          <p>Our products were designed to be as simple as possible to use.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
