import React, { useState } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import CachedIcon from "@mui/icons-material/Cached";
import { searchTender } from "../../../redux/_actions";
// import { status } from "../../redux/_constants/commonDS";

const TenderStatus = (props) => {
  const { search_tender_by_type_status, search_tender_by_type_data, dispatch } =
    props;
  const [inputs, setInputs] = useState({});
  const [selectOptions, setSelectOption] = useState([
    "abc",
    "def",
    "ghi",
    "jkl",
  ]);
  const [issubmit, setIsssubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = () => {
    setIsssubmit(true);
    const retData = checkValidation(true);
    if (retData.isValid === true) {
      let data = {
        inputs: inputs,
        type: "status",
      };
      dispatch(searchTender.searchByTenderType(data));
    }
  };

  const checkValidation = (isSubmitted) => {
    let validObj = {
      isValid: true,
      message: "",
    };
    let isValid = true;
    const retData = {
      tenderSearch: validObj,
      tenderID: validObj,
      productCategory: validObj,
      tenderCategory: validObj,
      fromDate: validObj,
      toDate: validObj,
      formOfcontract: validObj,
      captcha: validObj,
    };
    if (isSubmitted) {
      if (!inputs.tenderSearch) {
        retData.tenderSearch = {
          isValid: false,
          message: "Tender Search Is Required",
        };
        isValid = false;
      }
      if (!inputs.tenderID) {
        retData.tenderID = {
          isValid: false,
          message: "Tender ID Is Required",
        };
        isValid = false;
      }
      if (!inputs.productCategory) {
        retData.productCategory = {
          isValid: false,
          message: "Product Category Is Required",
        };
        isValid = false;
      }
      if (!inputs.tenderCategory) {
        retData.tenderCategory = {
          isValid: false,
          message: "Tender Category Is Required",
        };
        isValid = false;
      }
      if (!inputs.fromDate) {
        retData.fromDate = {
          isValid: false,
          message: "From Date Is Required",
        };
        isValid = false;
      }
      if (!inputs.toDate) {
        retData.toDate = {
          isValid: false,
          message: "To Date Is Required",
        };
        isValid = false;
      }

      if (!inputs.formOfcontract) {
        retData.formOfcontract = {
          isValid: false,
          message: "Form of Contract Is Required",
        };
        isValid = false;
      }
      if (!inputs.captcha) {
        retData.captcha = {
          isValid: false,
          message: "Captcha Is Required",
        };
        isValid = false;
      }
    }
    retData.isValid = isValid;
    return retData;
  };
  const clearInputs = () => {
    const inputsValue = {
      tenderSearch: "",
      tenderID: "",
      productCategory: "",
      tenderCategory: "",
      fromDate: "",
      tenderRefrenceNumber: "",
      toDate: "",
      formOfcontract: "",
      captcha: "",
    };
    setInputs(inputsValue);
    setIsssubmit(false);
  };

  const error = checkValidation(issubmit);
  return (
    <Box className='search-tender-container'>
      <Grid item xs={12}>
        <div className='page-title'>
          <h1>Tender Status</h1>
          <p>
            Please Select the Classification From the Drop Dwan Box Below fore
            more tender
          </p>
        </div>
      </Grid>
      <Box className='white-box' sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} className='box-heading'>
          <h3>Criteria l</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component='fieldset' className='form-group'>
              <FormLabel component='legend'>Tender Search</FormLabel>
              <select
                name='tenderSearch'
                value={inputs.tenderSearch}
                onChange={handleChange}
                class='form-control'>
                <option value=''>--select--</option>
                {selectOptions.map((item, index) => {
                  return <option>{item}</option>;
                })}
              </select>
              <p className='error'>{error.tenderSearch.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component='fieldset' className='form-group'>
              <FormLabel component='legend'>From Date</FormLabel>
              <input
                name='fromDate'
                value={inputs.fromDate}
                onChange={handleChange}
                type='date'
                class='form-control'
              />
              <p className='error'>{error.fromDate.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component='fieldset' className='form-group'>
              <FormLabel component='legend'>To Date</FormLabel>
              <input
                name='toDate'
                value={inputs.toDate}
                onChange={handleChange}
                type='date'
                class='form-control'
              />
              <p className='error'>{error.toDate.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component='fieldset' className='form-group'>
              <FormLabel component='legend'>Form of Contract</FormLabel>
              <select
                name='formOfcontract'
                value={inputs.formOfcontract}
                onChange={handleChange}
                class='form-control'>
                <option value=''>--select--</option>
                {selectOptions.map((item, index) => {
                  return <option>{item}</option>;
                })}
              </select>
              <p className='error'>{error.formOfcontract.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component='fieldset' className='form-group'>
              <FormLabel component='legend'>Tender Category</FormLabel>
              <select
                name='tenderCategory'
                value={inputs.tenderCategory}
                onChange={handleChange}
                class='form-control'>
                <option value=''>--select--</option>
                {selectOptions.map((item, index) => {
                  return <option>{item}</option>;
                })}
              </select>
              <p className='error'>{error.tenderCategory.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component='fieldset' className='form-group'>
              <FormLabel component='legend'>Product Category</FormLabel>
              <select
                name='productCategory'
                value={inputs.productCategory}
                onChange={handleChange}
                class='form-control'>
                <option value=''>--select--</option>
                {selectOptions.map((item, index) => {
                  return <option>{item}</option>;
                })}
              </select>
              <p className='error'>{error.productCategory.message}</p>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          className='box-heading'
          style={{ paddingTop: "45px" }}>
          <h3>Criteria ll</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component='fieldset' className='form-group'>
              <FormLabel component='legend'>Tednder ID</FormLabel>
              <select
                name='tenderID'
                value={inputs.tenderID}
                onChange={handleChange}
                class='form-control'>
                <option value=''>--select--</option>
                {selectOptions.map((item, index) => {
                  return <option>{item}</option>;
                })}
              </select>
              <p className='error'>{error.tenderID.message}</p>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12} className='captcha-content'>
            <FormControl component='fieldset' className='form-group'>
              <FormLabel component='legend'>Enter Captcha</FormLabel>
              <input
                name='captcha'
                value={inputs.captcha}
                onChange={handleChange}
                class='form-control'
              />
              <div className='captcha-text'>
                <h2>8T83TY</h2>
                <span>
                  <CachedIcon />
                </span>
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
    </Box>
  );
};
const mapStateToProps = (state) => {
  const { search_tender_by_type_status, search_tender_by_type_data } =
    state.vendorPortal;
  return { search_tender_by_type_status, search_tender_by_type_data };
};

export default connect(mapStateToProps)(TenderStatus);
