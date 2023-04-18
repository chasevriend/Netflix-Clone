import React, {useEffect, useState} from 'react';
import "./Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <div className={`navbar ${show && 'navbar__black'}`}>
            <div className='navbar__content'>
                <img
                className='navbar__logo' 
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
                alt='' 
                />
                <img 
                className='navbar__avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt=''
                />
            </div>
        </div>
    )
}

export default Navbar;