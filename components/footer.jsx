import Link from "next/link";
import '@/public/css/footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__addr">
                    <img className="footer__logo" src="/img/logo/grovix-lab.png" alt="" />

                    <h2></h2>

                    <address>
                        Kochi, Cochin Ernakulam, Dt-Kerala State Pin - 682011.<br />
                        <a className="footer__btn" href="mailto:support@grovixlab.com">Email Us</a>
                    </address>
                </div>

                <ul className="footer__nav">
                    {/* <li className="nav__item">
                        <h2 className="nav__title"><b>Links</b></h2>
                        <ul className="nav__ul">
                            <li><a href="/">Home</a></li>
                            <li><a href="/reasearche">Researche</a></li>
                            <li><a href="/products">Products</a></li>
                        </ul>
                    </li> */}

                    <li class="nav__item nav__item--extra">
                        <h2 class="nav__title"><b>Links</b></h2>
                        <ul class="nav__ul nav__ul--extra">
                            <li><a href="/">Home</a></li>
                            <li><a href="/reasearche">Researche</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/blogs">Blogs</a></li>
                            <li><a href="/partners">Partners</a></li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title"><b>Legal</b></h2>
                        <ul className="nav__ul">
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-of-use">Terms of Use</a></li>
                            <li><a href="/sitemap.xml">Sitemap</a></li>
                        </ul>
                    </li>
                </ul>&nbsp;

                <div className="legal">
                    <p>&copy; 2024 <span><b>Grovix Lab</b></span>. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
