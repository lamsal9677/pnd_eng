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
                    <section className="contact-section style-five" style={{padding:0}}>
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
                                                <br/>
                                                <div className="phone-numer">925-787-1272 (California)</div>
                                                <br/>
                                                <div className="phone-numer">469-967-4003 (Texas)</div>
                                                <br/>
                                                <div className="phone-numer">info@pndeng.com</div>
                                                <br/>
                                                <div className="phone-numer">21 C Orinda Way PMB 246<br/>Orinda, CA 94563</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 right-column">
                                    <div className="inner-container">
                                        <div className="contact-form-area">
                                            {/* <div className="top-content">
                                                <h3>Send your message</h3>
                                                <div className="text">
                                                Please feel free to get in touch using the form below.
                                                We'd love to hear for you.
                                                </div>
                                            </div> */}
                                            <form
                                                method="post"
                                                action="https://api.web3forms.com/submit"
                                                className="contact-form"
                                            >
                                                <input
                                                type="hidden"
                                                name="access_key"
                                                value="83460ceb-d067-466d-a9ce-6bc86da4df0a"
                                                />
                                                <div className="row">
                                                <div className="col-md-12 form-group">
                                                    <input
                                                    type="text"
                                                    name="Name"
                                                    placeholder="Name"
                                                    required
                                                    />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <input
                                                    type="email"
                                                    name="Email"
                                                    placeholder="Email Address"
                                                    required
                                                    />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <input
                                                    type="text"
                                                    name="Phone Number"
                                                    placeholder="Phone"
                                                    required
                                                    />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <input
                                                    type="text"
                                                    name="Address"
                                                    placeholder="Address"
                                                    required
                                                    />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <textarea
                                                    name="Message"
                                                    placeholder="Message goes here"
                                                    />
                                                </div>
                                                <div className="col-md-12 form-group">
                                                    <input
                                                    type="hidden"
                                                    name="redirect"
                                                    value="https://web3forms.com/success"
                                                    />
                                                    <button
                                                    className="theme-btn btn-style-one"
                                                    type="submit"
                                                    >
                                                    <span className="btn-title">Send Message</span>
                                                    </button>
                                                </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Faq Section Four */}
                    <section className="faq-section-four">
                        <div className="auto-container">
                            <div className="sec-title-three text-center">
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
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>What services does P&D Engineering Solutions LLC provide?</div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">We specialize in a range of services, including new construction for single-family residential, alterations and additions, deck design, retaining wall construction, and commercial designs.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>How experienced is your team?</div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Our team comprises licensed professional engineers with a combined experience of over 12 years. Each member holds a master's degree in structural engineering, ensuring expertise and proficiency in our field.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>In which states is P&D Engineering Solutions LLC licensed to operate?</div>
                                            <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Currently, we are licensed in California, Texas, Colorado, Florida, and New Jersey
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>What is the process for initiating a new construction project with your firm?</div>
                                            <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">The process begins with an initial consultation to understand your needs. From there, we collaborate on the design, obtain necessary permits, and oversee construction to ensure a seamless and successful project.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>Can you handle alterations and additions to existing structures?</div>
                                            <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Absolutely. Our team excels in altering and adding to existing structures, carefully preserving their character while incorporating modern functionality.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 6 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(6)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>What sets P&D Engineering Solutions LLC apart from other engineering firms?</div>
                                            <div className={isActive.key == 6 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Our commitment to personalized service, innovative design, and rigorous engineering standards distinguishes us. We prioritize client satisfaction, creative solutions, and the longevity of our projects.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 7 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(7)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>How do you ensure the sustainability of your designs?</div>
                                            <div className={isActive.key == 7 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Sustainability is a key focus. We integrate eco-friendly practices, energy-efficient technologies, and sustainable materials to minimize environmental impact and reduce long-term operational costs.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 8 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(8)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>What is the typical timeline for completing a residential construction project?</div>
                                            <div className={isActive.key == 8 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Timelines vary based on project complexity and scope. During the initial consultation, we provide an estimate and a detailed timeline tailored to your specific project.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 9 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(9)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>Do you handle commercial design projects, and what types of businesses do you work with?</div>
                                            <div className={isActive.key == 9 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Yes, we specialize in commercial designs. Our portfolio includes a diverse range of businesses, from offices and retail spaces to restaurants and more.
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* End Block */}
                                        {/*Accordion Block*/}
                                        <li className="accordion block">
                                            <div className={isActive.key == 10 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(10)}><div className="icon-outer"><span className="icon icon_plus flaticon-right" /> <span className="icon icon_minus flaticon-right" /></div>How can I request a consultation or get more information about your services?</div>
                                            <div className={isActive.key == 10 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <div className="text">Contact us through our website's "Contact Us" page or call our office to schedule a consultation. We look forward to discussing your project and how we can assist you.
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

