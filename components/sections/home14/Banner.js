"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: ".h1n",
        prevEl: ".h1p",
    },

    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
};

export default function Banner() {
    return (
        <>
            <section className="banner-section banner-section-home14">
                <Swiper
                    {...swiperOptions}
                    className="banner-carousel theme_carousel owl-theme"
                >
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div
                            className="image-layer lazy-image"
                            data-bg="/assets/myImages/banner.jpeg"
                        />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12">
                                    <div className="content-inner">
                                        <h6>
                                            Welcome to P&D Engineering Solutions
                                            LLC
                                        </h6>
                                        <h2>
                                            where innovation meets expertise.
                                        </h2>
                                        <Link href="/about-us" className="read-more-link" style={{color:'#7dafc3'}}>
                                            More About Company
                                            <i className="flaticon-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}
