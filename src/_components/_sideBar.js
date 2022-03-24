import React, { useState, useEffect } from "react";
import sidebarData from "./sideBarData";
import Link from "@mui/material/Link";
import Logo from "../assets/images/logo.png";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0);

  const createRoutes = () => {
    const retData = [];
    sidebarData.map((value, index) => {
      retData.push(
        <li
          onClick={(e) => setActiveSideBar(index, value.to)}
          key={index}
          className={activeMenu === index ? "active" : ""}>
          <Link>
            <i className={`${value.icon}`}></i>
            <span>{value.name}</span>
          </Link>
        </li>
      );
    });
    return retData;
  };

  const setActiveSideBar = (index, url) => {
    setActiveMenu(index);
    navigate(url);
  };

  const handleDrawerOpenClose = () => {
    let open = !isOpen;
    setIsOpen(open);
  };

  return (
    <>
      <div className='mobile-toggale'>
        <IconButton
          className='menu-toggale'
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpenClose}
          edge='start'>
          <MenuIcon />
        </IconButton>
      </div>
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <div className='logo-container'>
          <div className='logo'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='toggale'>
            <IconButton
              className='menu-toggale'
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpenClose}
              edge='start'>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
        <div className='side-menu'>
          <Scrollbars>
            <ul>{createRoutes()}</ul>
          </Scrollbars>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
