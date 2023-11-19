
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
                                            <div className="text">Business will frequent occurs that have <br /> repudiated accepted cases.</div>
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
                                            <div className="overlay"><Link href="/audit-assurance"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Obligations of business will frequently <br />occurs pleasures accepted.</div>
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
                                            <div className="overlay"><Link href="/strategy-planning"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Obligations of business will frequently <br />occurs pleasures accepted.</div>
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
                                            <div className="overlay"><Link href="/software-research"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Master-builder of human happiness no <br /> one avoids reject  pleasure itself.</div>
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
                                            <div className="overlay"><Link href="/support-maintenance"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Business will frequent occurs that have <br /> repudiated accepted cases.</div>
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
                                            <div className="overlay"><Link href="/support-maintenance"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Business will frequent occurs that have <br /> repudiated accepted cases.</div>
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
                                            <div className="overlay"><Link href="/support-maintenance"><span className="flaticon-right" /></Link></div>
                                        </div>
                                        <div className="content">
                                            <div className="text">Business will frequent occurs that have <br /> repudiated accepted cases.</div>
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