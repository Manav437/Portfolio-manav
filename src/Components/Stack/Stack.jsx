import { NavLink } from "react-router-dom";
import "./Stack.css"

function Stack() {
    return (
        <div className="stack-container">
            <div className="stack-content" style={{ gap: "30px", display: "flex", flexDirection: "column", height: "100%" }}>
                <div className='navbar'>
                    <img style={{ border: "1px solid #fff", borderRadius: "8px" }} src="/navbar-icon.png" alt="" />
                    <NavLink className="nav-link" to="/">~/home</NavLink>
                    <NavLink className="nav-link" to="/stack">./stacks</NavLink>
                    <NavLink className="nav-link" to="/project">./projects</NavLink>
                </div>

                <div className="stack-info">
                    <h3 className="stack-head" style={{ borderBottom: "1px solid white" }}>tech_stack</h3>

                    <div>
                        <h4>~ frontend</h4>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>React</p>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>Tailwind</p>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>Next.js</p>
                        </div>
                    </div>

                    <div>
                        <h4>~ backend</h4>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }}>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>Node.js</p>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>Express</p>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>MongoDB</p>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>Mongoose</p>

                        </div>
                    </div>

                    <div>
                        <h4>~ tools</h4>
                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>Git</p>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>Github</p>
                            <p style={{ background: "white", color: "black", padding: "5px", width: "30%", border: "1px solid white", borderRadius: "5px" }}>Render</p>
                        </div>
                    </div>

                </div>

                <div style={{
                    margin: "50px auto 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: "#1f1f1f",
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
                        <span>CV</span>
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