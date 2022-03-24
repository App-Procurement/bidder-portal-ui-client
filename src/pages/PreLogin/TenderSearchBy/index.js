import React, { useState, useEffect } from 'react';
import { Box, Grid, Container } from '@mui/material';
import { AddReaction, SearchSharp } from '@mui/icons-material';
import { connect } from 'react-redux';
import { useLocation } from 'react-router';
import { searchTenderTypes } from '../../../redux/_actions';
import { status } from '../../../redux/_constants/commonDS';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

const TenderSearchBy = (props) => {
  const { tender_type_status, tender_type_data, dispatch, navigate } = props;
  let [tenderType, setTenderType] = useState([]);
  let [duplicateTender, setDuplicateTender] = useState([]);
  let route = useLocation().pathname.split('/');

  useEffect(() => {
    dispatch(searchTenderTypes.searchTenderType({ type: route[route.length - 1] }));
  }, []);
  useEffect(() => {
    if (tender_type_status === status.SUCCESS && tender_type_data && tender_type_data.length > 0) {
      setDuplicateTender([...tender_type_data]);
      setTenderType([...tender_type_data]);
    }
  }, [tender_type_status, tender_type_data]);

  const handleSearch = (e) => {
    let type = '';
    let value = e.target.value.toLowerCase();
    let values = [];
    if (route[route.length - 1] === 'location') {
      type = 'state';
    } else if (route[route.length - 1] === 'top-category') {
      type = 'category';
    } else {
      type = route[route.length - 1];
    }
    if (value.length > 0) {
      tenderType.filter((val) => {
        if (val[type].toLowerCase().search(value) != -1) {
          values.push(val);
        }
        return values;
      });
    } else {
      values.push(...tenderType);
    }
    setDuplicateTender([...values]);
  };

  const handleList = (tenderData) => {
    let type = '';
    let retData = [];
    let tenderList = {};
    if (route[route.length - 1] === 'location') {
      type = 'state';
    } else if (route[route.length - 1] === 'top-category') {
      type = 'category';
    } else {
      type = route[route.length - 1];
    }
    for (let val of tenderData) {
      tenderList[val[type]] = tenderList[val[type]] ? ++tenderList[val[type]] : 1;
    }
    retData.push(
      Object.keys(tenderList).map((val, index) => (
        <Grid item lg={6} md={6} sm={12} key={index}>
          <Box className="top-category-box" onClick={() => navigate(`/tender-search`)}>
            <p>{val} {`(${tenderList[val]} Tenders)`}</p>
          </Box>
        </Grid>
      ))
    );
    return retData;
  };

  return (
    <Box className="top-category-container">
      <Container fixed>
        <Grid container spacing={0}>
          <Grid item lg={12} md={12} sm={12}>
            <div className="page-heading">
              <h1>
                {route[route.length - 1] !== 'top-category'
                  ? route[route.length - 1][0].toLocaleUpperCase() + route[route.length - 1].slice(1)
                  : 'Top Category'}
              </h1>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <Box className="white-box">
              <Grid container>
                <Grid item lg={4} md={6} sm={12}>
                  <div className="form-group category-search">
                    <SearchSharp className="search-sharp" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Category"
                      onChange={(e) => {
                        handleSearch(e, duplicateTender);
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                  <Grid container spacing={3}>
                    {duplicateTender && duplicateTender.length > 0 && handleList(duplicateTender)}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
const mapStateToProps = (state) => {
  const { tender_type_status, tender_type_data } = state.vendorPortal;
  return { tender_type_data, tender_type_status };
};
export default connect(mapStateToProps)(TenderSearchBy);
