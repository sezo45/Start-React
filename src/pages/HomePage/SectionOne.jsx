import logo from "./images/test.png";
import icon1 from "./images/delivery-truck-svgrepo-com (1) 1.png";
import icon2 from "./images/shop-2-svgrepo-com 2.png";
import icon3 from "./images/verify.png";
export default function SectionOne() {
  return (
    <section id="sec-1">
      <div className="container py-5">
        <div className="d-flex flex-wrap col-12 ">
          <div className="row g-5">
          <div className="col-12 col-md-12 col-lg-6">
            <img className="rounded col-12" src={logo} alt="" />
          </div>
          <div className="col-12 col-md-12 col-lg-6 d-flex flex-column gap-2">
            <h1>Apple iphone 14 Pro Max</h1>
            <div className="d-flex align-items-center gap-2">
              <h4>$1399</h4>
              <span>
                <del>$1499</del>
              </span>
            </div>
            <p>
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras
            </p>
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div className="row g-3 col-12">
              <div className="col-6"><button className="btn1 col-12">Add To Wishlist</button></div>
              <div className="col-6"><button className="btn2 col-12">Add To Cart</button></div>
            </div></div>
            <div className="d-flex justify-content-between align-items-center pt-3">
              <div className="d-flex gap-4 align-items-center">
                <div className="bgg">
                  <img src={icon1} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <span>Free Delivery</span>
                  <span className="spa">1-2 day </span>
                </div>
              </div>
              <div className="d-flex gap-4 align-items-center">
                <div className="bgg">
                  <img src={icon2} alt="" />
                </div>
                <div className="d-flex flex-column">
                  <span>In Stock</span>
                  <span className="spa">Today </span>
                </div>
              </div>
              <div className="d-flex gap-4 align-items-center">
                <div className="bgg">
                  <img src={icon3}></img>
                </div>
                <div className="d-flex flex-column">
                  <span D>Guaranteed</span>
                  <span className="spa">1 year</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
