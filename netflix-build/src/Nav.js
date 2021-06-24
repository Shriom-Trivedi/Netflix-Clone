import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import './Nav.css';
import logo from './netflix-logo.png';


const Nav = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory()

    //Nav transtion
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <div className='nav-contents'>
                <img
                    onClick={() => history.push("/")}
                    className='nav-logo'
                    src = {logo} 
                    alt='logo' 
                />
                <img
                    onClick={() => history.push("/profile")}
                    className='nav-avatar'
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png' 
                    alt='avatar'
                />
                <ul className='nav-li'>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Popular</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav