import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { SearchSharp } from '@mui/icons-material';

const TopCategories = () => {
  return (
    <div className="category-container">
      <Container fixed>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <div className="page-heading">
              <h1>Top Category</h1>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={4} md={8} sm={12}>
            <div className="form-group tender-search">
              <SearchSharp className="search-sharp" />
              <input type="text" className="form-control" placeholder="Search Tender Hare" />
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <Box className="white-box">
              <Box className="top-category-box">
                <div className="heading">
                  <Grid container spacing={2}>
                    <Grid item lg={9} md={9} sm={12}>
                      <div className="tender-id">Tender ID : 4569324</div>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12}>
                      <div className="tender-status">
                        Status : <span>Bid Award</span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="content">
                  <Grid container spacing={0}>
                    <Grid item lg={4} md={4} sm={12}>
                      <div className="content-text">
                        Status : <span>Office Appliance</span>
                      </div>
                      <div className="content-text">
                        Quantity Required : <span>208</span>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                      <div className="content-text location-text">
                        Location <span>Hitech- City, Hyderabad, Telangana 500032</span>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                      <div className="content-text date-text">
                        Start Date : <span>04 July, 2022 01 : 58 PM</span>
                      </div>
                      <div className="content-text date-text">
                        End Date : <span>04 July, 2022 01 : 58 PM</span>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} justifyContent="center">
                    <Grid item lg={10} md={10} sm={12}>
                      <ul className="process">
                        <li className="active">
                          <span></span>
                          <p>Technical Evaluation</p>
                        </li>
                        <li className="">
                          <span></span>
                          <p>Financial Evaluation</p>
                        </li>
                        <li className="">
                          <span></span>
                          <p>Tender Award</p>
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </div>
              </Box>
              <Box className="top-category-box">
                <div className="heading">
                  <Grid container spacing={2}>
                    <Grid item lg={9} md={9} sm={12}>
                      <div className="tender-id">Tender ID : 4569324</div>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12}>
                      <div className="tender-status">
                        Status : <span>Bid Award</span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="content">
                  <Grid container spacing={0}>
                    <Grid item lg={4} md={4} sm={12}>
                      <div className="content-text">
                        Status : <span>Office Appliance</span>
                      </div>
                      <div className="content-text">
                        Quantity Required : <span>208</span>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                      <div className="content-text location-text">
                        Location <span>Hitech- City, Hyderabad, Telangana 500032</span>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                      <div className="content-text date-text">
                        Start Date : <span>04 July, 2022 01 : 58 PM</span>
                      </div>
                      <div className="content-text date-text">
                        End Date : <span>04 July, 2022 01 : 58 PM</span>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} justifyContent="center">
                    <Grid item lg={10} md={10} sm={12}>
                      <ul className="process">
                        <li className="active">
                          <span></span>
                          <p>Technical Evaluation</p>
                        </li>
                        <li className="">
                          <span></span>
                          <p>Financial Evaluation</p>
                        </li>
                        <li className="">
                          <span></span>
                          <p>Tender Award</p>
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </div>
              </Box>
              <Box className="top-category-box">
                <div className="heading">
                  <Grid container spacing={2}>
                    <Grid item lg={9} md={9} sm={12}>
                      <div className="tender-id">Tender ID : 4569324</div>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12}>
                      <div className="tender-status">
                        Status : <span>Bid Award</span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="content">
                  <Grid container spacing={0}>
                    <Grid item lg={4} md={4} sm={12}>
                      <div className="content-text">
                        Status : <span>Office Appliance</span>
                      </div>
                      <div className="content-text">
                        Quantity Required : <span>208</span>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                      <div className="content-text location-text">
                        Location <span>Hitech- City, Hyderabad, Telangana 500032</span>
                      </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12}>
                      <div className="content-text date-text">
                        Start Date : <span>04 July, 2022 01 : 58 PM</span>
                      </div>
                      <div className="content-text date-text">
                        End Date : <span>04 July, 2022 01 : 58 PM</span>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container spacing={0} justifyContent="center">
                    <Grid item lg={10} md={10} sm={12}>
                      <ul className="process">
                        <li className="active">
                          <span></span>
                          <p>Technical Evaluation</p>
                        </li>
                        <li className="">
                          <span></span>
                          <p>Financial Evaluation</p>
                        </li>
                        <li className="">
                          <span></span>
                          <p>Tender Award</p>
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TopCategories;
