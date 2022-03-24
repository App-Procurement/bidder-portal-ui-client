import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import { SearchSharp } from '@mui/icons-material';

const TenderStatusList = () => {
  let data = [
    {
      id: 123423,
      department: 'office Appliance',
      quantityRequired: 208,
      startDate: '04 july,2022 01:58pm',
      endDate: '04 july,2022 01:58pm',
      city: 'Hitech-City Hyderabad',
      state: 'Telangana',
      pinCode: '500032',
      status: 'Bid Award',
    },
    {
      id: 123423,
      department: 'office Appliance',
      quantityRequired: 208,
      startDate: '04 july,2022 01:58pm',
      endDate: '04 july,2022 01:58pm',
      city: 'Hitech-City Hyderabad',
      state: 'Telangana',
      pinCode: '500032',
      status: 'Bid Award',
    },
    {
      id: 123423,
      department: 'office Appliance',
      quantityRequired: 208,
      startDate: '04 july,2022 01:58pm',
      endDate: '04 july,2022 01:58pm',
      city: 'Hitech-City Hyderabad',
      state: 'Telangana',
      pinCode: '500032',
      status: 'Bid Award',
    },
    {
      id: 123423,
      department: 'office Appliance',
      quantityRequired: 208,
      startDate: '04 july,2022 01:58pm',
      endDate: '04 july,2022 01:58pm',
      city: 'Hitech-City Hyderabad',
      state: 'Telangana',
      pinCode: '500032',
      status: 'Bid Award',
    },
  ];
  return (
    <div className="category-container">
      <Container fixed>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <div className="page-heading">
              <h1>Tender Status List</h1>
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
              {data.map((item, index) => {
                return (
                  <Box className="top-category-box">
                    <div className="heading">
                      <Grid container spacing={2}>
                        <Grid item lg={9} md={9} sm={12}>
                          <div className="tender-id">Tender ID : {item.id}</div>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12}>
                          <div className="tender-status">
                            Status : <span>{item.status}</span>
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
                          <div className="content-text">Quantity Required : {item.quantityRequired}</div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12}>
                          <div className="content-text location-text">
                            Location <span>{item.city}</span>
                          </div>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12}>
                          <div className="content-text date-text">
                            Start Date : <span>{item.startDate}</span>
                          </div>
                          <div className="content-text date-text">
                            End Date : <span>{item.endDate}</span>
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
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TenderStatusList;
