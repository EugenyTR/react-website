import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/index.js';
import './index.css';

function Navbar() {
    const [click, setClick] = React.useState(false);
    const [button, setButton] = React.useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    React.useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                 <div className="navbar-container">
                     <Link to='/' className='navbar-logo' onClick={closeMobileMenu}><i className="fab fa-artstation"></i>&nbsp;ETLab</Link>
                     <div className="menu-icon" onClick={handleClick}>
                         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                     </div>
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                         <li className='nav-item'>
                             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                 Главная
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                 Услуги
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                 Товары
                             </Link>
                         </li>
                         <li className='nav-item'>
                             <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                 Зарегистрироваться
                             </Link>
                         </li>
                     </ul>
                     {button && <Button buttonStyle='btn--outline'>Зарегистрироваться</Button>}
                 </div>
            </nav>
        </>
    );
}

export default Navbar;
