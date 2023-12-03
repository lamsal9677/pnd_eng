
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={14} footerStyle={14} wrapperCls="home_14">
                <div>
                    <section className="services-section-six">
                        <div className="auto-container">
                            <div className="sec-title-three text-center">
                                <h2>Professional and <br /> dedicated services</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/myImages/horiz/adu.jpeg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-up" /></div>
                                                <h4>Accessory Dwelling Units (ADU)</h4>
                                            </div>
                                            <div className="overlay"><Link href="/adu"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Unlocking Residential Potential: Versatile, Sustainable Accessory Dwelling Units</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/myImages/horiz/new.jpeg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-chart" /></div>
                                                <h4>Single Family Residental Structures</h4>
                                            </div>
                                            <div className="overlay"><Link href="/single-family"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Crafting Your Dream Home: Unparalleled Single-Family Residential Construction</div>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/myImages/horiz/alter.jpeg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-agreement" /></div>
                                                <h4>Alteration and addition to existing structures</h4>
                                            </div>
                                            <div className="overlay"><Link href="/alteration-addition-structures"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Transforming Spaces, Preserving Memories: Expert Alterations and Additions</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/myImages/horiz/deck.jpeg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-thought" /></div>
                                                <h4>Deck Designs</h4>
                                            </div>
                                            <div className="overlay"><Link href="/deck-designs"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Crafting Outdoor Havens: Expertly Tailored Deck Designs for Unmatched Relaxation and Entertainment</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/myImages/horiz/wall.jpeg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-gear-1" /></div>
                                                <h4>Retaining Wall Designs</h4>
                                            </div>
                                            <div className="overlay"><Link href="/retaining-wall"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Enhancing Landscapes with Precision: Meticulous Retaining Wall Designs for Stability and Beauty</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/myImages/horiz/report.jpeg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-gear-1" /></div>
                                                <h4>Structural Evaluations and Reports</h4>
                                            </div>
                                            <div className="overlay"><Link href="/structural-evaluations"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Ensuring Stability, Enhancing Safety: Comprehensive Structural Evaluations for Informed Decision-Making</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 service-block-six">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <img className="lazy-image owl-lazy" src="/assets/myImages/horiz/commercial.jpeg" alt="" />
                                            <div className="icon-box">
                                                <div className="icon"><span className="flaticon-gear-1" /></div>
                                                <h4>Commercial Designs</h4>
                                            </div>
                                            <div className="overlay"><Link href="/commercial-designs"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Strategic Blueprints for Success: Elevate Your Business with Our Innovative Commercial Designs</div>
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