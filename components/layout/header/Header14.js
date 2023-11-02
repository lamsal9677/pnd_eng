import CustomMenu from "../CustomMenu"
import MobileMenu from "../MobileMenu"
export default function Header14({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-14"> */}
            <header className={`main-header header-style-14 ${scroll ? "fixed-header" : ""}`}>
                {/* header-top-13 */}
                {/* header-top-13 end */}
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><a href="/index-13"><img src="/assets/images-4/logo-2.png" alt="" /></a></figure>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images-2/icons/icon-bar-3.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <CustomMenu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="nav-right clearfix">
                                <ul className="social-links clearfix">
                                    <li><a href="/index-14"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-youtube" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><a href="/index-13"><img src="/assets/images-4/logo-2.png" alt="" /></a></figure>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images-2/icons/icon-bar-3.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <CustomMenu />
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="nav-right clearfix">
                                <ul className="social-links clearfix">
                                    <li><a href="/index-14"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-twitter" /></a></li>
                                    <li><a href="/index-14"><i className="fab fa-youtube" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />

            </header>

        </>
    )
}
