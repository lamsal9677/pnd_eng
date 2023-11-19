
import ServiceTabs1 from "@/components/elements/ServiceTabs1"
import ServiceTab from "/home/udaya/Desktop/personal-projects/client-workds/pnd_eng/app/alteration-addition-structures/ServicesTab.js"
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
                                                    <li><Link href="/single-family">Single Family Residental <br/> Structures<span /></Link></li>
                                                    <li><Link style={{color:"#7dafc3"}}  href="/alteration-addition-structures">Alteration and addition <br/> to existing structures<span /></Link></li>
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
                    <ServiceTab />
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
                                        <h3>Your Dream Home Awaits:</h3>
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