import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { dashboardActions } from "../../../redux/_actions";
import { commonFunctions } from "../../../_uttils";
import { status } from "../../../redux/_constants/commonDS";
const Dashboard = (props) => {
  const { dispatch, dashboard_status, dashboard_data } = props;
  let [dashboard, setDashboard] = useState({});
  let [searchTender, setSearchTender] = useState("");

  useEffect(() => {
    dispatch(dashboardActions.dashboard());
  }, []);
  useEffect(() => {
    if (dashboard_status && dashboard_status == status.SUCCESS) {
      if (dashboard_data && Object.keys(dashboard_data).length > 0) {
        if (Object.keys(dashboard).length <= 0) {
          setDashboard({ ...dashboard_data });
        }
      }
    }
  }, [dashboard_status, dashboard, dashboard_data]);
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTender(value);
  };
  const { latestTender, latestCorrigendum } = dashboard;
  return (
    <Box className='dashboard-container'>
      <Grid container spacing={4}>
        <Grid item lg={8} md={12} xs={12}>
          <div className='page-title'>
            <h1>Welcome to E-Procurement system</h1>
            <p>
              programmers and printers with the aim of occupying the spaces of a
              website,
            </p>
          </div>
          <Box className='white-box'>
            <div className='box-heading'>
              <h3>Latest Tender</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='tender-table-container'>
              <TableContainer component={Paper} className='main-table'>
                <Table lg={{ minWidth: "100%" }} aria-label='spanning table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                        <EmailIcon /> <strong>Tender Title</strong>
                      </TableCell>
                      <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                        <GroupIcon /> <strong>Reference No</strong>
                      </TableCell>
                      <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                        <ConfirmationNumberIcon /> <strong>Closing Date</strong>
                      </TableCell>
                      <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                        <ConfirmationNumberIcon />{" "}
                        <strong>Bid Opening Date</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {latestTender &&
                      latestTender.length > 0 &&
                      latestTender.map((tender, index) => (
                        <TableRow key={index}>
                          <TableCell align='left'>
                            {index + 1}. {tender.tenderTitle}
                          </TableCell>
                          <TableCell
                            align='left'
                            style={{ whiteSpace: "nowrap" }}>
                            {tender.refnum}
                          </TableCell>
                          <TableCell
                            align='left'
                            style={{ whiteSpace: "nowrap" }}>
                            {commonFunctions.getDateAndTime(tender.closingDate)}
                          </TableCell>
                          <TableCell
                            align='left'
                            style={{ whiteSpace: "nowrap" }}>
                            {commonFunctions.getDateAndTime(
                              tender.bidOpeningDate
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className='latest-bottom-text'>
              <Grid
                container
                spacing={0}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <Grid item lg={9} md={9} ms={9}>
                  <div className='latest-text'>
                    Latest Tenders updatas in every 30 Minutes
                  </div>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={3}
                  ms={3}
                  justifyItems={"flex-end"}
                  textAlign={"right"}>
                  <Button variant='More' className='success-btn'>
                    More....
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Box>
          <Box className='white-box'>
            <div className='box-heading'>
              <h3>Latest Corrigendum</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='tender-table-container'>
              <TableContainer component={Paper} className='main-table'>
                <Table lg={{ minWidth: "100%" }} aria-label='spanning table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                        <EmailIcon /> <strong>Corrigendum Title</strong>
                      </TableCell>
                      <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                        <GroupIcon /> <strong>Reference No</strong>
                      </TableCell>
                      <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                        <ConfirmationNumberIcon /> <strong>Closing Date</strong>
                      </TableCell>
                      <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                        <ConfirmationNumberIcon />{" "}
                        <strong>Bid Opening Date</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {latestCorrigendum &&
                      latestCorrigendum.length > 0 &&
                      latestCorrigendum.map((tender, index) => (
                        <TableRow key={index}>
                          <TableCell align='left'>
                            {index + 1}. {tender.tenderTitle}
                          </TableCell>
                          <TableCell
                            align='left'
                            style={{ whiteSpace: "nowrap" }}>
                            {tender.refnum}
                          </TableCell>
                          <TableCell
                            align='left'
                            style={{ whiteSpace: "nowrap" }}>
                            {commonFunctions.getDateAndTime(tender.closingDate)}
                          </TableCell>
                          <TableCell
                            align='left'
                            style={{ whiteSpace: "nowrap" }}>
                            {commonFunctions.getDateAndTime(
                              tender.bidOpeningDate
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className='latest-bottom-text'>
              <Grid
                container
                spacing={0}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <Grid item lg={9} md={9} ms={9}>
                  <div className='latest-text'>
                    Latest Tenders updatas in every 30 Minutes
                  </div>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={3}
                  ms={3}
                  justifyItems={"flex-end"}
                  textAlign={"right"}>
                  <Button variant='More' className='success-btn'>
                    More....
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Grid>
        <Grid item lg={4} md={12} xs={12}>
          <Box className='white-box'>
            <div className='tender-search-box'>
              <Button variant='Click here to login' className='success-btn'>
                Click here to login
              </Button>
              <div className='enrollment-text'>
                <strong>
                  <a href='/enrollment'>Online Bidder Enrollment</a>
                </strong>
                <a href='#'>Generate / Forget password ?</a>
              </div>
              <div className='search-box'>
                <label>Tender Search</label>
                <TextField
                  className='search-field'
                  id='outlined-required'
                  // defaultValue='Advance search'
                  placeholder='Advance search'
                  helperText='Search with a ID / Title / Reference No'
                  name='searchTender'
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <ButtonGroup
                variant='outlined'
                aria-label='outlined button group'
                className='tender-search-buttons'>
                <Button
                  className='success-btn'
                  startIcon={<ArrowCircleRightIcon />}>
                  {" "}
                  Help For Bidder
                </Button>
                <Button
                  className='success-btn'
                  startIcon={<ArrowCircleRightIcon />}>
                  {" "}
                  FAQs
                </Button>
                <Button
                  className='success-btn'
                  startIcon={<ArrowCircleRightIcon />}>
                  {" "}
                  Feedback
                </Button>
                <Button
                  className='success-btn'
                  startIcon={<ArrowCircleRightIcon />}>
                  {" "}
                  Bidder Manual Kit
                </Button>
              </ButtonGroup>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
const mapStateToProps = (state) => {
  const { dashboard_status, dashboard_data } = state.vendorPortal;
  return { dashboard_status, dashboard_data };
};
export default connect(mapStateToProps)(Dashboard);
