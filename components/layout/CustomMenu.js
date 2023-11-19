import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            <ul className="navigation clearfix">
                <li className="dropdown">
                    <Link href="/">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="/about-us">About Us</Link>
                </li>
                <li className="dropdown">
                    <Link href="/services">Our Work</Link>
                </li>
                <li className="dropdown">
                    <Link href="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </>
    );
}
