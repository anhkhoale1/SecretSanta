import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Avatar } from '@windmill/react-ui';
import {
  IoMenu,
  IoNotificationsSharp,
  IoLogOutOutline,
  IoGridOutline,
} from 'react-icons/io5';

import { AdminContext } from '../../context/AdminContext';
import { SidebarContext } from '../../context/SidebarContext';

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const { dispatch } = useContext(AdminContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const pRef = useRef();
  const nRef = useRef();

  const handleLogOut = () => {
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('adminInfo');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!pRef?.current?.contains(e.target)) {
        setProfileOpen(false);
      }
      if (!nRef?.current?.contains(e.target)) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, [pRef, nRef]);

  const handleNotificationOpen = () => {
    setNotificationOpen(!notificationOpen);
    setProfileOpen(false);
  };
  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
    setNotificationOpen(false);
  };

  return (
    <>
      <header className="z-40 py-4 bg-white shadow-sm">
        <div className="container flex items-center justify-between h-full px-6 mx-auto text-green-500">
          {/* <!-- Mobile hamburger --> */}
          <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <IoMenu className="w-6 h-6" aria-hidden="true" />
          </button>
          <span></span>

          <ul className="flex justify-end items-center flex-shrink-0 space-x-6">
            {/* <!-- Notifications menu --> */}
            <li className="relative inline-block text-left" ref={nRef}>
              <button
                className="relative align-middle rounded-md focus:outline-none"
                onClick={handleNotificationOpen}
              >
                <IoNotificationsSharp className="w-5 h-5" aria-hidden="true" />
                <span className="absolute font-lsOne z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  2
                </span>
              </button>
            </li>
            {/* <!-- Profile menu --> */}
            <li className="relative inline-block text-left" ref={pRef}>
              <button className="rounded-full bg-green-500 text-white h-8 w-8 font-medium mx-auto focus:outline-none" onClick={handleProfileOpen}>
                <Avatar className="align-middle" src="https://i.ibb.co/WpM5yZZ/9.png" aria-hidden="true"/>
              </button>
              {profileOpen && (
                <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500">
                    <Link to="/dashboard">
                      <span className="flex items-center text-sm">
                        <IoGridOutline className="w-4 h-4 mr-3" aria-hidden="true"/>
                        <span className="font-ubuntu">Dashboard</span>
                      </span>
                    </Link>
                  </li>
                  <li
                    onClick={handleLogOut}
                    className="cursor-pointer justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500"
                  >
                    <span className="flex items-center text-sm">
                      <IoLogOutOutline className="w-4 h-4 mr-3" aria-hidden="true"/>
                      <span className="font-ubuntu">Log out</span>
                    </span>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
