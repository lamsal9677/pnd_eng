import Link from "next/link";
export default function Footer14() {
    return (
        <>
            <footer className="footer-style-14">
                <div className="auto-container">
                    <div className="footer-top text-center">
                        <div className="upper-box">
                            <div className="icon-box">
                                <i className="customicon-calculator" />
                            </div>
                            <h3>Get a Free Quote</h3>
                        </div>
                        <div className="info-inner">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-box">
                                        <h6 className="footer-title">Location</h6>
                                        <p>10879 San Pable Ave, El Cerrito CA, USA</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-box">
                                        <h6 className="footer-title">Phone</h6>
                                        <p>
                                                +1-510-926-7190
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-box">
                                        <h6 className="footer-title">Email</h6>
                                        <p>Nasibpandey70@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="footer-menu clearfix">
                            <li>
                                <Link href="/" className="footer-link">Home</Link>
                            </li>
                            <li>
                                <Link href="/about-us" className="footer-link">About Us</Link>
                            </li>
                            <li>
                                <Link href="/services" className="footer-link">Our Works</Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="footer-link">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container clearfix">
                        <div className="copyright">
                            <p>
                                Copyrights © {new Date().getFullYear()}{" "}
                                <Link href="/" className="footer-link">
                                    P&D Engineering Solutions LLC
                                </Link>
                                , All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
