import iphone14 from './images/Iphone 14 pro 1.png'
import iphone14blue from './images/Iphone 14 pro(1).png'
import iphone11 from "./images/phone.png";
export default function SectionTwo() {
  return (
    <section id="sec-2">
      <div className="container pt-4 col-12">
        <div>
        <h3>Related Products</h3>
        </div>
        <div className="parintPhone pt-3 pb-5">
            <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
                <div className="phone d-flex flex-column p-3 rounded gap-2">
                    <img src={iphone14} alt="" />
                    <span>Apple iPhone 14 Pro 512GB Gold (MQ233)</span>
                    <span>$1437</span>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="phone d-flex flex-column p-3 rounded gap-2">
                    <img className='rounded' src={iphone11} alt="" />
                    <span>Apple iPhone 11 128GB White (MQ233)</span>
                    <span>$510</span>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="phone d-flex flex-column p-3 rounded gap-2">
                    <img src={iphone14blue} alt="" />
                    <span>Apple iPhone 11 128GB White (MQ233)</span>
                    <span>$550</span>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="phone d-flex flex-column p-3 rounded gap-2">
                    <img src={iphone14blue} alt="" />
                    <span>Apple iPhone 11 128GB White (MQ233)</span>
                    <span>$550</span>
                    <button>Add To Cart</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
