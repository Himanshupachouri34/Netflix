import React, { useEffect, useState } from 'react'
import '../Style/Nav.css'
import { useNavigate } from 'react-router-dom';




function Nav() {
    const [show, SetShow] = useState(false);
    const navigate = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            SetShow(true);
        }else{
            SetShow(false)
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll' , transitionNavBar)
    },[])


    return (
        <div className={`nav ${show && `nav_black`}`}>
            <div className="nav_content">
                <img 
                onClick={() => navigate('/')}
                className='nav_logo' 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                <img 
                onClick={() => navigate('/profile')} 
                className='nav_avatar' 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    )
}

export default Nav