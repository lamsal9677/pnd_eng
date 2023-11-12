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
                            <h3>Get a Free Quote: supportyou@pndeng.com</h3>
                        </div>
                        <div className="info-inner">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-box">
                                        <h6>Location</h6>
                                        <p>96 Queen Park, Los Vegas, USA</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-box">
                                        <h6>Phone</h6>
                                        <p>
                                            <Link href="tel:18005554400">
                                                +1 800 555 44 00
                                            </Link>{" "}
                                            &amp;{" "}
                                            <Link href="tel:5556260234">
                                                555 626-0234
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                                    <div className="info-box">
                                        <h6>Off.Hrs</h6>
                                        <p>Mon - Sat: 9.00 to 6.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="footer-menu clearfix">
                            <li>
                                <Link href="/index-14">Home</Link>
                            </li>
                            <li>
                                <Link href="/index-14">About Us</Link>
                            </li>
                            <li>
                                <Link href="/index-14">Our Works</Link>
                            </li>
                            <li>
                                <Link href="/index-14">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container clearfix">
                        <div className="copyright">
                            <p>
                                Copyrights © {new Date().getFullYear()}{" "}
                                <Link href="/index-14">
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
