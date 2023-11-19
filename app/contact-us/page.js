'use client'
import Layout from "@/components/layout/Layout"
import CForm from "@/components/contactForm"
import Link from "next/link"
import { useState } from 'react'


//import the form css
import './contactForm.css'


export default function Home() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={14} wrapperCls="home_14">
                <div>

                    {/* Contact Section Style Five */}
                    <section className="contact-section style-five">
                        <div className="auto-container" style={{ backgroundImage: 'url(assets/myImages/stacked-waves-haikei.svg)',backgroundSize:'cover' }}>
                            <div className="row m-0">
                                <div className="col-lg-6 left-column" >
                                    <div className="inner-container">
                                        <div className="wrapper-box">
                                            <div className="sec-title-three light">
                                                <h2 className="footer-title">New case? </h2>
                                <h2 className="footer-title">We’d love to help you</h2>

                                                <div className="text" style={{color:"white"}}>Please feel free to get in touch using the form below. We'd love to hear your <br /> thoughts &amp; answer any questions you may have!</div>
                                            </div>
                                            <div className="author-box">
                                            
                                                <h4 className="footer-title">Have a Question?</h4>
                                                <div className="phone-numer">+1 419 321 1231</div>
                                                <div className="phone-numer">abcd@xyz.com</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 right-column">
                                    <div className="inner-container">
                                        <div className="contact-form-box">
                                                <CForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Faq Section Four */}
                    <section className="faq-section-four">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Find answers in our <br /> list of frequently asked questions </h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <ul className="accordion-box style-two mb-30">
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>01.   What does you do?</div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Same as saying through shrinking from toil and pain these actual teachings of the great explorer of the truth, the master builder of human happiness.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>02.  What industries covered?</div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Same as saying through shrinking from toil and pain these actual teachings of the great explorer of the truth, the master builder of human happiness.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>03.  How do you price?</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Same as saying through shrinking from toil and pain these actual teachings of the great explorer of the truth, the master builder of human happiness.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>

            </Layout>
        </>
    )
}