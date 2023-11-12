import CounterUp from "@/components/elements/CounterUp";
import VideoPopup from "@/components/elements/VideoPopup";
import Link from "next/link";

export default function About() {
    return (
        <>
            <section className="about-section-three">
                <div
                    className="pattern"
                    style={{
                        backgroundImage:
                            "url(assets/images/shape/pattern-10.png)",
                    }}
                />
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <h5>About Company</h5>
                        <h2>Trusted business consultants</h2>
                        <div className="text">
                            Nasib Pandey, PE, holds a Master's degree in Civil
                            Engineering from Lamar University, graduating in
                            2016. Since then, he has been actively involved in
                            the field of structural engineering. With a shared
                            vision and expertise in structural engineering,
                            Nasib, with his team, established P&D Engineering
                            Solutions LLC, a company dedicated to delivering
                            top-quality and cost-effective designs for home
                            improvement projects. With a commitment to
                            excellence, Nasib and his team strive to provide
                            clients with optimal solutions for their structural
                            engineering needs.
                        </div>
                        <Link href="#" className="read-more-link">
                            More About Company
                            <i className="flaticon-right" />
                        </Link>
                    </div>
                    <div className="team-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 team-block-two">
                                <div className="inner-box">
                                    <div className="image">
                                        <div className="default-image">
                                            <img
                                                className="lazy-image owl-lazy"
                                                src="/assets/images/resource/team-5.png"
                                                alt=""
                                            />
                                        </div>
                                        <div className="hover-image">
                                            <img
                                                className="lazy-image owl-lazy"
                                                src="/assets/images/resource/team-8.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h4>Nasib Pandey</h4>
                                        <div className="designation">PE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
