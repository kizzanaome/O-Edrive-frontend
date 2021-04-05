import React from 'react';
import '../../../assets/css/slider.css';

import star from '../../../assets/images/slider/star.svg';

class SliderSection extends React.Component {

  render() {
    return (
      <div className="section border border-danger">
        <div className="card_video">
          <div className="card_1 custom-elevation-z2">

            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Electronics and Mobile Phones</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Computers and Laptops</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Arts and Crafts</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Food and Beverages</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Cars, Trucks, and Motorcycles</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Beauty and Personal Care</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Watches and Jewelry</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
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
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Home and Kitchen</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Tools and Gardening</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Sports and Outdoors</span>
            </a>
            
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">African Traditional Items</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Asian Traditional Items</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Toys and Games</span>
            </a>
            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">Luxury Designer Goods</span>
            </a>

            <a className="category_link" href="#">
              <img src={star} alt="star" width="20px" />
              <span className="text_link">More Categories</span>
            </a>
          </div>

          <div className="card_2 custom-elevation-z2">
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
        </div>
        {/* <!-- <p style="font-size: 30px;margin: 70px 200px;">Since establishment, we have devoted our time and resources in
            understanding the startup scene of various African countries, thus focusing energies in creating maker
            spaces using our innovated freemium model. The end in mind at TechBuzz Hub is a multinational brand that
            transforms ideas into great corporations whilst using our philosophy; ideate it, innovate it, try it, create
            it, launch it, your startup. TechBuzz Hub has an array of experts with multifaceted skills. From technology
            to social sciences to business to creative arts. Flexibility and freedom of expression is the magic we
            progress every day.Since establishment, we have devoted our time and resources in understanding the startup
            scene of various African countries, thus focusing energies in creating maker spaces using our innovated
            freemium model. The end in mind at TechBuzz Hub is a multinational brand that transforms ideas into great
            corporations whilst using our philosophy; ideate it, innovate it, try it, create it, launch it, your
            startup. TechBuzz Hub has an array of experts with multifaceted skills. From technology to social sciences
            to business to creative arts. Flexibility and freedom of expression is the magic we progress every day.Since
            establishment, we have devoted our time and resources in understanding the startup scene of various African
            countries, thus focusing energies in creating maker spaces using our innovated freemium model. The end in
            mind at TechBuzz Hub is a multinational brand that transforms ideas into great corporations whilst using our
            philosophy; ideate it, innovate it, try it, create it, launch it, your startup. TechBuzz Hub has an array of
            experts with multifaceted skills. From technology to social sciences to business to creative arts.
            Flexibility and freedom of expression is the magic we progress every day.</p> --> */}
      </div>
    )
  }

}

export default SliderSection;
