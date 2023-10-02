import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();

    return (

        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary">WooDY</h2>
            </a>
            <button type="button" className={clsx("navbar-toggler me-4", { "collapsed": collapsed })} data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse" onClick={() => setCollapsed(!collapsed)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={clsx("collapse navbar-collapse", { "show": collapsed })} id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link href="/" className={clsx("nav-item nav-link", { "active": router.pathname === "/" })}>Home</Link>
                    <Link href="/services" className={clsx("nav-item nav-link", { "active": router.pathname === "/services" })}>Services</Link>
                    <Link href="/galleries" className={clsx("nav-item nav-link", { "active": router.pathname === "/galleries" })}>Galleries</Link>
                    <Link href="/our-team" className={clsx("nav-item nav-link", { "active": router.pathname === "/our-team" })}>Our Team</Link>
                    <Link href="/contact-us" className={clsx("nav-item nav-link", { "active": router.pathname === "/contact-us" })}>Contact Us</Link>
                    {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                </div>
            </div>
        </nav >
    )
}