import React, {useEffect} from 'react'
import avatar from '../img/Avatar.jpeg';
import {NavLink} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
function Navbar() {
     useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile" data-aos="zoom-in-up">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <a href="/" exact activeClassName="active">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" exact activeClassName="active">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/portfolios" exact activeClassName="active">
                            Portfolios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/motionG" exact activeClassName="active">
                            Motion Graphics
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/blogs" exact activeClassName="active">
                            Blogs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" exact activeClassName="active">
                            Contact
                        </a>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        &copy; Copyright 2021 Developer By <a href='#'>AmanCoder</a>
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
