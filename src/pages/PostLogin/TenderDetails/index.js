import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import { tenderdetailsActions } from "../../../redux/_actions";
import { status } from "../../../redux/_constants/commonDS";
import { commonFunctions } from "../../../_uttils/commonFunction";
const TenderDetails = (props) => {
  const { tender_detail_data, tender_detail_status, dispatch } = props;
  const [tenderDetailData, setTenderDetailData] = useState({});

  useEffect(() => {
    dispatch(tenderdetailsActions.tenderDetail());
  }, []);
  useEffect(() => {
    if (tender_detail_status && tender_detail_status == status.SUCCESS) {
      if (tender_detail_data && Object.keys(tender_detail_data).length > 0) {
        if (Object.keys(tenderDetailData).length == 0) {
          setTenderDetailData({ ...tender_detail_data });
        }
      }
    }
  }, [tender_detail_status, tender_detail_data, tenderDetailData]);

  const { basicDetail, criticalDates, documentList, workItemDetail } =
    tenderDetailData;
  const displayDocumentList = () => {
    const retData = [];
    if (documentList && documentList.length > 0) {
      retData.push(
        documentList.map((list, index) => {
          return (
            <TableRow key={index}>
              <TableCell align='center' colSpan={1}>
                {index + 1}
              </TableCell>
              <TableCell align='center' colSpan={1}>
                {list.category}
              </TableCell>
              <TableCell align='center' colSpan={1}>
                {list.subCategory}
              </TableCell>
              <TableCell align='center' colSpan={1}>
                {list.subCategoryDescription}
              </TableCell>
              <TableCell align='center' colSpan={1}>
                {list.formate}
              </TableCell>
            </TableRow>
          );
        })
      );
    }
    return retData;
  };
  return (
    <Box className='tenderdetails-container'>
      <Grid item xs={12}>
        <div className='page-title'>
          <h1>Tender Details </h1>
          <p>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor
          </p>
        </div>
      </Grid>
      <Box className='white-box' sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} className='box-heading'>
          <h3>Basic Details</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </Grid>
        {basicDetail && Object.keys(basicDetail).length > 0 ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <div className='clarification-text'>
                <label>Tender Reference Number</label> <span>:</span>{" "}
                <p>{basicDetail.tenderNumber}</p>
              </div>
              <div className='clarification-text'>
                <label>Tender ID</label> <span>:</span>
                <p>{basicDetail.id}</p>
              </div>
              <div className='clarification-text'>
                <label>Tender Type</label> <span>:</span>
                <p>{basicDetail.type}</p>
              </div>
              <div className='clarification-text'>
                <label>Tender Catogory</label> <span>:</span>
                <p>{basicDetail.tenderCategory}</p>
              </div>
              <div className='clarification-text'>
                <label>General Technical Allowed</label> <span>:</span>
                <p>{basicDetail.technicalAllowed}</p>
              </div>
              <div className='clarification-text'>
                <label>Payment Mode</label> <span>:</span>
                <p>{basicDetail.paymentMethod}</p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className='clarification-text'>
                <label>Form Of Contect</label> <span>:</span>{" "}
                <p>{basicDetail.formContract}</p>
              </div>
              <div className='clarification-text'>
                <label>No. of Cover</label> <span>:</span>
                <p>{basicDetail.noOfCover}</p>
              </div>
              <div className='clarification-text'>
                <label>Item Wise Technical</label> <span>:</span>
                <p>{basicDetail.itemTechnical}</p>
              </div>
              <div className='clarification-text'>
                <label>Allowed Two Stage Bidding</label> <span>:</span>
                <p>{basicDetail.stageBidding}</p>
              </div>
            </Grid>
          </Grid>
        ) : (
          <>Loading</>
        )}
      </Box>
      <Box className='white-box' sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} className='box-heading'>
          <h3>Important Documents List</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </Grid>
        <Grid container spacing={0}>
          <div className='table-container'>
            <TableContainer component={Paper} className='main-table'>
              <Table lg={{ minWidth: "100%" }} aria-label='spanning table'>
                <TableHead>
                  <TableRow>
                    <TableCell>S.No</TableCell>
                    <TableCell align='center' style={{ whiteSpace: "nowrap" }}>
                      Category
                    </TableCell>
                    <TableCell align='center' style={{ whiteSpace: "nowrap" }}>
                      Sub-Category
                    </TableCell>
                    <TableCell align='center' style={{ whiteSpace: "nowrap" }}>
                      Sub-Category Description
                    </TableCell>
                    <TableCell align='center' style={{ whiteSpace: "nowrap" }}>
                      File Format
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{displayDocumentList()}</TableBody>
              </Table>
            </TableContainer>
          </div>
        </Grid>
      </Box>
      <Box className='white-box' sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} className='box-heading'>
          <h3>Work Item Details</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </Grid>
        {workItemDetail && Object.keys(workItemDetail).length > 0 ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <div className='clarification-text'>
                <label>Title</label> <span>:</span>{" "}
                <p>{workItemDetail.title}</p>
              </div>
              <div className='clarification-text'>
                <label>Work Description</label> <span>:</span>
                <p>{workItemDetail.workDescription}</p>
              </div>
              <div className='clarification-text'>
                <label>Independend External and Internal Remarks</label>{" "}
                <span>:</span>
                <p>{workItemDetail.independent}</p>
              </div>
              <div className='clarification-text'>
                <label>Tender Value</label> <span>:</span>
                <p>{workItemDetail.tenderValue}</p>
              </div>
              <div className='clarification-text'>
                <label>Contract Type</label> <span>:</span>
                <p>{workItemDetail.contractType}</p>
              </div>
              <div className='clarification-text'>
                <label>Location</label> <span>:</span>
                <p>{workItemDetail.location}</p>
              </div>
              <div className='clarification-text'>
                <label>Pre Bidding Meeting</label> <span>:</span>
                <p>{workItemDetail.bidingMeeting}</p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className='clarification-text'>
                <label>Product category</label> <span>:</span>{" "}
                <p>{workItemDetail.productCategory}</p>
              </div>
              <div className='clarification-text'>
                <label>Bid Validity (Day)</label> <span>:</span>
                <p>{workItemDetail.bidValidity}</p>
              </div>
              <div className='clarification-text'>
                <label>Pincode</label> <span>:</span>
                <p>{workItemDetail.pinCode}</p>
              </div>
              <div className='clarification-text'>
                <label>Sub Category</label> <span>:</span>
                <p>{workItemDetail.subCategory}</p>
              </div>
              <div className='clarification-text'>
                <label>Period of Work</label> <span>:</span>
                <p>{workItemDetail.workPeriod}</p>
              </div>
              <div className='clarification-text'>
                <label>Bid Opening Place</label> <span>:</span>
                <p>{workItemDetail.bidOpenningPlace}</p>
              </div>
              <div className='clarification-text'>
                <label>Tender Value</label> <span>:</span>
                <p>{workItemDetail.tenderValue}</p>
              </div>
              <div className='clarification-text'>
                <label>Tender Value</label> <span>:</span>
                <p>{workItemDetail.tenderValue}</p>
              </div>
            </Grid>
          </Grid>
        ) : (
          <>Loading...</>
        )}
      </Box>
      <Box className='white-box' sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} className='box-heading'>
          <h3>Critical Dates</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </Grid>

        {criticalDates && Object.keys(criticalDates).length > 0 ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <div className='clarification-text'>
                <label>Published Date</label> <span>:</span>{" "}
                <p>
                  {commonFunctions.getDateAndTimeWithMonth(
                    new Date(criticalDates.publishDate)
                  )}
                </p>
              </div>
              <div className='clarification-text'>
                <label>Document Download</label> <span>:</span>
                <p>
                  {commonFunctions.getDateAndTimeWithMonth(
                    new Date(criticalDates.documentDownload)
                  )}
                </p>
              </div>
              <div className='clarification-text'>
                <label>Clarification Start Date</label> <span>:</span>
                <p>
                  {commonFunctions.getDateAndTimeWithMonth(
                    new Date(criticalDates.clarificationDate)
                  )}
                </p>
              </div>
              <div className='clarification-text'>
                <label>Bidd Submission Dade</label> <span>:</span>
                <p>
                  {commonFunctions.getDateAndTimeWithMonth(
                    new Date(criticalDates.bidSubmissionDate)
                  )}
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className='clarification-text'>
                <label>Bid Opening Date</label> <span>:</span>{" "}
                <p>
                  {commonFunctions.getDateAndTimeWithMonth(
                    new Date(criticalDates.bidOpeningDate)
                  )}
                </p>
              </div>
              <div className='clarification-text'>
                <label>Bidd Submission Date</label> <span>:</span>
                <p>
                  {commonFunctions.getDateAndTimeWithMonth(
                    new Date(criticalDates.bidSubmissionStartDate)
                  )}
                </p>
              </div>
            </Grid>
          </Grid>
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};
function mapStateToProps(state) {
  const { tender_detail_status, tender_detail_data } = state.vendorPortal;
  return {
    tender_detail_status,
    tender_detail_data,
  };
}
export default connect(mapStateToProps)(TenderDetails);
