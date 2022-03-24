import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import CachedIcon from '@mui/icons-material/Cached';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { connect } from "react-redux";
import { searchTender } from "../../../redux/_actions";
import { status } from "../../../redux/_constants/commonDS";

const CancelledRetendered = (props) => {
    const { search_tender_by_type_status, search_tender_by_type_data, dispatch } =
        props;
    const [inputs, setInputs] = useState({});
    const [data, setData] = useState(["abc", "def", "ghi", "jkl"]);
    const [issubmit, setIsssubmit] = useState(false);
    let [tenderData, setTenderData] = useState([]);
    useEffect(() => {
        if (
            search_tender_by_type_status &&
            search_tender_by_type_status == status.SUCCESS
        ) {
            if (search_tender_by_type_data && search_tender_by_type_data.length > 0) {
                if (tenderData.length <= 0) {
                    setTenderData(...tenderData, [...search_tender_by_type_data]);
                }
            }
        }
    }, [search_tender_by_type_status, search_tender_by_type_data, tenderData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };
    const handleSubmit = () => {
        setIsssubmit(true);
        const retData = checkValidation(true);
        if (retData.isValid === true) {
            let data = { inputs: inputs, type: "cancelledRetender" };
            dispatch(searchTender.searchByTenderType(data));
        }
    };
    const checkValidation = (isSubmitted) => {
        let validObj = {
            isValid: true,
            message: ""
        }
        let isValid = true
        const retData = {
            tenderStatus: validObj,
            keywords: validObj,
            captcha: validObj,
            tenderID: validObj
        }
        if (isSubmitted) {
            if (!inputs.tenderStatus) {
                retData.tenderStatus = {
                    isValid: false,
                    message: "Tender Status is Required"
                }
                isValid = false
            }
            if (!inputs.keywords) {
                retData.keywords = {
                    isValid: false,
                    message: "Keywords are Required"
                }
                isValid = false
            }
            if (!inputs.captcha) {
                retData.captcha = {
                    isValid: false,
                    message: "Captcha is Required"
                }
                isValid = false
            }
            if (!inputs.tenderID) {
                retData.tenderID = {
                    isValid: false,
                    message: "Tender ID is Required"
                }
                isValid = false
            }
        }
        retData.isValid = isValid
        return retData
    }

    const clearInputs = () => {
        const inputsValue = {
            tenderStatus: "",
            tenderID: "",
            captcha: "",
            keywords: ""
        };
        setInputs(inputsValue);
        setIsssubmit(false);
    };
    const error = checkValidation(issubmit)

    return (
        <Box className='search-tender-container'>
            <Grid item xs={12}>
                <div className='page-title'>
                    <h1>Cancelled / Retendered</h1>
                    <p>
                        Please Select the Classification From the Drop Dwan Box Below fore more tender
                    </p>
                </div>
            </Grid>
            <Box className='white-box' sx={{ flexGrow: 1 }}>
                <Grid container spacing={0} className='box-heading'>
                    <h3>Criteria l</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                </Grid>
                <Grid container spacing={4} justifyContent={'center'}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Grid container spacing={4} lg={12} md={12} justifyContent={'center'}>
                            <Grid item xs={12} md={12} lg={12}>
                                <FormControl component='fieldset' className='form-group'>
                                    <FormLabel component='legend'>Tender Status</FormLabel>
                                    <select
                                        name='tenderStatus'
                                        value={inputs.tenderStatus}
                                        onChange={handleChange}
                                        class='form-control'>
                                        <option value=''>--select--</option>
                                        {data.map((item, index) => {
                                            return <option>{item}</option>;
                                        })}
                                    </select>
                                    <p className='error'>{error.tenderStatus.message}</p>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <FormControl component='fieldset' className='form-group'>
                                    <FormLabel component='legend'>Tender ID</FormLabel>
                                    <input
                                        name='tenderID'
                                        value={inputs.tenderID}
                                        onChange={handleChange}
                                        type='text'
                                        class='form-control' />
                                    <p className='error'>{error.tenderID.message}</p>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={12} lg={12}>
                                <FormControl component='fieldset' className='form-group'>
                                    <FormLabel component='legend'>Keywords</FormLabel>
                                    <input
                                        name='keywords'
                                        value={inputs.keywords}
                                        onChange={handleChange}
                                        type='text'
                                        class='form-control' />
                                    <p className='error'>{error.keywords.message}</p>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12} lg={12} className="captcha-content">
                        <FormControl component='fieldset' className='form-group'>
                            <FormLabel component='legend'>Enter Captcha</FormLabel>
                            <input
                                name='captcha'
                                value={inputs.captcha}
                                onChange={handleChange}
                                class='form-control' />
                            <div className="captcha-text">
                                <h2>8T83TY</h2>
                                <span><CachedIcon /></span>
                                <p>Refresh</p>
                            </div>
                            <p className='error'>{error.captcha.message}</p>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={12} lg={12}>
                        <div className='form-buttons'>
                            <Button
                                onClick={clearInputs}
                                variant='contained'
                                className='error-btn'>
                                Clear
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                variant='contained'
                                className='success-btn'>
                                Search
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Box className='white-box' sx={{ flexGrow: 1 }} style={{ padding: '0px' }}>
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
                                    {tenderData && tenderData.length > 0 ? (
                                        tenderData.map((tender, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <div>{index + 1}.</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div>{tender.category}.</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div>{tender.subCategory}.</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div>{tender.subCategoryDescription}.</div>
                                                </TableCell>
                                                <TableCell>
                                                    <div>{tender.formate}.</div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell align='center' colSpan={1} colSpan={5}>
                                                <div className='text-found'>NO Tender Found.</div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>


                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
            </Box>
        </Box>
    );
};

const mapStateToProps = (state) => {
    const { search_tender_by_type_status, search_tender_by_type_data } =
        state.vendorPortal;
    return { search_tender_by_type_status, search_tender_by_type_data };
};
export default connect(mapStateToProps)(CancelledRetendered);
