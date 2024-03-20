'use client'
import Link from "next/link"
import { useState } from "react"
import ThumbtackWidget from "../elements/Thumbtack"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-remove" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/myImages/logo-final-mobile.png" className="icon-height-mobile" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                   
                                </li>
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/about-us">About Us</Link>
                                   
                                    </li>
                                    <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/services">Our Work</Link>
                                   
                                    </li>
                                    <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/contact-us">Contact Us</Link>
                                   
                                    </li>
                            </ul>
                        </div>

                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                        <li><a href="https://www.facebook.com/profile.php?id=61556588082460"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="https://www.instagram.com/pndeng01"><i className="fab fa-instagram" /></a></li>
                        <li><a href="https://www.linkedin.com/company/pndeng/"><i className="fab fa-linkedin" /></a></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ThumbtackWidget/>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
