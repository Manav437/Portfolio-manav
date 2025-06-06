import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Stack.css"


function Stack() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // Optional: customize options
    }, []);

    return (
        <div className="stack-container" >
            <div className="stack-content" style={{ display: "flex", flexDirection: "column" }}>
                <Navbar />
                <h3 className="stack-head" style={{ marginTop: "48px", borderBottom: "1px solid white" }}>tech_stack</h3>

                <div className="stack-info" >

                    <div className="stack-list">
                        <h4>~ frontend</h4>
                        <div style={{ marginTop: "0", display: "flex" }}>
                            <p>React</p>
                            <p>Tailwind</p>
                            <p className="nextjs">Next.js</p>
                        </div>
                    </div>

                    <div className="stack-list">
                        <h4>~ backend</h4>
                        <div style={{ marginTop: "0", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                            <p >Node.js</p>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>Mongoose</p>

                        </div>
                    </div>

                    <div className="stack-list">
                        <h4>~ tools</h4>
                        <div style={{ marginTop: "0", display: "flex", flexWrap: "wrap", paddingBottom: "20px" }}>
                            <p>Git</p>
                            <p>Github</p>
                            <p>Render</p>
                            <p>Firebase</p>
                        </div>
                    </div>

                </div>

                <div className="resume-div" style={{
                    margin: "0px auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    borderRadius: "8px",
                    width: "fit-content",
                    cursor: "pointer",
                    textDecoration: "none",
                    border: "1px solid white"
                }}>
                    <a target="_blank" href="https://drive.google.com/file/d/1PuQBKmPNS8uwYqeY5d3UmHzUy2a6iSmY/view?usp=drive_link" style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "500",
                        fontSize: "14px"
                    }}>
                        <span>View Resume</span>
                        <img
                            src="/upload-img.png"
                            alt="Upload Icon"
                            style={{ height: "16px", marginLeft: "6px" }}
                        />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Stack;