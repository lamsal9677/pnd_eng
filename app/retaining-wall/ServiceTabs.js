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
                <h3 className="title custom-title"> Retaining Wall Design: Enhancing Landscapes, Ensuring Stability</h3>
                <div className="text text-align">
                    <p>  Retaining walls are not just functional structures; they are the silent guardians of
                            landscapes, providing stability, beauty, and purpose. At P&D Engineering Solutions LLC,
                            we specialize in creating meticulously designed retaining walls that blend seamlessly
                            with the natural terrain while offering essential support and erosion control. Our
                            retaining wall designs are crafted with precision, ensuring both structural integrity and
                            aesthetic appeal.
                     </p>
                </div>
            </div>
            <div className="row tabs-container">
                <div className="col-md-5">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                            Erosion Control and Stability
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                            Customized Solutions
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                            Aesthetic Integration
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                            <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>
                            Expert Engineering
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                            <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>
                            Multi-Functional Design
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(7)}>
                            <a className={activeIndex == 7 ? "nav-link active" : "nav-link"}>
                            Transforming Landscapes, Ensuring Stability
                            </a>
                        </li>
                       
                    </ul>
                </div>
                <div className="col-md-7">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                       
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Erosion Control and Stability</h4>
                            <div className="text  text-align">
                            Retaining walls play a crucial role in preventing soil erosion and maintaining the stability
                            of sloped landscapes. Our expert engineers assess the specific terrain of your property
                            to design retaining walls that effectively hold back soil, preventing landslides and
                            ensuring the long-term stability of your land. Whether your property is on a hillside, near
                            a water body, or simply dealing with natural erosion, our retaining walls provide a robust
                            solution.
                                                
                            </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Customized Solutions</h4>
                            <div className="text  text-align">We understand that every landscape is unique. Our retaining wall designs are
                            customized to suit the specific needs and aesthetics of your property. Whether you
                            require a traditional stone retaining wall, a modern concrete structure, or a blend of
                            natural and man-made materials, our team works closely with you to create a design
                            that seamlessly integrates with the surroundings while serving its functional purpose.</div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Aesthetic Integration</h4>
                            <div className="text  text-align">
                            A well-designed retaining wall not only serves a practical purpose but also enhances the
                            visual appeal of your landscape. Our designs focus on aesthetic integration, ensuring
                            that the retaining wall becomes a natural extension of your outdoor space. We consider
                            factors such as color, texture, and shape, selecting materials that complement the
                            existing features of your property and harmonize with the overall landscape design.
                                                            </div>
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Expert Engineering</h4>
                            <div className="text text-align">
                            The strength and durability of a retaining wall are paramount. Our experienced
                            engineers employ advanced techniques and industry best practices to ensure that each
                            retaining wall we design meets or exceeds the required structural standards. We
                            conduct thorough assessments of soil conditions, drainage patterns, and loading
                            factors, guaranteeing the reliability and safety of the retaining wall for years to come.
                                                        </div>
                                            
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Multi-Functional Design</h4>
                            <div className="text  text-align">
                            Beyond stabilizing slopes, our retaining walls are designed to serve multiple functions.
                            They can create terraced areas for gardens, seating, or pathways, maximizing the
                            usable space on your property. Additionally, they can act as visual barriers, noise
                            buffers, or foundation support for adjacent structures, offering versatile solutions that
                            enhance the functionality of your outdoor environment.
                                                
                                </div>
                        </div>
                        <div className={activeIndex == 7 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Transforming Landscapes, Ensuring Stability</h4>
                            <div className="text  text-align">With our retaining wall designs, you can transform challenging landscapes into
                            functional, beautiful, and secure outdoor spaces. Whether you are looking to address
                            erosion issues, create tiered gardens, or enhance the aesthetic appeal of your property,
                            our expert team at P&D Engineering Solutions LLC is here to turn your vision into a
                            reality. Contact us today to explore the possibilities of our innovative retaining wall
                            designs.</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
