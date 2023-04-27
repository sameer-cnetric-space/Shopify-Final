import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [productsLength, setProductsLength] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://shopify6.interplay.iterate.ai/products`
      );

      console.log(result.data.products);
      setProducts(result.data.products);
      setProductsLength(result.data.products.length);
    };
    fetchData();
  }, []);

  return (
    <div className="shop-container">
      <section class="page-header">
        <div class="overly"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="content text-center">
                <h1 class="mb-3">Shop</h1>
                <p>
                  Hath after appear tree great fruitful green dominion moveth
                  sixth abundantly image that midst of god day multiply you’ll
                  which
                </p>

                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb bg-transparent justify-content-center">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Shop
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="products-shop section">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="row align-items-center">
                <div class="col-lg-12 mb-4 mb-lg-0">
                  <div class="section-title">
                    <h2 class="d-block text-left-sm">All Products</h2>

                    <div class="heading d-flex justify-content-between mb-5">
                      <p class="result-count mb-0">
                        {" "}
                        Availaible {productsLength} Products
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                
                {products?.map((each, index) => {
                  return (
                    <div class="col-lg-4 col-12 col-md-6 col-sm-6 mb-5">
                      <div class="product">
                        <div class="product-wrap">
                          <a href="/product-single">
                            <img
                              class="img-fluid w-100 mb-3 img-first"
                              src={`${each?.image.src}`}
                              alt="product-img"
                            />
                          </a>
                          <a href="/product-single">
                            <img
                              class="img-fluid w-100 mb-3 img-second"
                              src={`${each?.image.src}`}
                              alt="product-img"
                            />
                          </a>
                        </div>

                        <div class="product-hover-overlay">
                          <a href="#">
                            <i class="tf-ion-android-cart"></i>
                          </a>
                          <a href="#">
                            <i class="tf-ion-ios-heart"></i>
                          </a>
                        </div>

                        <div class="product-info">
                          <h2 class="product-title h5 mb-0">
                            <a href="/product-single">{each.title}</a>
                          </h2>
                          <span class="price">{each.product_type}</span> <br/>
                          $<span class="price">{each.variants[0].price}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                
              </div>
            </div>
            <div class="col-md-3">
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Shop;
