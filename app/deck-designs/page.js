
import ServiceTabs from "./ServiceTabs"
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
                            <h2>Deck Designs</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    {/*Theme Carousel*/}
                                    <AuditSlider1 src={"/assets/myImages/sources/Deck.jpeg"} />

                                </div>
                                <aside className="col-lg-4">
                                    <div className="service-sidebar">
                                        <div className="widget widget_categories_two">
                                            <div className="widget-content">
                                                <ul className="categories-list clearfix">
                                                    <li><Link href="/adu">Accessory Dwelling Units (ADU) <span /></Link></li>
                                                    <li><Link href="/single-family">Single Family Residental <br/> Structures<span /></Link></li>
                                                    <li><Link href="/alteration-addition-structures">Alteration and addition <br/> to existing structures<span /></Link></li>
                                                    <li className='active'><Link style={{color:"#7dafc3"}} href="/deck-designs">Deck Designs <span /></Link></li>
                                                    <li><Link href="/retaining-wall">Retaining Wall Designs<span /></Link></li>
                                                    <li><Link href="/structural-evaluations">Structural Evaluations and <br/>Reports <span /></Link></li>
                                                    <li><Link href="/commercial-designs">Commercial Designs <span /></Link></li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <ServiceTabs/>
                        </div>
                    </section>
                    
                    
                </div>

            </Layout>
        </>
    )
}