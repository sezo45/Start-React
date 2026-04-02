import logo from "./images/Logo Vector.png";
import twitter from "./images/Twitter.png";
import facebook from "./images/Facebook.png";
import tiktok from "./images/tiktok.png";
import insta from "./images/instagram.png";
export default function Footer() {
  return (
    <footer id="footer" className="bg-dark py-5">
      <div className="container">
        <div className="Parint d-flex flex-wrap pb-5">
          <div className="col-12 col-md-6 col-lg-4 pt-5 d-flex flex-column gap-3">
            <div>
              <img src={logo} alt="" />
            </div>
            <span className="text-white">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </span>
          </div>
          <div className="foot2 col-12 col-md-6 col-lg-4 d-flex flex-column ps-5 pt-5 gap-3">
            <h4 className="text-white">Services</h4>
            <span>Bonus program</span>
            <span>Gift cards</span>
            <span>Credit and payment</span>
            <span>Service contracts</span>
            <span>Non-cash account</span>
            <span>Payment</span>
          </div>
          <div className="foot2 col-12 col-md-6 col-lg-4 pt-5 gap-3 d-flex flex-column">
            <h4 className="text-white">Assistance to the buyer</h4>
            <span>Find an order</span>
            <span>Terms of delivery</span>
            <span>Exchange and return of goods</span>
            <span>Guarantee</span>
            <span>Frequently asked questions</span>
            <span>Terms of use of the site</span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-4 pb-5">
            <a target="_blank" href="https://twitter.com"><img src={twitter} alt="" /></a>
            <a target="_blank" href="https://facebook.com"><img src={facebook} alt="" /></a>
            <a target="_blank" href="https://tiktok.com"><img src={tiktok} alt="" /></a>
            <a target="_blank" href="https://instagram.com"><img src={insta} alt="" /></a>
        </div>
      </div>
    </footer>
  );
}
