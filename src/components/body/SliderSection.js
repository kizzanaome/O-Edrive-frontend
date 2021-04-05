import React from 'react';
import '../../assets/css/slider.css';

class SliderSection extends React.Component {

  render() {
    return (

      <div className="d-flex justify-content-between slider_section">
        <div className="card card_1 custom-elevation-z2">

          {/* <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Electronics and Mobile Phones</span>
            </a> */}
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-desktop mr-5"></i>
            <span className="text_link ml-5">Computers and Laptops</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-palette"></i>
            <span className="text_link">Arts and Crafts</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-utensils"></i>
            <span className="text_link">Food and Beverages</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-car"></i>
            <span className="text_link">Cars, Trucks, and Motorcycles</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="far fa-grin-stars"></i>
            <span className="text_link">Beauty and Personal Care</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-gem"></i>
            <span className="text_link">Watches and Jewelry</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-tshirt"></i>
            <span className="text_link">People Fashion</span>
          </a>
          {/* <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Men's Fashion</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Girl's Fashion</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Boy's Fashion</span>
            </a> */}
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-faucet"></i>
            <span className="text_link">Home and Kitchen</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-tools"></i>
            <span className="text_link">Tools and Gardening</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="far fa-futbol"></i>
            <span className="text_link">Sports and Outdoors</span>
          </a>

          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-globe-africa"></i>
            <span className="text_link">African Traditional Items</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fab fa-keybase"></i>
            <span className="text_link">Asian Traditional Items</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-gamepad"></i>
            <span className="text_link">Toys and Games</span>
          </a>
          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            <i className="fas fa-magic"></i>
            <span className="text_link">Luxury Designer Goods</span>
          </a>

          <a className="category_link" href="#">
            {/* <img src={star} alt="star" width="20px" /> */}
            {/* <i className="fas fa-angle-right"></i> */}
            <i className="fas fa-ellipsis-h"></i>
            <span className="text_link">More Categories</span>
          </a>
        </div>

        <div className="card card_2 custom-elevation-z2">
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img src="/images/1.jpg" className="slide_image" />
              <div className="text">Order Now</div>
            </div>

            <div className="mySlides fade">
              <img src="/images/3.jpg" className="slide_image" />
              <div className="text">Order Now</div>
            </div>

            <div className="mySlides fade">
              <img src="/images/2.jpeg" className="slide_image" />
              <div className="text">Order Now</div>
            </div>

            <div className="mySlides fade">
              <img src="/images/4.jpg" className="slide_image" />
              <div className="text">Order Now</div>
            </div>

            <div className="mySlides fade">
              <img src="/images/6.jpg" className="slide_image" />
              <div className="text">Order Now</div>
            </div>

            <div className="mySlides fade">
              <img src="/images/5.jpg" className="slide_image" />
              <div className="text">Order Now</div>
            </div>

            <div className="mySlides fade">
              <img src="/images/7.jpg" className="slide_image" />
              <div className="text">Order Now</div>
            </div>

          </div>

          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="card card_3 p-0 custom-elevation-z2">
          <p></p>
        </div>
      </div>
    )
  }

}

export default SliderSection;
