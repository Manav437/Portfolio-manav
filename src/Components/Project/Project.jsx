import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Project.css"

function Project() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Optional: customize options
    }, []);

    return (
        <div className="project-container">
            <div className="project-content" style={{ gap: "30px", display: "flex", flexDirection: "column", height: "100%" }}>
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

                <div className="project-info" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <h3 style={{ padding: "7px 5px", borderBottom: "1px solid white", paddingLeft: "10px" }}>projects</h3>

                    <div className="project-card" data-aos="fade-right" data-aos-offset="100">
                        <p className="card-head">Chatterino <a target="_blank" href="https://chatterino.onrender.com/"><img src="/link-icon.png" alt="" /></a></p>
                        <p className="project-text">A social media app featuring user signup/login, personalized profiles
                            and language preferences. Users can post updates,
                            join chatrooms based on the languages they know or are learning, and connect
                            with like-minded learners.</p>
                        <span>React</span><span>Firebase</span>
                    </div>

                    <div className="project-card" data-aos="fade-left" data-aos-offset="100">
                        <p className="card-head">AI Chatbot<a target="_blank" href="https://ai-chatbot-hff1.onrender.com/"><img src="/link-icon.png" alt="" /></a></p>
                        <p className="project-text">An AI chatbot offering real-time conversations with a clean, modern UI.
                            Features include seamless API integration, efficient state management, and reliable
                            error handling for a smooth user experience.</p>
                        <span>React</span><span>Gemini API</span>
                    </div>

                    <div className="project-card" data-aos="fade-right" data-aos-offset="100">
                        <p className="card-head">Taskly <a target="_blank" href="https://taskmanager-frontend-2qcg.onrender.com/"><img src="/link-icon.png" alt="" /></a></p>
                        <p className="project-text">This is a full-stack MERN Task Management Application. The app features
                            a secure authentication system, a RESTful API, let users manage their tasks efficiently and profile
                            image uploads for a personalised experience. Use of JWT, brcyptjs, multer in backend.</p>
                        <span>MongoDB</span><span>Express</span><span>React</span><span>Nodejs</span>
                    </div>

                    <div className="project-card" data-aos="fade-left" data-aos-offset="100">
                        <p className="card-head">Chat App<a target="_blank" href="https://chat-app-0l5x.onrender.com/"><img src="/link-icon.png" alt="" /></a></p>
                        <p className="project-text">A real-time chat app featuring multiple chat rooms,
                            live user lists, location sharing, and a clean frontend UI. Messages aren’t
                            stored, ensuring temporary and private chats.</p>
                        <span>Nodejs</span><span>Express</span><span>Socket.io</span>
                    </div>

                    <div className="project-card" style={{ marginBottom: "20px" }} data-aos="fade-right" data-aos-offset="100">
                        <p className="card-head">Weather App <a target="_blank" href="https://weather-website-5xf1.onrender.com/"><img src="/link-icon.png" alt="" /></a></p>
                        <p className="project-text">A simple weather app. It fetches real-time weather data via the WeatherStack
                            API based on user input, featuring a clean, responsive UI and efficient
                            backend handling.</p>
                        <span>Nodejs</span><span>Express</span><span>APIs</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project;