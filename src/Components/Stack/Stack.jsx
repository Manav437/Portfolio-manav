import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Stack.css"

function Stack() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Optional: customize options
    }, []);


    return (
        <div className="stack-container" >
            <div className="stack-content" style={{ gap: "30px", display: "flex", flexDirection: "column", height: "100%" }}>
                <div className='navbar'>
                    <Link style={{ display: "flex", alignItems: "center" }} to="/"><img
                        style={{ border: '1px solid #fff', borderRadius: "5px" }}
                        src='/navbar-icon.png'
                        alt='Navbar Icon'
                    /></Link>

                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        ~/home
                    </NavLink>
                    <NavLink
                        to='/stack'
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        ./stacks
                    </NavLink>
                    <NavLink
                        to='/project'
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        ./projects
                    </NavLink>
                </div>

                <div className="stack-info" >
                    <h3 className="stack-head" style={{ borderBottom: "1px solid white" }}>tech_stack</h3>

                    <div className="stack-list" data-aos="fade-up">
                        <h4>~ frontend</h4>
                        <div style={{ marginTop: "0", display: "flex" }}>
                            <p>React</p>
                            <p>Tailwind</p>
                            <p>Next.js</p>
                        </div>
                    </div>

                    <div className="stack-list" data-aos="fade-up">
                        <h4>~ backend</h4>
                        <div style={{ marginTop: "0", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                            <p >Node.js</p>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>Mongoose</p>

                        </div>
                    </div>

                    <div className="stack-list" data-aos="fade-up">
                        <h4>~ tools</h4>
                        <div style={{ marginTop: "0", display: "flex", flexWrap: "wrap" }}>
                            <p>Git</p>
                            <p>Github</p>
                            <p>Render</p>
                            <p>Firebase</p>
                        </div>
                    </div>

                </div>

                <div data-aos="fade-up" className="resume-div" style={{
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
                        <span>View resume</span>
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