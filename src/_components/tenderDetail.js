import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { commonFunctions } from '../_uttils/commonFunction';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';

const TenderDetail = (props) => {
  const { tender } = props;

  return (
    <>
      {tender &&
        tender.length >= 0 &&
        tender.map((val, index) => (
          <Box className="tender-detail" key={index}>
            <Grid container>
              <Grid item lg={12} md={12} sm={12}>
                <Grid container>
                  <Grid item lg={8} md={8} sm={12}>
                    <div className="department-text">
                      {val.department} | {'29 Days Left'}
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12}>
                    <div className="tenderid-text"> Tender Id: {val.id}</div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={12} md={12} sm={12}>
                <Grid container spacing={3}>
                  <Grid item lg={5} md={5} sm={12}>
                    <div className="category-address-text">
                      <div className="category-text">
                        {val.category} {val.quantity} for {val.department}{' '}
                      </div>
                      <div className="address-text">
                        <LocationOnIcon />
                        {val.city}, {val.state}, {val.country}
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12}>
                    <div className="date-text">
                      <p>
                        <span className="start-date">Start Date</span>{' '}
                        {commonFunctions.getDateAndTimeWithMonth(val.startDate)}
                      </p>
                      <p>
                        <span className="end-date">End Date</span>{' '}
                        {commonFunctions.getDateAndTimeWithMonth(val.endDate)}
                      </p>
                    </div>
                  </Grid>
                  <Grid item lg={3} md={3} sm={12}>
                    <div className="buttons">
                      <Button className="success-btn">View tender</Button>
                      <Button className="success-btn">Download</Button>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        ))}
    </>
  );
};
export default TenderDetail;
