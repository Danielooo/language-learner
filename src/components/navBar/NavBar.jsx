import {NavLink} from "react-router-dom";

import './NavBar.css'


function NavBar() {


    return (
        <>
           <nav>
                <NavLink to='/' className='nav-links'>Home</NavLink>
                <NavLink to='/up' className='nav-links'>Upload Excercise</NavLink>
           </nav>
        </>
    )
}

export default NavBar;