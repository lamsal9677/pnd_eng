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
                <h3 className="title custom-title">Structural Evaluations: Ensuring Safety, Enhancing Stability</h3>
                <div className="text text-align">
                    <p> Structural evaluations are the foundation upon which safe and reliable buildings stand.
                            At P&D Engineering Solutions LLC, we specialize in comprehensive structural
                            evaluations, meticulously assessing the integrity and stability of existing buildings and
                            structures. Our expert engineers conduct thorough examinations, employing advanced
                            techniques and tools to identify weaknesses, potential risks, and necessary
                            improvements. Through our detailed evaluations, we provide invaluable insights that
                            enable informed decisions, ensuring the safety and longevity of your investments.
                     </p>
                </div>
            </div>
            <div className="row tabs-container">
                <div className="col-md-5">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                       
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                            Assessing Structural Integrity
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                            Identifying Risks and Weaknesses
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                            Customized Solutions
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                            <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>
                            Renovation and Reinforcement
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                            <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>
                            Expert Insights, Informed Decisions
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(7)}>
                            <a className={activeIndex == 7 ? "nav-link active" : "nav-link"}>
                            Safeguard Your Investment
                            </a>
                        </li>
                       
                    </ul>
                </div>
                <div className="col-md-7">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">

                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Assessing Structural Integrity</h4>
                            <div className="text  text-align">
                            A structural evaluation involves a meticulous examination of a building's foundation,
                            framework, load-bearing elements, and overall stability. Our experienced engineers use
                            cutting-edge technology and in-depth knowledge to analyze the structural components,
                            identifying any signs of wear, stress, or damage. This assessment is essential not only
                            for existing structures but also for properties slated for renovation, ensuring that
                            modifications are made within the limits of the existing framework.             
                            </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Identifying Risks and Weaknesses</h4>
                            <div className="text  text-align">Structural evaluations are proactive measures to identify potential risks before they
                                escalate into major issues. Whether it's due to natural wear and tear, environmental
                                factors, or unforeseen events, our evaluations pinpoint weaknesses and vulnerabilities.
                                By identifying these areas, we empower property owners and stakeholders to taketimely and appropriate actions, mitigating risks and avoiding costly damages or
                                accidents.
                                </div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Customized Solutions</h4>
                            <div className="text  text-align">
                            Every structure is unique, and so are its challenges. Our approach to structural
                            evaluations is customized to meet the specific needs of each building. Our engineers
                            consider the building's purpose, construction materials, architectural design, and
                            historical context. Through this personalized assessment, we provide tailored
                            recommendations and solutions, ensuring that the evaluated structure continues to
                            stand strong and secure.
                                                            </div>
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Renovation and Reinforcement</h4>
                            <div className="text text-align">
                            For buildings undergoing renovation or adaptive reuse, our structural evaluations play a
                            crucial role. We assess the building's ability to support new loads, identify areas that
                            need reinforcement, and provide expert guidance on modifications and enhancements.
                            By understanding the structural limitations and possibilities, property owners and
                            architects can execute renovations with confidence, preserving the building's integrity
                            while accommodating modern needs.
                            </div>
                                            
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Expert Insights, Informed Decisions</h4>
                            <div className="text  text-align">
                            Our structural evaluations provide clients with expert insights and data-driven
                            information. Armed with this knowledge, property owners, architects, and developers
                            can make informed decisions regarding repairs, renovations, or future construction
                            projects. By ensuring the structural soundness of a building, we contribute to the safety
                            of occupants and the preservation of architectural heritage.
                                                
                                </div>
                        </div>
                        <div className={activeIndex == 7 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Safeguard Your Investment</h4>
                            <div className="text  text-align">At P&D Engineering Solutions LLC, we believe that a thorough structural evaluation is
                            not just an assessment; it's an investment in the safety and longevity of your property.
                            Whether you own a historic building, a commercial complex, or a residential home, our
                            dedicated team of experts is here to conduct detailed evaluations, empowering you to
                            safeguard your investment and make confident, informed decisions about your
                            property's future. Contact us today to schedule your structural evaluation and ensure
                            the stability of your building.
                            </div>
                        </div>
                        
                    </div>
                </div>
             </div>

            
        </>
    )
}
