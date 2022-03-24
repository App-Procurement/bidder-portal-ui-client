import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';

function HeaderBar(props) {
  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpenClose = () => {
    let open = !isOpen;
    setIsOpen(open);
  };

  const alertData = () => {
    localStorage.removeItem("userLoginData");
    navigate("/login")
  }

  return (
    <div className="header">
      <Box>
        <Grid container spacing={0}>
          <Grid item lg={5} md={12} sm={12} xs={12}>
            <div className={isOpen ? 'header-search open' : 'header-search'}>
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
          </Grid>
          <Grid item lg={7} md={12} sm={12} xs={12}>
            <div className="search-button">
              <IconButton
                className="search-toggale"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpenClose}
                edge="start"
              >
                <SearchIcon />
              </IconButton>
            </div>
            <div className="header-menu">
              <ul>
                <li>
                  <Link href="/">
                    <HomeIcon /> Home
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <EmailIcon /> Contact
                  </Link>
                </li>
                <li onClick={alertData} className="logout">
                  <Link>{window.localStorage['userLoginData'] ? "Logout" : "Login"}</Link>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={1} className="header-disclamer">
          <div className="text">
            <strong>Disclamer :</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </div>
        </Grid>
        <Grid container spacing={1} className="header-bottom-text">
          <div className="text">Active Tenders | Tenders by closing date | Corrigendum | Results of Tenders</div>
        </Grid>
      </Box>
    </div>
  );
}

export default HeaderBar;
