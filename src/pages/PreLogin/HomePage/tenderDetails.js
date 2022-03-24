import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import SaveAlt from '@mui/icons-material/SaveAlt';
import { tenderdetailsActions } from '../../../redux/_actions';
import { commonFunctions } from '../../../_uttils';
import { connect } from 'react-redux';

const TenderDetails = (props) => {
  const { tenders, type, navigate, dispatch } = props;

  const handleLink = (id, value) => {
    navigate(`tender-details/${type}/${id}`);
    dispatch(tenderdetailsActions.tenderDetails({ id: id, value: value }));
  };
  return (
    <Container maxWidth="md">
      {tenders && tenders.length > 0 ? (
        tenders.map((val, index) => (
          <Box className="tender-box" key={index}>
            <Box className="tender-heading">
              <Grid container>
                <Grid item xs={9} md={10} lg={10}>
                  <strong>Tender ID: {val.id}</strong>
                </Grid>
                <Grid item xs={3} md={2} lg={2} textAlign="right">
                  <a href="#">
                    <SaveAlt />
                  </a>
                </Grid>
              </Grid>
            </Box>
            <Box className="tender-contents">
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                  <div className="content">
                    <strong>Items: </strong>
                    <p>{val.item}</p>
                  </div>
                  <div className="content">
                    <strong>Quantity: </strong>
                    <p>{val.quantity}</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className="content">
                    <strong style={{ display: 'block' }}>Location</strong>
                    <p style={{ display: 'block' }}>{val.location}</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <div className="content date-content">
                    <strong>Start Date: </strong>
                    <p> {commonFunctions.getDateAndTime(val.startDate)}</p>
                  </div>
                  <div className="content date-content">
                    <strong>End Date: </strong>
                    <p> {commonFunctions.getDateAndTime(val.endDate)}</p>
                  </div>
                </Grid>
              </Grid>
            </Box>
            <Box className="tender-view-more-btn">
              <Button onClick={() => handleLink(val.id, val)} className="success-btn">View More</Button>
            </Box>
          </Box>
        ))
      ) : (
        <></>
      )}
    </Container>
  );
};

export default connect(null)(TenderDetails);
