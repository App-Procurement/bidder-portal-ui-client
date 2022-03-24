import React, { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/SearchSharp';
import TenderSearch from'./tenderSearch'
import TenderDetails from './tenderDetails';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { dashboardActions, tenderdetailsActions } from '../../../redux/_actions';
import { connect } from 'react-redux';
import { status } from '../../../redux/_constants/commonDS';
import mainBannerBg from '../../../assets/images/main-banner-bg.jpg';

const HomePage = (props) => {
  const {
    navigate,
    corrigendum_list_status,
    corrigendum_list_data,
    tenders_list_status,
    tenders_list_data,
    get_pre_login_dashboard_status,
    get_pre_login_dashboard_data,
    dispatch,
  } = props;
  const [tenders, setTenders] = useState([]);
  const [corrigendums, setCorrigendum] = useState([]);
  const [getPreLoginDashboardData, setGetPreLoginDashboardData] = useState([]);
  useEffect(() => {
    dispatch(tenderdetailsActions.corrigendumTendersList());
    dispatch(tenderdetailsActions.tendersList());
    dispatch(dashboardActions.getPreLoginDashboardData());
  }, []);

  useEffect(() => {
    if (
      tenders_list_status &&
      corrigendum_list_status &&
      corrigendum_list_status === status.SUCCESS &&
      tenders_list_status === status.SUCCESS &&
      get_pre_login_dashboard_status === status.SUCCESS
    ) {
      if (
        corrigendum_list_data.length > 0 &&
        tenders_list_data.length > 0 &&
        Object.keys(get_pre_login_dashboard_data).length > 0
      ) {
        setCorrigendum([...corrigendum_list_data]);
        setTenders([...tenders_list_data]);
        setGetPreLoginDashboardData(get_pre_login_dashboard_data);
      }
    }
  }, [
    corrigendum_list_status,
    corrigendum_list_data,
    tenders_list_status,
    tenders_list_data,
    get_pre_login_dashboard_status,
    get_pre_login_dashboard_data,
  ]);

  return (
    <Box className="pre-home-container">
      <div className="home-banner">
        <div className="main-banner-bg">
          <picture>
            <img src={mainBannerBg} alt="" />
          </picture>
        </div>
        <div className="main-banner-content">
          <Container fixed>
            <Grid container spacing={0}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <h1>Welcome to E-Procurment system</h1>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Grid container spacing={0}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Input
                      id="input-with-icon-adornment"
                      className="search-here-box"
                      placeholder="search here"
                      startAdornment={
                        <InputAdornment position="start">
                          <SearchIcon navigate={navigate} />
                        </InputAdornment>
                      }
                    />
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Button
                      variant="contained"
                      value="Advanced Search"
                      onClick={() => navigate(`/search`)}
                      className="search-btn"
                    >
                      Advanced Search
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <div className="progress-counter-content">
        <Container fixed>
          <Grid container>
            <Grid item xs={12} md={4} lg={4}>
              <div className="content">
                <strong>{getPreLoginDashboardData && getPreLoginDashboardData.liveTender}</strong>
                <p>Live Tender</p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className="content">
                <strong>{getPreLoginDashboardData && getPreLoginDashboardData.freshTender}</strong>
                <p>Fresh Tender</p>
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className="content last">
                <strong>{getPreLoginDashboardData && getPreLoginDashboardData.archiveTender}</strong>
                <p>Archive Tender</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="tender-search-container">
        <Container fixed>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <h2>Tender Search By</h2>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <TenderSearch navigate={navigate}/>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="progress-counter-content">
        <Container fixed>
          <Grid container>
            <Grid item xs={12} md={6} lg={4}>
              <div className="content">
                <strong>{getPreLoginDashboardData && getPreLoginDashboardData.tenderSubmited}+</strong>
                <p>Tender Submitted</p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="content">
                <strong>{getPreLoginDashboardData && getPreLoginDashboardData.tenderSubmited}+</strong>
                <p>Tender Submitted</p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="content last">
                <strong>${getPreLoginDashboardData && getPreLoginDashboardData.worthTenderReleased} Million+</strong>
                <p>Worth Tender Released</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="tenders-container">
        <Container fixed>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <h2>Latest Tenders</h2>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <TenderDetails tenders={tenders} type="tenders" navigate={navigate} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="tenders-container">
        <Container fixed>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <h2>Corrigendums Tenders</h2>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <TenderDetails tenders={corrigendums} type="corrigendums" navigate={navigate} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

const mapStateToProps = (state) => {
  const {
    corrigendum_list_status,
    corrigendum_list_data,
    tenders_list_status,
    tenders_list_data,
    get_pre_login_dashboard_status,
    get_pre_login_dashboard_data,
  } = state.vendorPortal;
  return {
    corrigendum_list_status,
    corrigendum_list_data,
    tenders_list_status,
    tenders_list_data,
    get_pre_login_dashboard_status,
    get_pre_login_dashboard_data,
  };
};
export default connect(mapStateToProps)(HomePage);
