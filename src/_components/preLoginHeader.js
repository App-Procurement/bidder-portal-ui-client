import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router';
import Logo from '../assets/images/logo.png';

function PreLoginHeader({ props, toogleSearch, navigate }) {
  const location = useLocation();
  const [toggleDropdown, setToggleDropdown] = useState({
    searchTender: false,
    tenders: false,
  });
  const [menuToggle, setMenuToggle] = useState({
    menu: true,
  });
  const handleNavigation = (path) => {
    navigate(`/tender-search/${path}`);
  };
  const onClickMenuItem = (path) => {
    navigate(path);
  };
  return (
    <div className="header preloginheader">
      <Box>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container spacing={0} justifyContent="center" alignItems="center">
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <div className="logo" onClick={() => onClickMenuItem('/')}>
                  <img src={Logo} alt="" />
                </div>
              </Grid>
              <Grid item lg={9} md={9} sm={12} xs={12}>
                {location.pathname === '/' ? (
                  ''
                ) : (
                  <div className="header-search">
                    <FormControl className="search-form-control">
                      <Input
                        placeholder="Search here"
                        className="search-form-control-input"
                        startAdornment={
                          <InputAdornment position="start" className="search-icon">
                            <SearchIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <div
              className="header-menu-toggle"
              onClick={() => {
                setMenuToggle({
                  menu: !menuToggle.menu,
                });
              }}
            >
              <span>
                <MenuIcon />
              </span>
            </div>
            <div className={!menuToggle.menu ? 'header-menu active' : 'header-menu'}>
              <div
                className="header-menu-inner"
                onClick={() => {
                  setMenuToggle({
                    menu: !menuToggle.menu,
                  });
                }}
              >
                <div
                  className="close-menu"
                  onClick={() => {
                    setMenuToggle({
                      menu: !menuToggle.menu,
                    });
                  }}
                >
                  <CloseIcon />
                </div>
                <ul>
                  <li className={location.pathname === '/contact' ? 'active' : ''} onClick={() => onClickMenuItem('/')}>
                    <EmailIcon /> Contact
                  </li>
                  <li
                    className={location.pathname === '/' ? 'bg-link active' : 'bg-link'}
                    onClick={() => onClickMenuItem('/')}
                  >
                    <HomeIcon /> Home
                  </li>
                  <li
                    className={location.pathname === '/bidder-enrollment' ? 'bg-link active' : 'bg-link'}
                    onClick={() => onClickMenuItem('/bidder-enrollment')}
                  >
                    <ConfirmationNumberIcon /> Bidder Enrollment
                  </li>
                  <li
                    className={location.pathname === '/login' ? 'login bg-link active' : 'bg-link login'}
                    onClick={() => onClickMenuItem('/login')}
                  >
                    Login
                    <ArrowDropDownIcon />
                  </li>
                </ul>
              </div>
              <div
                className="header-menu-bg"
                onClick={() => {
                  setMenuToggle({
                    menu: !menuToggle.menu,
                  });
                }}
              ></div>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={0} className="header-disclamer">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className="text">
              <strong>Disclamer:</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem Ipsum
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={0} className="header-bottom-text">
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <ul className="header-links">
              <li
                onClick={() => {
                  setToggleDropdown({
                    searchTender: !toggleDropdown.searchTender,
                  });
                }}
              >
                Tenders Search by
                {!toggleDropdown.searchTender ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                {toggleDropdown.searchTender ? (
                  <ul>
                    <li onClick={() => handleNavigation('top-category')}>Top Categories</li>
                    <li onClick={() => handleNavigation('department')}>Department</li>
                    <li onClick={() => handleNavigation('location')}>Location</li>
                  </ul>
                ) : null}
              </li>
              <li>|</li>
              <li onClick={() => navigate(`active-corrigendum`)}>Corrigendum</li>
              <li>|</li>
              <li
                onClick={() => {
                  setToggleDropdown({ tenders: !toggleDropdown.tenders });
                }}
              >
                Tenders
                {!toggleDropdown.tenders ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                {toggleDropdown.tenders ? (
                  <ul>
                    <li>On Going Tenders</li>
                    <li onClick={() => navigate('/tender-search')}>Tenders Status</li>
                  </ul>
                ) : null}
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default PreLoginHeader;
