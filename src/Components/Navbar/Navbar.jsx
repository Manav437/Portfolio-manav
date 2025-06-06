import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Navbar.css";
import { img } from "framer-motion/client";

const partOfDay = [
    '/morning.png',
    '/afternoon.png',
    '/evening.png',
    '/night.png'
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [time, setTime] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    // const [firstLoad, setFirstLoad] = useState(true);  // Track if it's the first render

    // Set the current time and part of the day image
    useEffect(() => {
        const now = new Date();
        setTime(now);
        const hour = now.getHours();

        const index = hour >= 5 && hour < 12 ? 0 :
            hour >= 12 && hour < 17 ? 1 :
                hour >= 17 && hour < 20 ? 2 : 3;

        setImgSrc(partOfDay[index]);
        AOS.init({ duration: 1000 });
    }, []);

    // Initialize dark mode based on localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode") === "true";
        setIsDarkMode(savedMode);
        document.body.classList.toggle("dark", savedMode);

        // Delayed toggle to remove no-transition after the first render
        // setTimeout(() => {
        //     setFirstLoad(false);
        // }, 100);  // 100ms delay for the transition
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.body.classList.toggle("dark", newMode);
        localStorage.setItem("darkMode", newMode);
    };

    return (
        <div className='navbar'>
            <div className="nav-left" style={{ display: "flex", gap: "20px" }}>
                <Link to="/" style={{ display: "flex", alignItems: "center", width: "30px" }}>
                    <img style={{ borderRadius: "5px" }}
                        src={isDarkMode ? "/favicon-white.png" : "/favicon-dark.png"}
                        className="logo-img"
                        alt='Navbar Icon'
                    // style={{ border: '1px solid #fff', borderRadius: "5px" }}
                    />
                </Link>

                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {/* <FaBars className="bars" /> */}
                    ☰
                </button>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>~/home</NavLink>
                    <NavLink to='/stack' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>./stack</NavLink>
                    <NavLink to='/project' className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>./projects</NavLink>
                </div>
            </div>

            {/* <div className="dark-mode-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode"> */}
            {/* <div className={`slider ${isDarkMode ? 'active' : ''}`}> */}
            {/* <div className={`toggle ${isDarkMode ? 'dark' : 'light'} ${firstLoad ? 'no-transition' : ''}`}></div> Add no-transition class on first load */}
            {/* </div> */}
            {/* </div> */}
            <div className="nav-right">
                <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                    <img
                        src={isDarkMode ? "/sun.png" : "/moon.png"}
                        alt={isDarkMode ? "Light mode" : "Dark mode"}
                    />
                    <span className="custom-tooltip">
                        {isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
                    </span>
                </div>

                <div className="time-div" style={{ fontSize: "14px", textUnderlineOffset: "7px" }}>
                    {time && (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            {imgSrc && (
                                <img
                                    src={imgSrc}
                                    alt="Part of Day"
                                    style={{ marginRight: "15px", borderRadius: "5px", objectFit: "contain" }}
                                />
                            )}
                            <span>
                                {time.toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    timeZone: "Asia/Kolkata",
                                })}
                                {", "}
                                {(() => {
                                    const parts = new Intl.DateTimeFormat("en-IN", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: false,
                                        timeZone: "Asia/Kolkata",
                                    }).formatToParts(time);
                                    const hour = parts.find((p) => p.type === "hour")?.value;
                                    const minute = parts.find((p) => p.type === "minute")?.value;

                                    return (
                                        <>
                                            {hour}
                                            <span className="blinking-colon">:</span>
                                            {minute}
                                        </>
                                    );
                                })()}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
