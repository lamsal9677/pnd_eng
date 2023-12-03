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
                <h3 className="title custom-title">Commercial Designs: Transforming Spaces, Enhancing Business</h3>
                <div className="text text-align">
                    <p> Commercial designs are more than just arrangements of walls and furniture; they are
                            strategic blueprints that shape the essence and functionality of businesses. At P&D
                            Engineering Solutions LLC, we specialize in creating innovative and purposeful
                            commercial designs that elevate the aesthetics, efficiency, and productivity of your
                            workspace. Our expert architects and designers combine creativity with functionality,
                            crafting environments that not only reflect your brand but also foster creativity,
                            collaboration, and success.
                     </p>
                </div>
            </div>
            <div className="row tabs-container">
                <div className="col-md-5">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                            Branding through Architecture
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                            Optimized Functionality
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                            Innovative Workspaces
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(5)}>
                            <a className={activeIndex == 5 ? "nav-link active" : "nav-link"}>
                            Balancing Form and Function
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(6)}>
                            <a className={activeIndex == 6 ? "nav-link active" : "nav-link"}>
                            Compliance and Sustainability
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(7)}>
                            <a className={activeIndex == 7 ? "nav-link active" : "nav-link"}>
                            Elevate Your Business Environment
                            </a>
                        </li>
                       
                    </ul>
                </div>
                <div className="col-md-7">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                       
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Branding through Architecture:</h4>
                            <div className="text  text-align">
                            Your commercial space is a tangible representation of your brand identity. Our
                            commercial designs are meticulously crafted to align with your brand ethos, creating an
                            immersive experience for your clients and employees. Whether you're aiming for a
                            sleek, modern ambiance or a warm, inviting atmosphere, our designs capture the
                            essence of your brand, making a lasting impression on everyone who walks through
                            your doors.
                            </div>
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Optimized Functionality</h4>
                            <div className="text  text-align">Efficiency and functionality are the cornerstones of effective commercial designs. Our
                            team analyzes the unique needs of your business and tailors the design to optimize
                            workflow and productivity. From open office layouts that encourage collaboration to
                            strategically placed workstations that enhance focus, our designs are crafted with a
                            keen understanding of how space influences work habits and team dynamics.
                                </div>
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Innovative Workspaces</h4>
                            <div className="text  text-align">
                            The modern workplace is evolving, and so are our commercial designs. We integrate
                            innovative concepts such as flexible workspaces, smart technology integration, and
                            sustainable design practices to create forward-thinking environments. Whether you're
                            seeking adaptable meeting spaces, interactive communal areas, or state-of-the-art
                            conference rooms, our designs incorporate the latest trends to keep your business
                            ahead of the curve.
                                                            </div>
                        </div>
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Balancing Form and Function</h4>
                            <div className="text text-align">
                            Aesthetics and functionality go hand in hand in our commercial designs. We strike a
                            delicate balance between form and function, ensuring that the visual appeal of your
                            space harmonizes seamlessly with its practical use. Our attention to architectural
                            details, lighting, color schemes, and material selection results in visually stunning and
                            highly functional commercial spaces that leave a lasting impression on clients and
                            employees alike.
                            </div>
                                            
                        </div>
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Compliance and Sustainability</h4>
                            <div className="text  text-align">
                            Navigating complex building codes and regulations is crucial for commercial projects.
                            Our experienced team ensures that all designs comply with local regulations and
                            industry standards. Additionally, we prioritize sustainable practices, integrating energy-
                            efficient lighting, eco-friendly materials, and efficient HVAC systems to reduce your
                            environmental footprint and operational costs.
                                                
                                </div>
                        </div>
                        <div className={activeIndex == 7 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4 className='custom-title'>Elevate Your Business Environment</h4>
                            <div className="text  text-align">At P&D Engineering Solutions LLC, we understand that your commercial space is more
                            than just a physical location; it's the heart of your business. Our commercial designs are
                            crafted to enhance your professional image, inspire creativity, and foster a positive work
                            environment. Whether you're planning a new office layout, retail space, restaurant, or
                            any other commercial venture, our dedicated team is here to transform your vision into
                            a functional and visually striking reality. Contact us today to discuss how our innovative
                            commercial designs can elevate your business environment and leave a lasting
                            impression on your clients and employees.
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
