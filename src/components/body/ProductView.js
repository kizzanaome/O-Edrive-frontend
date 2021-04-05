import React from 'react';
import '../../assets/css/product.css';

import img1 from '../../assets/images/product/img-1.png';
import img2 from '../../assets/images/product/img-2.png';
import img3 from '../../assets/images/product/img-3.png';
import img4 from '../../assets/images/product/img-4.png';
import img5 from '../../assets/images/product/img-5.png';
import img6 from '../../assets/images/product/img-6.png';


class ProductView extends React.Component {

  render() {
    return (
      <div class="row product mx-auto">
        <div class="col-xl-4 col-sm-6">
          <div class="product-box">
            <div class="product-img pt-4 px-4">
              <div class="product-ribbon badge bg-warning">
                Trending
                                                            </div>
              <div class="product-wishlist">
                <a href="#">
                  <i class="mdi mdi-heart-outline"></i>
                </a>
              </div>
              <img src={img1} alt="" class="img-fluid mx-auto d-block" />
            </div>

            <div class="text-center product-content p-4">

              <h5 class="mb-1"><a href="#" class="text-dark">Nike N012 Shoes</a></h5>
              <p class="text-muted font-size-13">Gray, Shoes</p>

              <h5 class="mt-3 mb-0"><span class="text-muted me-2"><del>$280</del></span> $260</h5>

              <ul class="list-inline mb-0 text-muted product-color">
                <li class="list-inline-item">
                  Colors :
                                                                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-dark"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-light"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-primary"></i>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6">
          <div class="product-box">
            <div class="product-img pt-4 px-4">
              <div class="product-ribbon badge bg-danger">
                - 20 %
                                                            </div>
              <div class="product-wishlist">
                <a href="#">
                  <i class="mdi mdi-heart-outline"></i>
                </a>
              </div>
              <img src={img2} alt="" class="img-fluid mx-auto d-block" />
            </div>

            <div class="text-center product-content p-4">

              <h5 class="mb-1"><a href="#" class="text-dark">Adidas Running Shoes</a></h5>
              <p class="text-muted font-size-13">Black, Shoes</p>

              <h5 class="mt-3 mb-0"><span class="text-muted me-2"><del>$250</del></span> $240</h5>

              <ul class="list-inline mb-0 text-muted product-color">
                <li class="list-inline-item">
                  Colors :
                                                                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-danger"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-dark"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-light"></i>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6">
          <div class="product-box">
            <div class="product-img pt-4 px-4">

              <div class="product-wishlist">
                <a href="#">
                  <i class="mdi mdi-heart-outline"></i>
                </a>
              </div>
              <img src={img3} alt="" class="img-fluid mx-auto d-block" />
            </div>

            <div class="text-center product-content p-4">

              <h5 class="mb-1"><a href="#" class="text-dark">Puma P103 Shoes</a></h5>
              <p class="text-muted font-size-13">Purple, Shoes</p>

              <h5 class="mt-3 mb-0"><span class="text-muted me-2"><del>$260</del></span> $250</h5>

              <ul class="list-inline mb-0 text-muted product-color">
                <li class="list-inline-item">
                  Colors :
                                                                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-purple"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-light"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-dark"></i>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6">
          <div class="product-box">
            <div class="product-img pt-4 px-4">

              <div class="product-wishlist">
                <a href="#">
                  <i class="mdi mdi-heart-outline"></i>
                </a>
              </div>
              <img src={img4} alt="" class="img-fluid mx-auto d-block" />
            </div>

            <div class="text-center product-content p-4">

              <h5 class="mb-1"><a href="#" class="text-dark">Sports S120 Shoes</a></h5>
              <p class="text-muted font-size-13">Cyan, Shoes</p>

              <h5 class="mt-3 mb-0"><span class="text-muted me-2"><del>$240</del></span> $230</h5>

              <ul class="list-inline mb-0 text-muted product-color">
                <li class="list-inline-item">
                  Colors :
                                                                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-info"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-success"></i>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6">
          <div class="product-box">
            <div class="product-img pt-4 px-4">

              <div class="product-wishlist">
                <a href="#">
                  <i class="mdi mdi-heart-outline"></i>
                </a>
              </div>
              <img src={img5} alt="" class="img-fluid mx-auto d-block" />
            </div>

            <div class="text-center product-content p-4">

              <h5 class="mb-1"><a href="#" class="text-dark">Adidas AB23 Shoes</a></h5>
              <p class="text-muted font-size-13">Blue, Shoes</p>

              <h5 class="mt-3 mb-0"><span class="text-muted me-2"><del>$240</del></span> $250</h5>

              <ul class="list-inline mb-0 text-muted product-color">
                <li class="list-inline-item">
                  Colors :
                                                                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-dark"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-light"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-primary"></i>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6">
          <div class="product-box">
            <div class="product-img pt-4 px-4">
              <div class="product-ribbon badge bg-danger">
                - 20 %
                                                            </div>
              <div class="product-wishlist">
                <a href="#">
                  <i class="mdi mdi-heart-outline"></i>
                </a>
              </div>
              <img src={img6} alt="" class="img-fluid mx-auto d-block" />
            </div>

            <div class="text-center product-content p-4">

              <h5 class="mb-1"><a href="#" class="text-dark">Nike N012 Shoes</a></h5>
              <p class="text-muted font-size-13">Gray, Shoes</p>

              <h5 class="mt-3 mb-0"><span class="text-muted me-2"><del>$270</del></span> $260</h5>

              <ul class="list-inline mb-0 text-muted product-color">
                <li class="list-inline-item">
                  Colors :
                                                                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-dark"></i>
                </li>
                <li class="list-inline-item">
                  <i class="mdi mdi-circle text-light"></i>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      // <!-- end row --></div>
    )
  }

}

export default ProductView;
