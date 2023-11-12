import VideoPopup from "@/components/elements/VideoPopup";

export default function Chooseus() {
    return (
        <>
            <section className="chooseus-section-home14">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                            <div
                                className="video-inner"
                                style={{
                                    backgroundImage:
                                        "url(assets/images-4/background/video-bg-2.jpg)",
                                }}
                            >
                                <VideoPopup style={4} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title-three">
                                    <h2>Why Choose Us</h2>
                                </div>
                                <div className="inner-box">
                                    <div className="single-item">
                                        <div className="icon-box">
                                            <i className="customicon-building-1" />
                                        </div>
                                        <h3>Expertise</h3>
                                        <p>
                                            Our co-founders are licensed
                                            professional engineers with
                                            specialized knowledge in structural
                                            engineering. With advanced degrees
                                            and a wealth of experience, we bring
                                            a high level of expertise to every
                                            project we undertake..
                                        </p>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box">
                                            <i className="customicon-measure" />
                                        </div>
                                        <h3>Value Engineering</h3>
                                        <p>
                                            We are committed to staying ahead of
                                            the curve by embracing the latest
                                            advancements in structural
                                            engineering technologies and
                                            techniques. This allows us to
                                            deliver innovative and cutting-edge
                                            solutions to our clients.
                                        </p>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box">
                                            <i className="customicon-trophy-1" />
                                        </div>
                                        <h3>Award Winning Team</h3>
                                        <p>
                                            Your satisfaction is our priority.
                                            We believe in open communication,
                                            transparency, and collaboration. We
                                            work closely with our clients,
                                            understanding their unique needs and
                                            preferences, to tailor our solutions
                                            accordingly.
                                        </p>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box">
                                            <i className="customicon-trophy-1" />
                                        </div>
                                        <h3>Award Winning Team</h3>
                                        <p>
                                            We adhere to the highest industry
                                            standards and best practices to
                                            ensure the quality and integrity of
                                            our work. Every project undergoes
                                            rigorous quality checks,
                                            guaranteeing the reliability and
                                            safety of the structures we design.
                                        </p>
                                    </div>
                                    <div className="single-item">
                                        <div className="icon-box">
                                            <i className="customicon-trophy-1" />
                                        </div>
                                        <h3>Award Winning Team</h3>
                                        <p>
                                            We are dedicated to environmental
                                            responsibility. Our focus on
                                            sustainable engineering practices
                                            not only benefits our clients but
                                            also contributes to a greener, more
                                            sustainable future.
                                        </p>
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
