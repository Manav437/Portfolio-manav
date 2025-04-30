import { NavLink } from "react-router-dom";
import "./Home.css"

function Home() {
    return (
        <div className='app-container'>
            <div className='app-content' style={{ gap: "30px", display: "flex", flexDirection: "column", height: "100%" }}>
                <div className='navbar'>
                    <img
                        style={{ border: '1px solid #fff', borderRadius: "5px" }}
                        src='/navbar-icon.png'
                        alt='Navbar Icon'
                    />
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

                <div className='info'>
                    <h3 style={{ borderBottom: "1px solid white" }}>~ info</h3>

                    <div className='info-content'>
                        <img src="/pfp-img.jpg" alt="" />

                        <div className='info-text'>
                            <p>Hi, I am <span>Manav</span>. <a className="leet-code" target="_blank" href="https://en.wikipedia.org/wiki/Human">{'${wk}'}</a></p>
                            <p>Full Stack Developer</p>
                            <p>DSA && Leetcode <a className='leet-code' target="_blank" href="https://leetcode.com/u/Manav437/">{'${lt}'}</a></p>
                        </div>
                    </div>
                </div>

                <div className='about'>
                    <h3 style={{ borderBottom: "1px solid white" }}>~ about</h3>

                    <ul className='custom' style={{ lineHeight: "1.5rem" }}>
                        <li>pre-final year student</li>
                        <li>open for frontend ||  backend opportunites</li>
                        {/* <li></li> */}
                    </ul>
                </div>

                {/* <div className='terminal-commands'>
					<h3 style={{ borderBottom: "1px solid white" }}>~ terminal cmds</h3>
					<ul>
						<li><code>whoami</code> → manav@terminal</li>
						<li><code>ls skills</code> → React, Node, MongoDB, etc.</li>
						<li><code>cd projects</code> → list opens below</li>
					</ul>
				</div> */}

                <div className='socials'>
                    <h3 style={{ borderBottom: "1px solid white" }}>~ social_links</h3>

                    <div className='socials-content'>
                        <a target='_blank' href="https://github.com/Manav437">github</a>
                        <a target='_blank' href="https://x.com/Manav437">twitter</a>
                        <a target='_blank' href="https://www.linkedin.com/in/manav-gusain/">linkedin</a>
                    </div>
                </div>

                <p style={{ color: "black", background: "#A0C878", padding: "5px 2px", margin: "0 auto", display: "inline-block", width: "25%", textAlign: "center" }}>@terminal by <span className='footer-span' style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>manav</span></p>
            </div>
        </div>
    )
}


export default Home;