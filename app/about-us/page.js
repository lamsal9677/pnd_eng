
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={14} footerStyle={14} wrapperCls="home_14">
                <section className="sidebar-page-container">
                    <div className="auto-container">
                    
                        <div className="row">
                            <div className="col-lg-12 content-side">
                                <div className="blog-single-post">
                                    <div className="top-content">
                                        <div className="image"><img src="/assets/myImages/about/about.jpeg" alt="" /></div>
                                    </div>
                                    <div className="lower-content">
                                        
                                        <ul className="post-meta">
                                            
                                        </ul>
                                        <div className="title pt-5">
                                            <h1 className="custom-title">About Us</h1>
                                        </div>
                                        <div className="text text-align">
                                        Welcome to P&D Engineering Solutions LLC, where innovation meets expertise in the
                                        realm of structural engineering. Founded by two passionate and highly skilled
                                        professional engineers, we bring a wealth of knowledge and experience to the industry.
                                        Currently licensed in California, Texas, Colorado, Florida, and New Jersey, we are
                                        committed to providing top-notch engineering solutions to our clients.
                                            </div>
                                       
                                        
                                        <h3 className="custom-title">Our Story</h3>
                                        <div className="text text-align">
                                            <p>P&D Engineering Solutions LLC was established with a singular vision: to redefine the
                                            standards of structural engineering. Founded by two dedicated engineers with extensive
                                            backgrounds in the field, our company represents the culmination of years of academic
                                            excellence and practical experience. Both co-founders hold master's degrees in
                                            structural engineering and boast a combined experience of over 12 years in the
                                            industry.</p>
                                            <br/>
                                            <p>Nasib Pandey, PE, holds a Master's degree in Civil Engineering from Lamar University,
                                            graduating in 2016. Since then, he has been actively involved in the field of structural
                                            engineering. With a shared vision and expertise in structural engineering, Nasib, with his
                                            team, established P&D Engineering Solutions LLC, a company dedicated to delivering
                                            top-quality and cost-effective designs for home improvement projects. With a
                                            commitment to excellence, Nasib and his team strive to provide clients with optimal
                                            solutions for their structural engineering needs.</p>
                                        </div>

                                        <h3 className="custom-title">Our Mission</h3>
                                        <div className="text text-align">
                                            <p>At P&D Engineering Solutions LLC, our mission is clear: we aim to transform your ideas
                                            into reality through innovative and sustainable engineering solutions. We are dedicatedto delivering exceptional services that not only meet but exceed the expectations of our
                                            clients. Through our expertise, integrity, and client-focused approach, we strive to create
                                            structures that stand the test of time.</p>
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
               
               
            </Layout>
        </>
    )
}