import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Box, Grid, Container, TextField, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { commonFunctions } from '../../../_uttils/commonFunction';

const BidderEnrollment = () => {
  const [inputs, setInputs] = useState({});
  const [issubmit, setIsssubmit] = useState(false);
  const [select, setSelect] = useState(['abc', 'def', 'ghi', 'jkl', 'mno']);
  const [mobileCode, setMobileCode] = useState(['+91', '001']);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = () => {
    setIsssubmit(true);
    const retData = checkValidation(true);
    if (retData.isValid === true) {
    }
  };
  const clearAllInputs = () => {
    const clearAllInputs = {
      loginID: '',
      email: '',
      mobileCode: '',
      mobileNo: '',
      companyName: '',
      registrationNumber: '',
      bidderType: '',
      registerdAddress: '',
      nameofPartners: '',
      prefentialBidder: '',
      city: '',
      state: '',
      postalCode: '',
      panNumber: '',
      establishmentYear: '',
      natureofBuisness: '',
      legalStatus: '',
      companyCategory: '',
      mrAndMrs: '',
      contactName: '',
      dateOfBirth: '',
      mobile: '',
      std: '',
      phoneNo: '',
      designation: '',
    };
    setInputs(clearAllInputs);
    setIsssubmit(false);
  };
  const checkValidation = (isSubmitted) => {
    const validObj = {
      isValid: true,
      message: '',
    };
    let isValid = true;
    const retData = {
      loginID: validObj,
      email: validObj,
      mobileCode: validObj,
      mobileNo: validObj,
      companyName: validObj,
      registrationNumber: validObj,
      bidderType: validObj,
      registerdAddress: validObj,
      nameofPartners: validObj,
      prefentialBidder: validObj,
      city: validObj,
      state: validObj,
      postalCode: validObj,
      panNumber: validObj,
      establishmentYear: validObj,
      natureofBuisness: validObj,
      legalStatus: validObj,
      companyCategory: validObj,
      mrAndMrs: validObj,
      contactName: validObj,
      dateOfBirth: validObj,
      mobile: validObj,
      std: validObj,
      phoneNo: validObj,
      designation: validObj,
    };
    if (isSubmitted) {
      if (!inputs.loginID) {
        retData.loginID = {
          isValid: false,
          message: 'Login ID is Required',
        };
        isValid = false;
      } else if (!commonFunctions.validateEmail(inputs.loginID)) {
        retData.loginID = {
          isValid: false,
          message: 'Enter a Valid Login Mail ID',
        };
        isValid = false;
      }

      if (!inputs.email) {
        retData.email = {
          isValid: false,
          message: 'Correspondece Email is Required',
        };
        isValid = false;
      } else if (!commonFunctions.validateEmail(inputs.email)) {
        retData.email = {
          isValid: false,
          message: 'Enter a Valid Email Required',
        };
        isValid = false;
      }

      if (!inputs.mobileCode) {
        retData.mobileCode = {
          isValid: false,
          message: 'Mobile Contry Code is Required',
        };
        isValid = false;
      }

      if (!inputs.mobileNo) {
        retData.mobileNo = {
          isValid: false,
          message: 'Mobile No is Required',
        };
        isValid = false;
      } else if (!commonFunctions.validMobile(inputs.mobileNo)) {
        retData.mobileNo = {
          isValid: false,
          message: 'Enter 10 Digits',
        };
        isValid = false;
      }

      if (!inputs.companyName) {
        retData.companyName = {
          isValid: false,
          message: 'Company Name is Required',
        };
        isValid = false;
      }
      if (!inputs.registrationNumber) {
        retData.registrationNumber = {
          isValid: false,
          message: 'Registration Number is Required',
        };
        isValid = false;
      }
      if (!inputs.bidderType) {
        retData.bidderType = {
          isValid: false,
          message: 'Bidder Type is Required',
        };
        isValid = false;
      }
      if (!inputs.registerdAddress) {
        retData.registerdAddress = {
          isValid: false,
          message: 'Registered Address is Required',
        };
        isValid = false;
      }
      if (!inputs.nameofPartners) {
        retData.nameofPartners = {
          isValid: false,
          message: 'Name of Partners is Required',
        };
        isValid = false;
      }
      if (!inputs.prefentialBidder) {
        retData.prefentialBidder = {
          isValid: false,
          message: 'Prefential Bidder is Required',
        };
        isValid = false;
      }
      if (!inputs.city) {
        retData.city = {
          isValid: false,
          message: 'City is Required',
        };
        isValid = false;
      }
      if (!inputs.state) {
        retData.state = {
          isValid: false,
          message: 'State is Required',
        };
        isValid = false;
      }
      if (!inputs.postalCode) {
        retData.postalCode = {
          isValid: false,
          message: 'Postal Code is Required',
        };
        isValid = false;
      }
      if (!inputs.panNumber) {
        retData.panNumber = {
          isValid: false,
          message: 'PAN / TAN Number is Required',
        };
        isValid = false;
      }
      if (!inputs.establishmentYear) {
        retData.establishmentYear = {
          isValid: false,
          message: 'Establishment Year is Required',
        };
        isValid = false;
      }
      if (!inputs.natureofBuisness) {
        retData.natureofBuisness = {
          isValid: false,
          message: 'Nature of Buisness is Required',
        };
        isValid = false;
      }
      if (!inputs.legalStatus) {
        retData.legalStatus = {
          isValid: false,
          message: 'Legal Status is Required',
        };
        isValid = false;
      }
      if (!inputs.companyCategory) {
        retData.companyCategory = {
          isValid: false,
          message: 'Company Category is Required',
        };
        isValid = false;
      }
      if (!inputs.mrAndMrs) {
        retData.mrAndMrs = {
          isValid: false,
          message: 'Mr or Mrs is Required',
        };
        isValid = false;
      }
      if (!inputs.contactName) {
        retData.contactName = {
          isValid: false,
          message: 'Contact Name is Required',
        };
        isValid = false;
      }
      if (!inputs.dateOfBirth) {
        retData.dateOfBirth = {
          isValid: false,
          message: 'Date of Birth is Required',
        };
        isValid = false;
      }
      if (!inputs.mobile) {
        retData.mobile = {
          isValid: false,
          message: 'Mobile Country Code is Required',
        };
        isValid = false;
      }
      if (!inputs.std) {
        retData.std = {
          isValid: false,
          message: 'STD / Landline No is Required',
        };
        isValid = false;
      } else if (!commonFunctions.validMobile(inputs.std)) {
        retData.std = {
          isValid: false,
          message: 'Enter a valid STD / Landline No',
        };
        isValid = false;
      }

      if (!inputs.phoneNo) {
        retData.phoneNo = {
          isValid: false,
          message: 'Mobile No is Required',
        };
        isValid = false;
      } else if (!commonFunctions.validMobile(inputs.phoneNo)) {
        retData.phoneNo = {
          isValid: false,
          message: 'Enter 10 Digits ',
        };
        isValid = false;

      }
      if (!inputs.designation) {
        retData.designation = {
          isValid: false,
          message: 'Designation is Required',
        };
        isValid = false;
      }
    }
    retData.isValid = isValid;
    return retData;
  };
  const error = checkValidation(issubmit);

  return (
    <Box className="bidder-enrollment-container">
      <Container fixed>
        <div className="breadcrumbs">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>/</li>
            <li>Online Bidder Enrollment</li>
          </ul>
        </div>
        <div className="bidder-enrollment-form">
          <h3>Bidder Enrollment</h3>
          <Box className="white-box">
            <Grid container spacing={4}>
              <Grid item lg={4} md={5} sm={12}>
                <div className="form-group">
                  <legend>Login Id</legend>
                  <TextField
                    name="loginID"
                    value={inputs.loginID}
                    onChange={handleChange}
                    id="outlined-basic"
                    placeholder="Login Id"
                    variant="outlined"
                    className="form-control"
                  />
                  <p>
                    Enter Your email address for login: id <span>eg:abc@ybl.com</span>
                  </p>
                  <p className="error">{error.loginID.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={5} sm={12}>
                <div className="form-group">
                  <legend>Correspondece Email</legend>
                  <TextField
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    id="outlined-basic"
                    placeholder="Correspondece Email"
                    variant="outlined"
                    className="form-control"
                  />
                  <p>Correspondece email same as your login id</p>
                  <p className="error">{error.email.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Country Code</legend>
                  <Grid container spacing={4}>
                    <Grid item lg={4} md={5} sm={12}>
                      <select
                        name="mobileCode"
                        value={inputs.mobileCode}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="">Select</option>
                        <option value="+91">+91</option>
                        <option value="+001">+001</option>
                      </select>
                      <p className="error">{error.mobileCode.message}</p>
                    </Grid>
                    <Grid item lg={8} md={7} sm={12}>
                      <TextField
                        name="mobileNo"
                        type="number"
                        value={inputs.mobileNo}
                        onChange={handleChange}
                        id="outlined-basic"
                        placeholder="Mobile Number"
                        variant="outlined"
                        className="form-control"
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                        }}
                      />
                      <p className="error">{error.mobileNo.message}</p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="bidder-enrollment-form">
          <h3>Company Details</h3>
          <Box className="white-box">
            <Grid container spacing={4}>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Company Name</legend>
                  <TextField
                    name="companyName"
                    value={inputs.companyName}
                    onChange={handleChange}
                    id="outlined-basic"
                    placeholder="Company Name"
                    variant="outlined"
                    className="form-control"
                  />
                  <p className="error">{error.companyName.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Registration Number</legend>
                  <TextField
                    name="registrationNumber"
                    value={inputs.registrationNumber}
                    onChange={handleChange}
                    id="outlined-basic"
                    placeholder="Registration Number"
                    variant="outlined"
                    className="form-control"
                  />
                  <p className="error">{error.registrationNumber.message}</p>
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={12}>
                <div className="form-group radio-btn">
                  <legend>Bidder Type</legend>
                  <RadioGroup
                    onChange={handleChange}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel name="bidderType" value="india" control={<Radio />} label="India" />
                    <FormControlLabel name="bidderType" value="foreigner" control={<Radio />} label="Foreigner" />
                  </RadioGroup>
                  <p className="error">{error.bidderType.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Registered Address</legend>
                  <TextField
                    name="registerdAddress"
                    value={inputs.registerdAddress}
                    onChange={handleChange}
                    id="outlined-multiline-static"
                    variant="outlined"
                    className="form-control"
                    multiline
                    rows={4}
                  />
                  <p className="error">{error.registerdAddress.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Name of Partners / Directors</legend>
                  <TextField
                    name="nameofPartners"
                    value={inputs.nameofPartners}
                    onChange={handleChange}
                    id="outlined-multiline-static"
                    variant="outlined"
                    className="form-control"
                    multiline
                    rows={4}
                  />
                  <p className="error">{error.nameofPartners.message}</p>
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={12}>
                <div className="form-group radio-btn">
                  <legend>Prefential Bidder</legend>
                  <RadioGroup
                    onChange={handleChange}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel name="prefentialBidder" value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel name="prefentialBidder" value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                  <p className="error">{error.prefentialBidder.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>City</legend>
                  <TextField
                    name="city"
                    value={inputs.city}
                    onChange={handleChange}
                    id="outlined-basic"
                    placeholder="City"
                    variant="outlined"
                    className="form-control"
                  />
                  <p className="error">{error.city.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>State</legend>
                  <select name="state" value={inputs.state} onChange={handleChange} className="form-control">
                    <option value="">Select</option>
                    {select.map((item, index) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                  <p className="error">{error.state.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Postal Code</legend>
                  <TextField
                    name="postalCode"
                    value={inputs.postalCode}
                    onChange={handleChange}
                    id="outlined-basic"
                    placeholder="Postal Code"
                    variant="outlined"
                    className="form-control"
                  />
                  <p className="error">{error.postalCode.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>PAN / TAN Number</legend>
                  <TextField
                    name="panNumber"
                    value={inputs.panNumber}
                    id="outlined-basic"
                    placeholder="PAN/TAN Number"
                    variant="outlined"
                    onChange={handleChange}
                    className="form-control"
                  />
                  <p className="error">{error.panNumber.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Establisment Year</legend>
                  <select
                    name="establishmentYear"
                    value={inputs.establishmentYear}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select</option>
                    {select.map((item, index) => {
                      return <option>{item}</option>;
                    })}
                  </select>
                  <p className="error">{error.establishmentYear.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={5} sm={12}>
                <div className="form-group">
                  <legend>Nature of Business</legend>
                  <TextField
                    name="natureofBuisness"
                    value={inputs.natureofBuisness}
                    id="outlined-basic"
                    placeholder="Nature of Business"
                    variant="outlined"
                    onChange={handleChange}
                    className="form-control"
                  />
                  <p className="error">{error.natureofBuisness.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Legal Status</legend>
                  <select
                    name="legalStatus"
                    onChange={handleChange}
                    value={inputs.legalStatus}
                    className="form-control"
                  >
                    <option value="">Select</option>
                    {select.map((item, index) => {
                      return <option>{item}</option>;
                    })}
                  </select>
                  <p className="error">{error.legalStatus.message}</p>
                </div>
              </Grid>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Company Category</legend>
                  <select
                    name="companyCategory"
                    onChange={handleChange}
                    value={inputs.companyCategory}
                    className="form-control"
                  >
                    <option value="">Select</option>
                    {select.map((item, index) => {
                      return <option>{item}</option>;
                    })}
                  </select>
                  <p className="error">{error.companyCategory.message}</p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="bidder-enrollment-form">
          <h3>Contact Details</h3>
          <Box className="white-box">
            <Grid container spacing={4}>
              <Grid item lg={4} md={6} sm={12}>
                <div className="form-group">
                  <legend>Title / Contact Name</legend>
                  <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={12}>
                      <select name="mrAndMrs" onChange={handleChange} value={inputs.mrAndMrs} className="form-control">
                        <option value="">Select</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs">Mrs</option>
                      </select>
                      <p className="error">{error.mrAndMrs.message}</p>
                    </Grid>
                    <Grid item lg={8} md={8} sm={12}>
                      <TextField
                        name="contactName"
                        value={inputs.contactName}
                        onChange={handleChange}
                        required
                        id="outlined-required"
                        placeholder="Name"
                        className="form-control"
                      />
                      <p className="error">{error.contactName.message}</p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={12}>
                <div className="form-group">
                  <legend>Date of Birth</legend>
                  <TextField
                    name="dateOfBirth"
                    value={inputs.dateOfBirth}
                    onChange={handleChange}
                    type="date"
                    className="form-control"
                  />
                  <p className="error">{error.dateOfBirth.message}</p>
                </div>
              </Grid>
              <Grid item lg={5} md={6} sm={12}>
                <div className="form-group">
                  <legend>Country Code </legend>
                  <Grid container spacing={2}>
                    <Grid item lg={3} md={3} sm={12}>
                      <select
                        name="mobile"
                        disabled={inputs.std ? 'true' : ''}
                        value={inputs.mobile}
                        onChange={handleChange}
                        className="form-control"
                      >
                        <option value="">Select</option>
                        {mobileCode.map((item, index) => {
                          return <option>{item}</option>;
                        })}
                      </select>
                      <p className="error">{inputs.std ? '' : error.mobile.message}</p>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12}>
                      <TextField
                        name="std"
                        type="number"

                        value={inputs.std}
                        id="outlined-select-currency"
                        disabled={inputs.mobile || inputs.phoneNo ? 'true' : ''}
                        input="text"
                        placeholder="STD"
                        onChange={handleChange}
                        className="form-control"
                      />
                      <p className="error">{inputs.phoneNo || inputs.mobile ? '' : error.std.message}</p>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12}>
                      <TextField
                        name="phoneNo"
                        type="number"

                        value={inputs.phoneNo}
                        onChange={handleChange}
                        disabled={inputs.std || inputs.std ? 'true' : ''}
                        id="outlined-select-currency"

                        // Type="text"
                        placeholder="Phone Number"
                        className="form-control"
                        onInput={(e) => {
                          e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                        }}
                      />
                      <p className="error">{inputs.std ? '' : error.phoneNo.message}</p>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item lg={12} md={12} sm={12}>
                <div className="form-group">
                  <legend>Designation</legend>
                  <TextField
                    name="designation"
                    value={inputs.designation}
                    id="outlined-select-currency"
                    Type="text"
                    placeholder="Designation"
                    onChange={handleChange}
                    className="form-control"
                    multiline
                    rows={4}
                  />
                  <p className="error">{error.designation.message}</p>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4} justifyContent="flex-end">
              <Grid item lg={4} md={12} sm={12}>
                <div className="bidder-enrollment-buttons">
                  <Button className="secondary-btn" variant="contained" onClick={clearAllInputs}>
                    Cancel
                  </Button>
                  <Button className="success-btn" variant="contained" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default BidderEnrollment;
