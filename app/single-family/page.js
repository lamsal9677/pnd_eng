
import ServiceTabs1 from "@/components/elements/ServiceTabs1"
import Layout from "@/components/layout/Layout"
import AuditSlider1 from "@/components/slider/AuditSlider1"
import ServiceSlider1 from "@/components/slider/ServiceSlider1"
import Link from "next/link"
export default function Home() {
    return (
        <>
            <Layout headerStyle={14} footerStyle={14} wrapperCls="home_14">
                <div>
                    <section className="services-details">
                        <div className="auto-container">
                            <div className="sec-title-three text-center">
                            <h2>Single Family Residental Structures</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AuditSlider1 />
                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                    <li><Link href="/adu">Accessory Dwelling Units (ADU) <span /></Link></li>
                                                    <li><Link style={{color:"#7dafc3"}}  href="/single-family">Single Family Residental <br/> Structures<span /></Link></li>
                                                    <li><Link href="/alteration-addition-structures">Alteration and addition <br/> to existing structures<span /></Link></li>
                                                    <li><Link href="/deck-designs">Deck Designs <span /></Link></li>
                                                    <li><Link href="/retaining-wall">Retaining Wall Designs<span /></Link></li>
                                                    <li><Link href="/structural-evaluations">Structural Evaluations and <br/>Reports <span /></Link></li>
                                                    <li><Link href="/commercial-designs">Commercial Designs <span /></Link></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                   
                    <section className="sidebar-page-container-projects" >
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12 content-side">
                                <div className="blog-single-post">
                                    
                                    <div className="lower-content" style={{margin:0, padding:0}}>
                                        
                                        <ul className="post-meta">
                                            
                                        </ul>
                                        <h3 className="custom-title">Single Family Residential New Construction: Crafting Your Dream Home:</h3>
                                        <div className="text">
                                        <p>Embarking on the journey of building your dream home is a thrilling and transformative
                                            experience, and at P&D Engineering Solutions LLC, we are here to turn your vision into
                                            reality. Our Single Family Residential New Construction service represents the pinnacle
                                            of bespoke home design and construction, tailored to meet your unique lifestyle,
                                            preferences, and aspirations.
                                        </p>
                                            </div>
                                       
                                        
                                        <h3 className="custom-title">Tailored to Perfection:</h3>
                                        <div className="text">
                                            <p>Every family is unique, and your home should reflect your individuality. With our Single
                                                Family Residential New Construction service, we prioritize customization, ensuring that
                                                your new home is meticulously tailored to your family's needs. From the layout and
                                                architectural style to the choice of materials and finishes, every detail is carefully
                                                considered and crafted to perfection.
                                                </p>
                                        </div>

                                        <h3 className="custom-title">Innovative Design:</h3>
                                        <div className="text">
                                            <p>Our experienced team of architects and engineers excels in innovative home design. We
                                                leverage the latest architectural trends and technologies to create homes that
                                                seamlessly blend functionality, aesthetics, and sustainability. Whether you prefer acontemporary masterpiece, a charming traditional home, or an eco-friendly marvel, our
                                                experts will collaborate with you to design a residence that exceeds your expectations.
                                            </p>
                                        </div>

                                        <h3 className="custom-title">Quality Craftsmanship:</h3>
                                        <div className="text">
                                            <p>Quality is the cornerstone of our Single Family Residential New Construction service.
                                                We partner with skilled craftsmen and use high-quality materials to ensure the longevity
                                                and durability of your new home. Our commitment to superior craftsmanship translates
                                                into homes that stand the test of time, providing you and your family with a safe and
                                                comfortable living environment for years to come.
                                            </p>
                                        </div>
                                        <h3 className="custom-title">Energy Efficiency and Sustainability:</h3>
                                        <div className="text">
                                            <p>In an era of environmental consciousness, we prioritize energy efficiency and
                                                sustainability in our new construction projects. Our team integrates eco-friendly
                                                practices, such as energy-efficient HVAC systems, smart home technologies, and
                                                sustainable building materials, to minimize your home's environmental impact and
                                                reduce energy costs. By choosing our services, you not only invest in your family's
                                                future but also contribute to a greener world.
                                            </p>
                                        </div>
                                        <h3 className="custom-title">Personalized Service:</h3>
                                        <div className="text">
                                            <p>Building a new home is a deeply personal endeavor, and we understand the importance
                                                of a supportive and attentive partnership. Our team provides personalized service,
                                                guiding you through every step of the construction process. From initial concept
                                                discussions to the final walkthrough, we ensure open communication, transparent
                                                decision-making, and a seamless building experience. Your satisfaction is our ultimate
                                                goal.
                                            </p>
                                        </div>
                                        <h3 className="custom-title">Your Dream Home Awaits:</h3>
                                        <div className="text">
                                            <p>At P&D Engineering Solutions LLC, we are passionate about turning dreams into
                                                addresses. Let us be your partner in creating a single-family residence that reflects your
                                                style, enhances your lifestyle, and provides a sanctuary for you and your loved ones.
                                                Contact us today to embark on the exciting journey of building your dream home, where
                                                every brick, beam, and detail is a testament to your unique vision.
                                            </p>
                                        </div>
                                        
                                        
                                        {/* Post Author */}
                                       
                                        {/* Blog Post Pagination */}
                                       
                                        {/* Comments */}
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    
                    
                </div>

            </Layout>
        </>
    )
}