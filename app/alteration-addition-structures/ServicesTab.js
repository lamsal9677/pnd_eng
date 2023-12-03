'use client'
import { useState } from "react"

export default function ServiceTabs1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>  
            <div className="blog-single-post">
                <h3 className="title custom-title">Alterations and Additions to Existing Structures: Transforming Spaces, Preserving Memories</h3>
                <div className="text text-align">
                    <p> Alterations and additions to existing structures breathe new life into your cherished
                                spaces, preserving the essence of your home while accommodating your evolving
                                needs. At P&D Engineering Solutions LLC, we specialize in seamlessly integrating
                                modern functionality and aesthetics into your existing property. Our Alterations and
                                Additions service is designed to enhance the beauty, functionality, and value of your
                                home, all while respecting its unique character and history.
                     </p>
                </div>
            </div>
            <div className="row tabs-container">
                <div className="col-md-5">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                       
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                            Preserving Heritage, Embracing Innovation
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                            Customized Solutions
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                            Seamless Integration
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                            <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>
                            Quality Craftsmanship
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                            <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>
                            Enhancing Value and Comfort
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(7)}>
                            <a className={activeIndex == 7 ? "nav-link active" : "nav-link"}>
                            Preserve the Past, Embrace the Future
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-md-7">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Preserving Heritage, Embracing Innovation</h4>
                            <div className="text  text-align">
                            Historic homes and beloved properties often come with a rich tapestry of memories and
                            character. Our Alterations and Additions service combines a deep respect for the
                            heritage of your space with innovative design solutions. We understand the delicate
                            balance between preserving the charm of your existing structure and introducing
                            contemporary elements that enhance its appeal and functionality.
                                                
                                </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Customized Solutions</h4>
                            <div className="text  text-align">Every family and home is unique, and so are their requirements. Whether you need
                            additional living space, a modern kitchen, a luxurious bathroom, or a cozy home office,our team of experienced architects and engineers tailors each alteration and addition
                            project to your specific needs. We work closely with you to understand your vision,
                            ensuring that the final result aligns perfectly with your lifestyle and preferences.</div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Seamless Integration:</h4>
                            <div className="text  text-align">
                            The key to successful alterations and additions lies in seamless integration. Our experts
                            meticulously plan each project, ensuring that the new elements harmonize with the
                            existing structure. From matching architectural styles to blending materials and
                            finishes, we focus on creating a cohesive and unified look. The goal is to make the
                            alterations and additions appear as if they have always been a natural part of your
                            home.
                                </div>
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Quality Craftsmanship</h4>
                            <div className="text  text-align">
                            We take pride in our commitment to quality craftsmanship. Our skilled builders and
                            craftsmen, coupled with our team of architects and engineers, ensure that every
                            alteration and addition is executed to perfection. We use high-quality materials and
                            adhere to industry best practices, guaranteeing the longevity and durability of the
                            enhancements made to your home.
                                </div>
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Enhancing Value and Comfort</h4>
                            <div className="text  text-align">
                            Beyond aesthetics, our Alterations and Additions service adds tangible value to your
                            property. Whether you’re looking to increase your home's resale value or simply
                            enhance your everyday living experience, our thoughtful alterations and additions are
                            designed to offer both aesthetic appeal and functional utility.
                                </div>
                        </div>
                        <div className={activeIndex == 7 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Preserve the Past, Embrace the Future</h4>
                            <div className="text  text-align">
                                With our Alterations and Additions service, you can transform your existing space into a
                                contemporary haven while preserving the essence and history that make your property
                                special. Let us help you strike the perfect balance between preserving the past and
                                embracing the future. Contact us today to embark on a journey of transformation that
                                respects the legacy of your space and enhances its potential
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
