import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import CachedIcon from "@mui/icons-material/Cached";
import { connect } from "react-redux";
import { advancedSearch } from "../../../redux/_actions";
import { status } from "../../../redux/_constants/commonDS";

const AdvancedTender = (props) => {
  const { navigate, dispatch, search_status, search_data, tender_criteria_status, tender_criteria_data } = props;
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState(["abc", "def", "ghi", "jkl"]);
  const [issubmit, setIsssubmit] = useState(false);
  const [criteriaData, setCriteriaData] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  useEffect(() => {
    dispatch(advancedSearch.tenderCriteria())
  }, []);
  useEffect(() => {
    if (tender_criteria_status && tender_criteria_status === status.SUCCESS) {
      if (tender_criteria_data && Object.keys(tender_criteria_data).length > 0) {
        if (Object.keys(criteriaData).length == 0) {
          setCriteriaData({ ...tender_criteria_data });
        }
      }
    }
  }, [tender_criteria_status, tender_criteria_data]);
  const handleSubmit = () => {
    setIsssubmit(true);
    const retData = checkValidation(true);
    if (retData.isValid === true) {
      dispatch(advancedSearch.AdvancedSearchTender(inputs));
    }
  };
  function handleOptions(options) {
    const retData = []
    retData.push(options.map((item) => (
      <option key={item.id}>{item.label}</option>
    ))
    )
    return retData
  }
  const checkValidation = (isSubmitted) => {
    const validObj = {
      isValid: true,
      message: "",
    };
    let isValid = true;
    const retData = {
      tenderType: validObj,
      tenderID: validObj,
      department: validObj,
      productCategory: validObj,
      tenderCategory: validObj,
      pincode: validObj,
      dateCriteria: validObj,
      fromDate: validObj,
      tenderRefrenceNumber: validObj,
      workItem: validObj,
      paymentMode: validObj,
      toDate: validObj,
      enterCaptcha: validObj,
    };
    if (isSubmitted) {
      if (!inputs.tenderType) {
        retData.tenderType = {
          isValid: false,
          message: "Tender Type Is Required",
        };
        isValid = false;
      }
      if (!inputs.tenderID) {
        retData.tenderID = {
          isValid: false,
          message: "Tender ID is Required",
        };
        isValid = false;
      }
      if (!inputs.department) {
        retData.department = {
          isValid: false,
          message: "Department is Required",
        };
        isValid = false;
      }
      if (!inputs.productCategory) {
        retData.productCategory = {
          isValid: false,
          message: "Product Category is Requrited",
        };
        isValid = false;
      }
      if (!inputs.tenderCategory) {
        retData.tenderCategory = {
          isValid: false,
          message: "Tender Category is required",
        };
        isValid = false;
      }
      if (!inputs.pincode) {
        retData.pincode = {
          isValid: false,
          message: "Pincode is required",
        };
        isValid = false;
      }
      if (!inputs.dateCriteria) {
        retData.dateCriteria = {
          isValid: false,
          message: "Date Criteria is Required",
        };
        isValid = false;
      }
      if (!inputs.fromDate) {
        retData.fromDate = {
          isValid: false,
          message: "From Date Date is Required",
        };
        isValid = false;
      }
      if (!inputs.tenderRefrenceNumber) {
        retData.tenderRefrenceNumber = {
          isValid: false,
          message: "Tender Refrence Number is Required",
        };
        isValid = false;
      }
      if (!inputs.workItem) {
        retData.workItem = {
          isValid: false,
          message: "Work Item is Required",
        };
        isValid = false;
      }
      if (!inputs.paymentMode) {
        retData.paymentMode = {
          isValid: false,
          message: "Payment Mode is Required",
        };
        isValid = false;
      }
      if (!inputs.toDate) {
        retData.toDate = {
          isValid: false,
          message: "To Date is Required",
        };
        isValid = false;
      }
      if (!inputs.enterCaptcha) {
        retData.enterCaptcha = {
          isValid: false,
          message: "Captcha is Required",
        };
        isValid = false;
      }
    }
    retData.isValid = isValid;
    return retData;
  };
  const clearInputs = () => {
    const inputsValue = {
      tenderType: "",
      tenderID: "",
      department: "",
      productCategory: "",
      tenderCategory: "",
      pincode: "",
      dateCriteria: "",
      fromDate: "",
      tenderRefrenceNumber: "",
      workItem: "",
      paymentMode: "",
      toDate: "",
    };
    setInputs(inputsValue);
    setIsssubmit(false);
  };
  const error = checkValidation(issubmit);
  return (
    <Box className="search-tender-container">
      <Grid item xs={12}>
        <div className="page-title">
          <h1>Advanced Tender Search</h1>
          <p>
            Please Select the Classification From the Drop Dwan Box Below fore
            more tender Related to the Particular From of Contract
          </p>
        </div>
      </Grid>
      <Box className="white-box" sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} className="box-heading">
          <h3>Criteria |</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Tender Type</FormLabel>
              <select
                name="tenderType"
                value={inputs.tenderType}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">--select--</option>
                {
                  Object.keys(criteriaData).length > 0 && handleOptions(criteriaData.category)
                }
              </select>
              <p className="error">{error.tenderType.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Tender ID</FormLabel>
              <select
                name="tenderID"
                value={inputs.tenderID}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">--select--</option>
                {Object.keys(criteriaData).length > 0 && handleOptions(criteriaData.tenderId)

                }
              </select>
              <p className="error">{error.tenderID.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Tender Reference Number</FormLabel>
              <select
                name="tenderRefrenceNumber"
                value={inputs.tenderRefrenceNumber}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">--select--</option>
                {
                  Object.keys(criteriaData).length > 0 && handleOptions(criteriaData.tenderRefNum)
                }
              </select>
              <p className="error">{error.tenderRefrenceNumber.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Department</FormLabel>
              <select
                name="department"
                value={inputs.department}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">--select--</option>
                {
                  Object.keys(criteriaData).length > 0 && handleOptions(criteriaData.department)
                }
              </select>
              <p className="error">{error.department.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Product Category</FormLabel>
              <select
                name="productCategory"
                value={inputs.productCategory}
                onChange={handleChange}
                class="form-control"
              >
                <option>--select--</option>
                {
                  Object.keys(criteriaData).length > 0 && handleOptions(criteriaData.productCategory)
                }
              </select>
              <p className="error">{error.productCategory.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Work Item / Title</FormLabel>
              <select
                name="workItem"
                value={inputs.workItem}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">--select--</option>
                {
                  Object.keys(criteriaData).length > 0 && handleOptions(criteriaData.status)
                }
              </select>
              <p className="error">{error.workItem.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Tender Category</FormLabel>
              <select
                name="tenderCategory"
                value={inputs.tenderCategory}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">--select--</option>
                {
                  Object.keys(criteriaData).length > 0 && handleOptions(criteriaData.category)
                }
              </select>
              <p className="error">{error.tenderCategory.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Pincode</FormLabel>
              <input
                name="pincode"
                value={inputs.pincode}
                onChange={handleChange}
                class="form-control"
              />
              <p className="error">{error.pincode.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Payment Mode</FormLabel>
              <select
                name="paymentMode"
                value={inputs.paymentMode}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">--select--</option>
                {
                  Object.keys(criteriaData).length > 0 && handleOptions(criteriaData.paymentMode)
                }
              </select>
              <p className="error">{error.paymentMode.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Date Criteria</FormLabel>
              <select
                name="dateCriteria"
                value={inputs.dateCriteria}
                onChange={handleChange}
                class="form-control"
              >
                <option value="">--select--</option>
                {
                  Object.keys(criteriaData).length > 0 && handleOptions(criteriaData.dateCriteria)
                }
              </select>
              <p className="error">{error.dateCriteria.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">From Date</FormLabel>
              <input
                name="fromDate"
                value={inputs.fromDate}
                onChange={handleChange}
                type="date"
                class="form-control"
              />
              <p className="error">{error.fromDate.message}</p>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">To Date</FormLabel>
              <input
                name="toDate"
                value={inputs.toDate}
                onChange={handleChange}
                type="date"
                class="form-control"
              />
              <p className="error">{error.toDate.message}</p>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12} className="captcha-content ">
            <FormControl component="fieldset" className="form-group">
              <FormLabel component="legend">Enter Captcha</FormLabel>
              <input
                name="enterCaptcha"
                value={inputs.enterCaptcha}
                onChange={handleChange}
                class="form-control"
              />
              <div className="captcha-text">
                <h2>8T83TY</h2>
                <span>
                  <CachedIcon />
                </span>
                <p>Refresh</p>
              </div>
              <p className="error">{error.enterCaptcha.message}</p>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12} lg={12}>
            <div className="form-buttons">
              <Button
                onClick={clearInputs}
                variant="contained"
                className="error-btn"
              >
                Clear
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                className="success-btn"
              >
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
  const { search_status, search_data, tender_criteria_status, tender_criteria_data } = state.vendorPortal;
  return { tender_criteria_status, tender_criteria_data };
};
export default connect(mapStateToProps)(AdvancedTender);
