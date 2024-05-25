// import '../assets/css/swiper.min.css'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import ProductDisplay from './ProductDisplay';

import "swiper/css"



const SingleProduct = () => {
    const[product,setProduct] = useState([]);
    const {id} = useParams();
    // console.log(id);
    useEffect(() => {
        fetch("/src/products.json")
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    
    const result = product.filter((p) => p.id === id);
    // console.log(item);

  return (
    <div>
      <PageHeader title={"Our Shop Single"} curPage={"shop/ Single Product"} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="Swiper-container pro-single-top">
                          <Swiper
                            className="mySwiper"
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}>
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="col-md-6 col-12">
                    <div className="post-content">
                      <div>
                        {result.map((item) => (
                            <ProductDisplay  key={item.id} item={item}/>
                        ))}
                      </div>
                    </div>
                  </div>
                    </div>
                    </div>    
                {/* reviews*/}
                <div className="review">review</div>
              </article>
            </div>
            <div className="col-lg-4 col-12">right</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
