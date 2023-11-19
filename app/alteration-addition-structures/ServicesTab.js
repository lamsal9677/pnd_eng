'use client'
import { useState } from "react"

export default function ServiceTabs1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-5">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>Single Family Residential New Construction
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                            Tailored to Perfection
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                            Innovative Design
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                            Quality Craftsmanship
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                            <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>
                            Energy Efficiency and Sustainability:
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                            <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>
                            Personalized Service
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-md-7">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Single Family Residential New Construction: Crafting Your Dream Home:</h4>
                            <div className="text text-align">
                                Embarking on the journey of building your dream home is a thrilling and transformative
                                            experience, and at P&D Engineering Solutions LLC, we are here to turn your vision into
                                            reality. Our Single Family Residential New Construction service represents the pinnacle
                                            of bespoke home design and construction, tailored to meet your unique lifestyle,
                                            preferences, and aspirations.
                                            </div>
                                            
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Tailored to Perfection</h4>
                            <div className="text  text-align">
                            Every family is unique, and your home should reflect your individuality. With our Single
                                                Family Residential New Construction service, we prioritize customization, ensuring that
                                                your new home is meticulously tailored to your family's needs. From the layout and
                                                architectural style to the choice of materials and finishes, every detail is carefully
                                                considered and crafted to perfection.
                                                
                                </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Innovative Design</h4>
                            <div className="text  text-align">Our experienced team of architects and engineers excels in innovative home design. We
                                                leverage the latest architectural trends and technologies to create homes that
                                                seamlessly blend functionality, aesthetics, and sustainability. Whether you prefer acontemporary masterpiece, a charming traditional home, or an eco-friendly marvel, our
                                                experts will collaborate with you to design a residence that exceeds your expectations.</div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Quality Craftsmanship</h4>
                            <div className="text  text-align">
                            Quality is the cornerstone of our Single Family Residential New Construction service.
                                                We partner with skilled craftsmen and use high-quality materials to ensure the longevity
                                                and durability of your new home. Our commitment to superior craftsmanship translates
                                                into homes that stand the test of time, providing you and your family with a safe and
                                                comfortable living environment for years to come.
                                </div>
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Energy Efficiency and Sustainability</h4>
                            <div className="text  text-align">
                            In an era of environmental consciousness, we prioritize energy efficiency and
                                                sustainability in our new construction projects. Our team integrates eco-friendly
                                                practices, such as energy-efficient HVAC systems, smart home technologies, and
                                                sustainable building materials, to minimize your home's environmental impact and
                                                reduce energy costs. By choosing our services, you not only invest in your family's
                                                future but also contribute to a greener world.
                                </div>
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Personalized Service</h4>
                            <div className="text  text-align">
                            Building a new home is a deeply personal endeavor, and we understand the importance
                                                of a supportive and attentive partnership. Our team provides personalized service,
                                                guiding you through every step of the construction process. From initial concept
                                                discussions to the final walkthrough, we ensure open communication, transparent
                                                decision-making, and a seamless building experience. Your satisfaction is our ultimate
                                                goal.
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
