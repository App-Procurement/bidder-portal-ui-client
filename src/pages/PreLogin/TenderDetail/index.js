import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { status } from '../../../redux/_constants/commonDS';
import { tenderdetailsActions } from '../../../redux/_actions';
import { useLocation } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';

const TenderDetail = (props) => {
  const { tender_details_status, tender_details_data, navigate, dispatch } = props;
  const [tenderDetails, setTenderDetails] = useState({});
  let entites = useLocation().pathname.split('/');

  useEffect(() => {
    dispatch(
      tenderdetailsActions.tenderDetails({
        type: entites[entites.length - 2],
        id: entites[entites.length - 1],
      })
    );
  }, []);

  useEffect(() => {
    if (
      tender_details_status &&
      tender_details_status === status.SUCCESS &&
      tender_details_data &&
      Object.keys(tender_details_data.basicDetail).length > 0
    ) {
      setTenderDetails({ ...tender_details_data.basicDetail });
    } else {
    }
  }, [tender_details_status, tender_details_data]);
  const { basicDetails, corrigendum, criticalDates, downloadTenderDocuments, tender, workItemDetails } = tenderDetails;

  return (
    <div className="tenderdetails-container">
      <Container fixed>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <div className="page-heading">
              <h1>Tender Details</h1>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={8} md={9} sm={12}>
            <Box className="white-box">
              <div className="box-heading">
                <h3>Basic Details</h3>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
              {basicDetails && Object.keys(basicDetails).length > 0 ? (
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Organnisation Chain <span>:</span>
                      </label>
                      <p>{basicDetails.orginisationChain}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Form of Contract <span>:</span>
                      </label>
                      <p>{basicDetails.formOfContract}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Tender ID <span>:</span>
                      </label>
                      <p> {basicDetails.id} </p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Cloasing Date <span>:</span>
                      </label>
                      <p>{basicDetails.closingDate}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Tender Type <span>:</span>
                      </label>
                      <p>{basicDetails.tenderType}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Tender Category <span>:</span>
                      </label>
                      <p>{basicDetails.tenderCategory}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Reverse Bidding <span>:</span>
                      </label>
                      <p>{basicDetails.reverseBidding}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Payment Mode <span>:</span>
                      </label>
                      <p>{basicDetails.paymentMode}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Company Name <span>:</span>
                      </label>
                      <p>{basicDetails.paymentMode}</p>
                    </div>
                  </Grid>
                </Grid>
              ) : (
                <>Loading...</>
              )}
            </Box>
            <Box className="white-box">
              <div className="box-heading">
                <h3>Work Item Details</h3>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
              {workItemDetails && Object.keys(workItemDetails).length > 0 ? (
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Title <span>:</span>
                      </label>
                      <p>{workItemDetails.title}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Work Description <span>:</span>
                      </label>
                      <p>{workItemDetails.description}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Independed External and Internal Remark <span>:</span>
                      </label>
                      <p>{workItemDetails.remarks}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Tender Value <span>:</span>
                      </label>
                      <p>{workItemDetails.value}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Contract Type <span>:</span>
                      </label>
                      <p>{workItemDetails.contractType}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Location <span>:</span>
                      </label>
                      <p>{workItemDetails.location}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Pre Binding Meeting <span>:</span>
                      </label>
                      <p>{workItemDetails.meeting}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Product Category <span>:</span>
                      </label>
                      <p>{workItemDetails.category}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Bid Validity (Day) <span>:</span>
                      </label>
                      <p>{workItemDetails.category}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Pincode <span>:</span>
                      </label>
                      <p>{workItemDetails.pinCode}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Sub Category <span>:</span>
                      </label>
                      <p>{workItemDetails.subCategory}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Period of Work <span>:</span>
                      </label>
                      <p>{workItemDetails.periodOfWork}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Bid Opning Place <span>:</span>
                      </label>
                      <p>{workItemDetails.openingPlace}</p>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} xs={12}>
                    <div className="details-text">
                      <label>
                        Tender Value <span>:</span>
                      </label>
                      <p>{workItemDetails.value}</p>
                    </div>
                  </Grid>
                </Grid>
              ) : (
                <>Loading...</>
              )}
            </Box>
          </Grid>
          <Grid item lg={4} md={3} sm={12}>
            <Box className="white-box">
              <div className="box-heading">
                <h3>Download Tender Documents</h3>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
              {downloadTenderDocuments && Object.keys(downloadTenderDocuments).length > 0 ? (
                <div className="documents-content">
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12}>
                      <div className="documents-text">
                        <label>Term and Condition_2021</label>
                        <p>{downloadTenderDocuments.id}</p>
                      </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12}>
                      <div className="documents-text">
                        <label>Tender Information</label>
                        <p>{downloadTenderDocuments.title}</p>
                      </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12}>
                      <div className="download-documents">
                        <Button className="success-btn">Download Documents</Button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <>Loading...</>
              )}
            </Box>
            <Box className="white-box">
              <div className="box-heading">
                <h3>Critical Dates</h3>
                <p>Lorem Ipsum dolor sit amet</p>
              </div>
              {criticalDates && Object.keys(criticalDates).length > 0 ? (
                <div className="critical-contents">
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12}>
                      <div className="content">
                        <label>Published Date</label> <span>:</span>
                        <p>{criticalDates.publishDate}</p>
                      </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12}>
                      <div className="content">
                        <label>Document Download Date</label> <span>:</span>
                        <p>{criticalDates.documentsDownload}</p>
                      </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12}>
                      <div className="content">
                        <label>Clarification Start Date</label> <span>:</span>
                        <p>{criticalDates.startDate}</p>
                      </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12}>
                      <div className="content">
                        <label>Bid Submission Date</label> <span>:</span>
                        <p>{criticalDates.submissionDate}</p>
                      </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12}>
                      <div className="content">
                        <label>Bid Opening Date</label> <span>:</span>
                        <p>{criticalDates.openingDate}</p>
                      </div>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12}>
                      <div className="content">
                        <label>Bid Cloasing Date</label> <span>:</span>
                        <p>{criticalDates.cloasingDate}</p>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <>Loading...</>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { tender_details_status, tender_details_data } = state.vendorPortal;
  return { tender_details_status, tender_details_data };
};
export default connect(mapStateToProps)(TenderDetail);
