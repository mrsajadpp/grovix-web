import Link from "next/link";
import '@/public/css/header.css';
import Script from "next/script";

const Header = () => {
    return (
        <>
            {/* Desktop Header */}
            <header>
                <div className="header-container header-desktop">
                    <div className="header-left">
                        <Link href="/">
                            <img src="/img/logo/grovix-lab.png" alt="Grovix lab. Logo" />
                        </Link>
                    </div>
                    <div className="header-center">
                        <nav>
                            <Link href="/about">About</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link href="/research">Research</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link href="/products">Products</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link href="/blog">Blog</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link href="/partners">Partners</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link href="/contact">Contact</Link>
                        </nav>
                    </div>
                    <div className="header-right">
                        <Link href="https://careers.grovixlab.com/">
                            Careers
                        </Link>
                    </div>
                </div>
            </header>
            {/* Mobile Header */}
            <header className="header-container header-mobile">
                <div className="header-left">
                    <Link href="/">
                        <img src="/img/logo/grovix-lab.png" alt="Grovix lab. Logo" />
                    </Link>
                </div>
                <div className="header-right">
                    <button>
                        Menu
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
