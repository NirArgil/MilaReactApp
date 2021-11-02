import '../../App.css';
import React from 'react'
import Cards from '../Cards';
import Footer from '../Footer';

// import vid1 from "../../video/vid1.mp4";
// import vid2 from "../../video/vid2.mp4";
// import vid3 from "../../video/vid3.mp4";
// import vid4 from "../../video/vid4.mp4";
import vid5 from "../../video/vid5.mp4";
import dance from "../../img/dance.jpg";
import ContactForm from './ContactForm';

function Home() {
    return (
        <>

            <header id="top">
                <a href="#top" className="brand">Mila.</a>
                <div className="menu-btn">
                    {/* <i class="fas fa-bars fa-lg"></i> */}
                </div>

                <div className="navigation">
                    <div className="navigation-items">
                        <a href="#top">Home</a>
                        <a href="#top">Our Services</a>
                        <a href="#about">About</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact Us</a>
                    </div>
                </div>
            </header>

            <section className="home">
                {/* <video className="video-slide active" src={vid1} autoPlay muted loop></video>
                <video className="video-slide" src={vid2} autoPlay muted loop></video>
                <video className="video-slide" src={vid3} autoPlay muted loop></video>
                <video className="video-slide" src={vid4} autoPlay muted loop></video> */}
                <video className="video-slide active" src={vid5} autoPlay muted loop></video>

                {/* <div className="content active">
                    <h1>Wonderful.<br /><span>Island</span></h1>
                    <p>111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec dapibus sit amet lorem malesuada ullamcorper. Maecenas euismod enim sit amet augue lobortis,
                        maximus elementum dolor vehicula. Nam tincidunt nibh scelerisque leo ultrices bibendum</p>
                    <a href="#top">Read More.</a>
                </div>

                <div className="content">
                    <h1>Camping.<br /><span>Enjoy</span></h1>
                    <p>22222Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec dapibus sit amet lorem malesuada ullamcorper. Maecenas euismod enim sit amet augue lobortis,
                        maximus elementum dolor vehicula. Nam tincidunt nibh scelerisque leo ultrices bibendum</p>
                    <a href="#top">Read More.</a>
                </div>

                <div className="content">
                    <h1>Adventures.<br /><span>Off Road</span></h1>
                    <p>3333Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec dapibus sit amet lorem malesuada ullamcorper. Maecenas euismod enim sit amet augue lobortis,
                        maximus elementum dolor vehicula. Nam tincidunt nibh scelerisque leo ultrices bibendum</p>
                    <a href="#top">Read More.</a>
                </div>

                <div className="content">
                    <h1>Road Trip.<br /><span>Together</span></h1>
                    <p>44444Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec dapibus sit amet lorem malesuada ullamcorper. Maecenas euismod enim sit amet augue lobortis,
                        maximus elementum dolor vehicula. Nam tincidunt nibh scelerisque leo ultrices bibendum</p>
                    <a href="#top">Read More.</a>
                </div> */}

                <div className="content active">
                    <h1>Luxury Events<br /><span>Productions</span></h1>
                    <p>We are Mila,<br /> we make luxury events for variety of customers. <br />
                        Private clients, companies and wedding events.</p>
                    <a href="#top">Read More.</a>
                </div>

                <div className="media-icons">
                    <a href="#top"><i class="fab fa-facebook"></i></a>
                    <a href="#top"><i class="fab fa-instagram"></i></a>
                    <a href="#top"><i class="fab fa-twitter"></i></a>
                </div>
                {/* <div className="slider-navigation">
                    <div className="nav-btn active"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                    <div className="nav-btn"></div>
                </div> */}
            </section>

            <section className="services" id="about">
                <img src={dance} alt="dance"></img>
                <div className="content">
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec dapibus sit amet lorem malesuada ullamcorper. Maecenas euismod enim sit amet augue lobortis,
                        maximus elementum dolor vehicula. Nam tincidunt nibh scelerisque leo ultrices bibendum.</p>
                    <a href="#top">More about us.</a>
                </div>
            </section>

            <section id="blog">
                <Cards />
            </section>


            <div className="contact" id="contact">
                <ContactForm />
            </div>


            <Footer />
        </>
    )
}

export default Home
