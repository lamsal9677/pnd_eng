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
                <h3 className="title custom-title"> Accessory Dwelling Units (ADUs): Unlocking Potential in Residential Spaces</h3>
                <div className="text text-align">
                    <p>  In the dynamic landscape of modern living, Accessory Dwelling Units (ADUs) have emerged as a revolutionary concept, offering versatile and sustainable solutions for homeowners. ADUs, 
                            also known as granny flats, in-law suites, or backyard cottages, are secondary living units situated on the same property as a primary residence. These compact, 
                            self-contained dwellings are designed to complement the existing home, providing a wide array of functional and practical uses.
                     </p>
                </div>
            </div>
            <div className="row tabs-container">
                <div className="col-md-5">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                       
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                            Versatility Redefined
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                            Community Enhancement
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                            Expert ADU Solutions from P&D Engineering Solutions LLC
                            </a>
                        </li>
                       
                    </ul>
                </div>
                <div className="col-md-7">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                       
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Versatility Redefined</h4>
                            <div className="text  text-align">
                            ADUs are incredibly versatile, serving a multitude of purposes for homeowners. They can be utilized as guest houses, 
                            providing a comfortable and private space for visiting friends and family. For homeowners seeking supplemental income, 
                            ADUs can be rented out, serving as a source of rental revenue. Moreover, ADUs can function as home offices, art studios, 
                            or wellness spaces, offering a quiet and inspiring environment away from the main house. The flexibility of ADU designs 
                            ensures that they can adapt to various needs, 
                            making them an ideal choice for homeowners looking to maximize the utility of their property.
                                                
                                </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Community Enhancement</h4>
                            <div className="text  text-align">Beyond individual benefits, ADUs play a vital role in enhancing communities. 
                            They promote intergenerational living, allowing families to stay connected while maintaining independence. 
                            Moreover, ADUs contribute to the diversity of housing options within neighborhoods, 
                            accommodating a wide range of demographics from young professionals to senior citizens. 
                            This inclusivity strengthens community bonds and fosters a sense of belonging among residents.</div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Expert ADU Solutions from P&D Engineering Solutions LLC</h4>
                            <div className="text  text-align">
                            At P&D Engineering Solutions LLC, we specialize in designing and engineering customized Accessory Dwelling Units 
                            tailored to your specific needs. Our experienced team of licensed professional engineers combines innovative 
                            design principles with structural integrity, ensuring that your ADU is not only functional and aesthetically 
                            pleasing but also safe and durable. Whether you're envisioning a cozy guest cottage, a stylish home office, 
                            or a modern rental unit, our experts will collaborate with you to bring your ADU vision to life. 
                            Contact us today to explore the endless possibilities of Accessory Dwelling Units and how they can transform your 
                            residential space into a hub of functionality and sustainability
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
