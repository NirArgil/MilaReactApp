import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our events newsletter for updates.
                </p>
                <p className="footer-subscription-text">
                    you can unsubscribe the newsletter anytime.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">SUBSCRIBE</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">About</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Our offices</Link>
                    </div>
                </div>

                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Experience</h2>
                        <Link to="/">Events Videos</Link>
                        <Link to="/">Events Gallery</Link>
                        <Link to="/">Events Productions</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Instagram</Link>
                        <Link to="/">YouTube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/services" className="social-logo">
                           MILA.
                        </Link>
                    </div>
                    <small className="website-rights">NirArgil2021</small>
                    <div className="social-icons">
                        <Link
                            to="/"
                            className="social-icon-link facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </Link>

                        <Link
                            to="/"
                            className="social-icon-link instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </Link>

                        <Link
                            to="/"
                            className="social-icon-link youtube"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Youtube">
                            <i class="fab fa-youtube"></i>
                        </Link>

                        <Link
                            to="/"
                            className="social-icon-link twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter">
                            <i class="fab fa-twitter"></i>
                        </Link>

                        <Link
                            to="/"
                            className="social-icon-link linkedin"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin">
                            <i class="fab fa-linkedin"></i>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
