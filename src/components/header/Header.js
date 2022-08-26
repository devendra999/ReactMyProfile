import React from 'react'
import '../../App.scss'
import './header.scss'
import SocialIcons from '../socialIcons/SocialIcons';
import { NavLink } from 'react-router-dom';

const HeaderMenu = [
    {
        id: 1,
        name: "Home",
        url : "",
    },
    {
        id: 2,
        name: "About",
        url : "about"
    },
    {
        id: 3,
        name: "Service",
        url : "service",
        dropdown : [
            "Dropdown One",
            "Dropdown Two",
            "Dropdown Three",
            "Dropdown Four",
            "Dropdown Five"
        ]
    },
    {
        id: 4,
        name: "Prjoect",
        url : "project"
    },
    {
        id: 5,
        name: "News",
        url : "news"
    },
    {
        id: 6,
        name: "React Demo",
        url : "react-demo"
    },
    {
        id: 7,
        name: "Contact",
        url : "contact"
    }
];





const Header = () => {
  return (
    <>
        <header className=''>
            <div className="container">
                <div className="row justify-content-between ">
                    <div className="header-left d-flex align-items-center justify-content-start w-auto">
                        <div className="logo">
                            <NavLink to="/">
                                <img src="images/logo.png" alt="" />
                            </NavLink>
                        </div>
                        <div className="menu">
                            <ul className="mainmenu">
                                {HeaderMenu.map((e, i) => {
                                    const {id, url, name} = e;
                                    return (
                                        <li key={id} className="">
                                            <NavLink to={url}>{name}</NavLink>
                                            
                                                {/* {console.log(HeaderMenu[i].dropdown)} */}
                                                {/* <ul>
                                                    {HeaderMenu[2].dropdown.map((item) => {
                                                        return <li>{item}</li>
                                                    })}
                                                </ul> */}
                                            
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="header-right d-flex align-items-center justify-content-end w-auto">
                        <SocialIcons />
                        <div className="btn-wrapper w-auto">
                            <a href="#">buy now</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header