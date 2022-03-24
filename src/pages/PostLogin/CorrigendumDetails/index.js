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
import { corrigendumActions } from "../../../redux/_actions";
import { status } from "../../../redux/_constants/commonDS";
import { commonFunctions } from "../../../_uttils/commonFunction";

const CorrigendumDetails = (props) => {
    const { corrigendom_detail_status, corrigendom_detail_data, dispatch } = props;
    const [corrigendomData, setCorrigendomData] = useState({})
    useEffect(() => {
        dispatch(corrigendumActions.corrigendumDetail())
    }, []);
    useEffect(() => {
        if (corrigendom_detail_status && corrigendom_detail_status == status.SUCCESS) {
            if (corrigendom_detail_data && Object.keys(corrigendom_detail_data).length > 0) {
                if (Object.keys(corrigendomData).length == 0) {
                    setCorrigendomData({ ...corrigendom_detail_data });
                }
            }
        }
    }, [corrigendom_detail_status, corrigendom_detail_data, corrigendomData]);
    const { basicDetail, corrigendumCriticalDate, corrigendumDocuments, itemDetail } = corrigendomData
    const displayCorrigendumDocuments = () => {
        let retData = []
        if (corrigendumDocuments && corrigendumDocuments.length > 0) {
            retData.push(
                corrigendumDocuments.map((detail, index) => {
                    return (
                        <TableRow key={index}>
                            <TableCell align='center' colSpan={1}>
                                {index + 1}
                            </TableCell>
                            <TableCell align='center' colSpan={1}>
                                {detail.category}
                            </TableCell>
                            <TableCell align='center' colSpan={1}>
                                {detail.subCategory}
                            </TableCell>
                            <TableCell align='center' colSpan={1}>
                                {detail.subCategoryDescription}
                            </TableCell>
                            <TableCell align='center' colSpan={1}>
                                {detail.formate}
                            </TableCell>
                        </TableRow>
                    )
                })
            )
        }
        return retData
    }
    return (
        <Box className='tenderdetails-container'>
            <Grid item xs={12}>
                <div className='page-title'>
                    <h1>Corrigendum Details</h1>
                    <p>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
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
                            <div className="clarification-text">
                                <label>Tender Reference Number</label> <span>:</span> <p>{basicDetail.refnum}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Tender ID</label> <span>:</span><p>{basicDetail.id}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Tender Type</label> <span>:</span><p>{basicDetail.type}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Tender Catogory</label> <span>:</span><p>{basicDetail.category}</p>
                            </div>
                            <div className="clarification-text">
                                <label>General Technical Allowed</label> <span>:</span><p>{basicDetail.generalTechnical}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Payment Mode</label> <span>:</span><p>{basicDetail.paymentMode}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <div className="clarification-text">
                                <label>Form of Contact</label> <span>:</span> <p>{basicDetail.content}</p>
                            </div>
                            <div className="clarification-text">
                                <label>No. of Cover</label> <span>:</span><p>2</p>
                            </div>
                            <div className="clarification-text">
                                <label>ItemWise Technical</label> <span>:</span><p>{basicDetail.itemTechnical}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Allowed Two Stage Bidding</label> <span>:</span><p>{basicDetail.twostageBidding}</p>
                            </div>
                        </Grid>
                    </Grid>
                ) : (<>Loading...</>)}
            </Box>
            <Box className='white-box' sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} className='box-heading'>
                    <h3>Corrigendum Documents</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </Grid>
                <Grid container spacing={0}>
                    <div className="table-container">
                        <TableContainer component={Paper} className='main-table'>
                            <Table lg={{ minWidth: "100%" }} aria-label='spanning table'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>S.No</TableCell>
                                        <TableCell align='center'
                                            style={{ whiteSpace: "nowrap" }}>
                                            Category
                                        </TableCell>
                                        <TableCell align='center'
                                            style={{ whiteSpace: "nowrap" }}>
                                            Sub-Category
                                        </TableCell>
                                        <TableCell align='center'
                                            style={{ whiteSpace: "nowrap" }}>
                                            Sub-Category Description
                                        </TableCell>
                                        <TableCell align='center'
                                            style={{ whiteSpace: "nowrap" }}>
                                            File Format
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayCorrigendumDocuments()}
                                </TableBody>
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
                {itemDetail && Object.keys(itemDetail).length > 0 ? (
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} lg={6}>
                            <div className="clarification-text">
                                <label>Title</label> <span>:</span> <p>{itemDetail.title}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Work Description</label> <span>:</span><p>{itemDetail.description}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Independend External and
                                    Internal Remarks</label> <span>:</span><p>{itemDetail.independentExternal}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Tender Value</label> <span>:</span><p>{itemDetail.tenderValue}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Contract Type</label> <span>:</span><p>{itemDetail.contractType}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Location</label> <span>:</span><p>{itemDetail.location}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Pre Bidding Meeting</label> <span>:</span><p>{itemDetail.prebidding}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <div className="clarification-text">
                                <label>Product category</label> <span>:</span> <p>{itemDetail.productCategory}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Bid Validity (Day)</label> <span>:</span><p>{itemDetail.bidValidity}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Pincode</label> <span>:</span><p>{itemDetail.pincode}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Sub Category</label> <span>:</span><p>{itemDetail.subCategory}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Period of Work</label> <span>:</span><p>{itemDetail.workPeriod}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Bid Opening Place</label> <span>:</span><p>{itemDetail.bidPlace}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Tender Value</label> <span>:</span><p>{itemDetail.tenderValue}</p>
                            </div>

                        </Grid>
                    </Grid>
                ) : (<>Loading...</>)}
            </Box>
            <Box className='white-box' sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} className='box-heading'>
                    <h3>Corrigendum Critical Dates</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </Grid>
                {corrigendumCriticalDate && Object.keys(corrigendumCriticalDate).length > 0 ? (
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6} lg={6}>
                            <div className="clarification-text">
                                <label>Published Date</label> <span>:</span> <p> {commonFunctions.getDateAndTimeWithMonth(new Date(corrigendumCriticalDate.publishDate))} </p>
                            </div>
                            <div className="clarification-text">
                                <label>Document Download</label> <span>:</span><p>{commonFunctions.getDateAndTimeWithMonth(new Date(corrigendumCriticalDate.documentDownload))}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Clarification Start Date</label> <span>:</span><p>{commonFunctions.getDateAndTimeWithMonth(new Date(corrigendumCriticalDate.clarificationDate))}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Bidd Submission Dade</label> <span>:</span><p>{commonFunctions.getDateAndTimeWithMonth(new Date(corrigendumCriticalDate.bidSubmissionDate))}</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <div className="clarification-text">
                                <label>Bid Opening Date</label> <span>:</span> <p>{commonFunctions.getDateAndTimeWithMonth(new Date(corrigendumCriticalDate.bidOpeningDate))}</p>
                            </div>
                            <div className="clarification-text">
                                <label>Bidd Submission Date</label> <span>:</span><p>{commonFunctions.getDateAndTimeWithMonth(new Date(corrigendumCriticalDate.bidSubmissionDate))}</p>
                            </div>
                        </Grid>
                    </Grid>
                ) : (<>Loading...</>)}
            </Box>
        </Box>
    );
};
function mapStateToProps(state) {
    const { corrigendom_detail_status, corrigendom_detail_data } = state.vendorPortal;
    return {
        corrigendom_detail_status,
        corrigendom_detail_data,
    };
}
export default connect(mapStateToProps)(CorrigendumDetails);
