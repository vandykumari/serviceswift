import React, { useState, useContext, useEffect } from 'react';
import {
    MdClose,
    MdMenu,
    MdAdd,
    MdSettings,
    MdLogout,
    MdSupervisedUserCircle,
    MdVerifiedUser,
    MdOutlineCoffee,
    MdOutlineVpnKey,
  } from 'react-icons/md';

import { IconName } from "react-icons/fa";
import { AiOutlineGithub } from 'react-icons/ai';
import './SideBar.css';

const SideBar = () => {
    const [open, setOpen] = useState(true);
    function handleResize() {
        window.innerWidth >= 720 ? setOpen(false) : setOpen(true);
      }
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const toggleSidebar = () => {
        setOpen(!open);
      };
  return (
    <section className={`sidebar ${open ? 'open' : 'closed'}`}>
      <div className='sidebar__app-bar'>
        <div style={{display: open ? "block" : "none"}}  className={`sidebar__app-logo`}>
          <span className='w-8 h-8'>
        
          </span>
        </div>
        <h1 className={`sidebar__app-title `} style={{display: open ? "block" : "none"}} >
          ServiceSwift
        </h1>
        <div className="sidebar__btn-close" onClick={toggleSidebar} style={{marginLeft: open ? "50px" : "0px"}}>
        {open ? <MdClose className="sidebar__btn-icon" /> : <MdMenu className="sidebar__btn-icon" />}
      </div>
      </div>

      <div className='nav'>
        <span
          className='border nav__item border-neutral-600'
          >
          <div className='nav__icons'>
            <MdAdd />
          </div>
          <h1 style={{display: open ? "block" : "none"}} >New chat</h1>
        </span>
      </div>
      <div className='nav__bottom'>
        <div className='nav'>
          <a
            href=''
            rel='noreferrer'
            target='_blank'
            className='nav__item'>
            <div className='nav__icons'>
            <MdSupervisedUserCircle/>
            </div>
            <h1 style={{display: open ? "block" : "none"}}>Profile</h1>
          </a>
        </div>
        <div className='nav'>
          <a
            rel='noreferrer'
            target='_blank'
            href=''
            className='nav__item'>
            <div className='nav__icons'>
              <MdSettings />
            </div>
            <h1 style={{display: open ? "block" : "none"}}>Settings</h1>
          </a>
        </div>
        
        
        <div className='nav'>
          <a
            rel='noreferrer'
            target='_blank'
            href=''
            className='nav__item'>
            <div className='nav__icons'>
              <MdLogout />
            </div>
            <h1 style={{display: open ? "block" : "none"}}>Logout</h1>
          </a>
        </div>
      </div>
      
      </section>
      )
}

export default SideBar;