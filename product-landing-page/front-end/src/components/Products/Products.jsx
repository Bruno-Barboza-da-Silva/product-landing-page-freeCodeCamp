import cap from "../../images/cap.svg";
import hat from "../../images/hat.svg";
import wizzardHat from "../../images/wizzard-hat.svg";
import "./products.css";

function Products() {
  return (
    <section id="products">
      <h2>
        <br />
        Our products
      </h2>
      <div id="commercial">
        <div className="products">
          <div className="header-products">
            <h3>Begginer</h3>
            <img id="cap" src={cap} alt="" className="icon" />
          </div>
          <ul>
            <li className="description-products">Restricted platform access</li>
            <li className="description-products">Experts webnarys only</li>
            <li className="description-products">
              Acess to fixed wallets only
            </li>
          </ul>
        </div>
        <div className="products">
          <div className="header-products">
            <h3>Advanced</h3>
            <img id="graduation-hat" src={hat} alt="" className="icon" />
          </div>
          <ul>
            <li className="description-products">Full plataform acess</li>
            <li className="description-products">Open acess to the experts</li>
            <li className="description-products">You can make your wallet</li>
          </ul>
        </div>
        <div className="products">
          <div className="header-products">
            <h3>Wizard</h3>
            <img id="wizard-hat" src={wizzardHat} alt="" className="icon" />
          </div>
          <ul>
            <li className="description-products">Full plataform acess</li>
            <li className="description-products">Open access to experts</li>
            <li className="description-products">
              Personal wallet design by experts
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Products;
