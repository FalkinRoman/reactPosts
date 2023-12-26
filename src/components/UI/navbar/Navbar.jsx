import React from 'react';
import { NavLink } from 'react-router-dom';

//Подсвечивает активную ссылку
const setctive = ({isActive}) =>  isActive ? "active_link" : " ";

const Navbar = () => {
    return (
        <header>
            <NavLink to='/reactPosts' className={setctive}>Главная</NavLink>
            <NavLink to='/contact' className={setctive}>Контакты</NavLink>
        </header>
    );
};

export default Navbar;