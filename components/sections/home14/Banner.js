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
                            data-bg="/assets/images-4/main-slider/4.jpg"
                        />
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-8 col-md-12">
                                    <div className="content-inner">
                                        <h6>
                                            Welcome to P&D Engineering Solutions
                                            LLC
                                        </h6>
                                        <h2>
                                         Where innovation meets expertise in the realm of structural engineering
                                        </h2>
                                        <p>
                                            {" "}
                                            Founded by two passionate and highly
                                            skilled professional engineers, we
                                            bring a wealth of knowledge and
                                            experience to the industry.
                                            Currently licensed in California,
                                            Texas, Colorado, Florida, and New
                                            Jersey, we are committed to
                                            providing top-notch engineering
                                            solutions to our clients.
                                        </p>
                                       
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
