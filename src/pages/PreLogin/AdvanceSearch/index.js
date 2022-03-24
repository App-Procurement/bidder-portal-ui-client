import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';
import { connect } from 'react-redux';
import { advancedSearch } from '../../../redux/_actions';
const AdvancedSearch = (props) => {
  const { navigate, dispatch, search_status, search_data } = props;
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState(['abc', 'def', 'ghi', 'jkl']);
  const [issubmit, setIsssubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = () => {
    setIsssubmit(true);
    const retData = checkValidation(true);
    if (retData.isValid === true) {
      dispatch(advancedSearch.AdvancedSearchTender(inputs));
    }
  };
  const checkValidation = (isSubmitted) => {
    const validObj = {
      isValid: true,
      message: '',
    };
    let isValid = true;
    const retData = {
      tenderType: validObj,
      tenderID: validObj,
      department: validObj,
      work: validObj,
      contract: validObj,
      postal: validObj,
      paymentMode: validObj,
      valueCriteria: validObj,
      dateCriteria: validObj,
      tenderCategory: validObj,
      fromDate: validObj,
      toDate: validObj,
      enterCaptcha: validObj,
    };
    if (isSubmitted) {
      if (!inputs.tenderType) {
        retData.tenderType = {
          isValid: false,
          message: 'Tender Type Is Required',
        };
        isValid = false;
      }
      if (!inputs.tenderID) {
        retData.tenderID = {
          isValid: false,
          message: 'Tender ID is Required',
        };
        isValid = false;
      }
      if (!inputs.department) {
        retData.department = {
          isValid: false,
          message: 'Department is Required',
        };
        isValid = false;
      }
      if (!inputs.work) {
        retData.work = {
          isValid: false,
          message: 'Work/Item Title is Required',
        };
        isValid = false;
      }
      if (!inputs.contract) {
        retData.contract = {
          isValid: false,
          message: 'Form Of Contract is Requrited',
        };
        isValid = false;
      }
      if (!inputs.postal) {
        retData.postal = {
          isValid: false,
          message: 'Postal Code is required',
        };
        isValid = false;
      }
      if (!inputs.paymentMode) {
        retData.paymentMode = {
          isValid: false,
          message: 'Payment Mode is Required',
        };
        isValid = false;
      }
      if (!inputs.valueCriteria) {
        retData.valueCriteria = {
          isValid: false,
          message: 'Value Criteria is required',
        };
        isValid = false;
      }
      if (!inputs.dateCriteria) {
        retData.dateCriteria = {
          isValid: false,
          message: 'Date Criteria is Required',
        };
        isValid = false;
      }
      if (!inputs.tenderCategory) {
        retData.tenderCategory = {
          isValid: false,
          message: 'Tender Categoiry is Required',
        };
        isValid = false;
      }
      if (!inputs.fromDate) {
        retData.fromDate = {
          isValid: false,
          message: 'From Date Date is Required',
        };
        isValid = false;
      }
      if (!inputs.toDate) {
        retData.toDate = {
          isValid: false,
          message: 'To Date is Required',
        };
        isValid = false;
      }
      if (!inputs.enterCaptcha) {
        retData.enterCaptcha = {
          isValid: false,
          message: 'Captcha is Required',
        };
        isValid = false;
      }
    }
    retData.isValid = isValid;
    return retData;
  };
  const clearInputs = () => {
    const inputsValue = {
      tenderType: '',
      tenderID: '',
      department: '',
      work: '',
      contract: '',
      postal: '',
      tenderCategory: '',
      valueCriteria: '',
      dateCriteria: '',
      fromDate: '',
      tenderRefrenceNumber: '',
      workItem: '',
      paymentMode: '',
      toDate: '',
    };
    setInputs(inputsValue);
    setIsssubmit(false);
  };
  const error = checkValidation(issubmit);
  return (
    <Box className="advance-search-container">
      <Container fixed>
        <Grid container>
          <Grid item xs={12}>
            <div className="page-title">
              <h1>Advanced Search</h1>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <Box className="white-box" sx={{ flexGrow: 1 }}>
              <Grid container spacing={0} className="box-heading">
                <h3>Search</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </Grid>
              <Box className="search-form">
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6} lg={4}>
                    <FormControl component="fieldset" className="form-group">
                      <FormLabel component="legend">Tender Type</FormLabel>
                      <select name="tenderType" value={inputs.tenderType} onChange={handleChange} class="form-control">
                        <option value="">--select--</option>
                        {data.map((item, index) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                      <p className="error">{error.tenderType.message}</p>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <FormControl component="fieldset" className="form-group">
                      <FormLabel component="legend">Tender ID</FormLabel>
                      <input name="tenderID" value={inputs.tenderID} onChange={handleChange} class="form-control" />

                      <p className="error">{error.tenderID.message}</p>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <FormControl component="fieldset" className="form-group">
                      <FormLabel component="legend">Department</FormLabel>
                      <select name="department" value={inputs.department} onChange={handleChange} class="form-control">
                        <option value="">--select--</option>
                        {data.map((item, index) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                      <p className="error">{error.department.message}</p>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <FormControl component="fieldset" className="form-group">
                      <FormLabel component="legend">Work/Item Title</FormLabel>
                      <input name="work" value={inputs.work} onChange={handleChange} class="form-control" />

                      <p className="error">{error.work.message}</p>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <FormControl component="fieldset" className="form-group">
                      <FormLabel component="legend">Form Of Contract</FormLabel>
                      <select name="contract" value={inputs.contract} onChange={handleChange} class="form-control">
                        <option>--select--</option>
                        {data.map((item, index) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                      <p className="error">{error.contract.message}</p>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <FormControl component="fieldset" className="form-group">
                      <FormLabel component="legend">Postal Code</FormLabel>
                      <input
                        name="postal"
                        value={inputs.postal}
                        onChange={handleChange}
                        class="form-control"
                        placeholder="Postal code"
                      />

                      <p className="error">{error.postal.message}</p>
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
                        {data.map((item, index) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                      <p className="error">{error.paymentMode.message}</p>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <FormControl component="fieldset" className="form-group">
                      <FormLabel component="legend">Value Criteria</FormLabel>
                      <select
                        name="valueCriteria"
                        value={inputs.valueCriteria}
                        onChange={handleChange}
                        class="form-control"
                      >
                        <option value="">select</option>
                        {data.map((item, index) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                      <p className="error">{error.valueCriteria.message}</p>
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
                        {data.map((item, index) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                      <p className="error">{error.dateCriteria.message}</p>
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
                        {data.map((item, index) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                      <p className="error">{error.tenderCategory.message}</p>
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
                  <Grid item xs={12} md={6} lg={4} className="captcha-content ">
                    <FormControl component="fieldset" className="form-group">
                      <FormLabel component="legend">Enter Captcha</FormLabel>
                      <input
                        name="enterCaptcha"
                        value={inputs.enterCaptcha}
                        onChange={handleChange}
                        class="form-control"
                      />
                      <p className="error">{error.enterCaptcha.message}</p>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} className="captcha-content">
                    <div className="captcha-text">
                      <h2>8T83TY</h2>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <div className="form-buttons">
              <Button onClick={clearInputs} variant="contained" className="secondary-btn">
                Clear
              </Button>
              <Button onClick={handleSubmit} variant="contained" className="success-btn">
                Search
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
const mapStateToProps = (state) => {
  const { search_status, search_data } = state.vendorPortal;
};
export default connect(mapStateToProps)(AdvancedSearch);
