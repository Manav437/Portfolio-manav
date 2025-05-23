import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Home.css";


function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className='app-container'>
            <div className='app-content' style={{ gap: "30px", display: "flex", flexDirection: "column", height: "100%" }}>
                <Navbar />

                <div className='info' data-aos="zoom-out">
                    <h3 style={{ borderBottom: "1px solid white" }}>~ info</h3>
                    <div className='info-content'>
                        <div className="img-container" style={{ position: "relative", display: "flex", flexDirection: "column" }} data-aos="fade-right">
                            <img src="/portfolio-img.jpeg" alt="" />
                            <p style={{ width: "30px", paddingLeft: "10px", position: "absolute", textAlign: "center", fontSize: "8px" }}>hover</p>
                        </div>
                        <div className='info-text'>
                            <p style={{ fontSize: ".9rem", marginTop: "0", lineHeight: "1.5" }}>
                                Hi, I'm <span>Manav</span>, a full-stack developer with a passion for
                                building user-friendly <span>web applications</span>. I specialize in full-stack development, with
                                expertise in technologies such as React.js, Node.js, and MongoDB.
                                I'm constantly learning and adapting to the latest industry trends
                                to ensure that my work is innovative and impactful.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='about' data-aos="zoom-out">
                    <h3 style={{ borderBottom: "1px solid white" }}>~ about</h3>
                    <ul className='custom' style={{ lineHeight: "1.5rem" }}>
                        <li style={{ fontSize: ".9rem" }}>
                            I am a pre-final year student seeking opportunities to grow as a frontend or backend developer. I am particularly interested in working with modern web technologies and contributing to building real-world applications. Whether it’s crafting dynamic user interfaces or optimizing server-side performance, I’m excited to bring my skills to new challenges.
                        </li>
                    </ul>
                </div>

                <div className='socials' data-aos="zoom-out">
                    <h3 style={{ borderBottom: "1px solid white" }}>~ social_links</h3>
                    <div className='socials-content'>
                        <a target='_blank' href="https://github.com/Manav437"><img className="github" src="/github.svg" alt="" />Github <img className="arrow" src="/arrow.png" alt="" /></a>
                        <a target='_blank' href="https://x.com/Manav437"><img className="github" src="/twitter.svg" alt="" />Twitter<img className="arrow" src="/arrow.png" alt="" /></a>
                        <a target='_blank' href="https://www.linkedin.com/in/manav-gusain/"><img className="github" src="/linkedin-img.png" alt="" />LinkedIn<img className="arrow" src="/arrow.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
