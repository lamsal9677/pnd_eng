import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>
            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="dropdown">
                    <Link href="/index-14">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">About Us</Link>
                </li>
                <li className="dropdown">
                    <Link href="/services">Our Work</Link>
                </li>
                <li className="dropdown">
                    <Link href="#">Pages</Link>
                    <ul>
                        <li>
                            <Link href="/career">Career</Link>
                        </li>
                        <li className="dropdown">
                            <Link href="#">Contact</Link>
                            <ul>
                                <li>
                                    <Link href="/contact-1">
                                        Contact Style 01
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-2">
                                        Contact Style 02
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-3">
                                        Contact Style 03
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact-4">
                                        Contact Style 04
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/faq">FAQ’s</Link>
                        </li>
                        <li className="dropdown">
                            <Link href="#">Pricing &amp; Plans</Link>
                            <ul>
                                <li>
                                    <Link href="/pricing-1">
                                        Pricing Style 01
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing-2">
                                        Pricing Style 02
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">Testimonial</Link>
                            <ul>
                                <li>
                                    <Link href="/testimonial-1">
                                        Testimonial Style 01
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/testimonial-2">
                                        Testimonial Style 02
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/testimonial-3">
                                        Testimonial Style 03
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/testimonial-4">
                                        Testimonial Style 04
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/404">404</Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Portfolio</Link>
                    <ul>
                        <li className="dropdown">
                            <Link href="#">Portfolio Grid</Link>
                            <ul>
                                <li>
                                    <Link href="/portfolio-1">
                                        Grid View 01
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio-2">
                                        Grid View 02
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio-3">
                                        Grid View 03
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/portfolio-4">Portfolio Masonry</Link>
                        </li>
                        <li>
                            <Link href="/portfolio-details">
                                Portfolio Details
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Blog</Link>
                    <ul>
                        <li className="dropdown">
                            <Link href="#">Blog Default</Link>
                            <ul>
                                <li>
                                    <Link href="/blog-1">Full Width</Link>
                                </li>
                                <li>
                                    <Link href="/blog-2">Left Sidebar</Link>
                                </li>
                                <li>
                                    <Link href="/blog-3">Right Sidebar</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">Blog Grdi View</Link>
                            <ul>
                                <li>
                                    <Link href="/blog-4">Left Sidebar</Link>
                                </li>
                                <li>
                                    <Link href="/blog-5">Right Sidebar</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">Blog List View</Link>
                            <ul>
                                <li>
                                    <Link href="/blog-6">Full Width</Link>
                                </li>
                                <li>
                                    <Link href="/blog-7">Left Sidebar</Link>
                                </li>
                                <li>
                                    <Link href="/blog-8">Right Sidebar</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#">Single Post</Link>
                            <ul>
                                <li>
                                    <Link href="/blog-details">
                                        With Sidebar
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-details-2">
                                        Without Sidebar
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#">Shop</Link>
                    <ul>
                        <li>
                            <Link href="/shop">Products</Link>
                        </li>
                        <li>
                            <Link href="/product-details">Product Details</Link>
                        </li>
                        <li>
                            <Link href="/shopping-cart">Shopping Cart</Link>
                        </li>
                        <li>
                            <Link href="/checkout">Checkout</Link>
                        </li>
                        <li>
                            <Link href="/account">My Account</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
}
