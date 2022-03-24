import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CachedIcon from "@mui/icons-material/Cached";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { enrollmentActions } from "../../../redux/_actions";
import { connect } from "react-redux";
const Enrollment = (props) => {
  const { dispatch } = props;
  const [inputs, setInputs] = useState({});
  const [issubmit, setIsssubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    setIsssubmit(true);
    const retData = checkValidation(true);
    if (retData.isValid === true) {
      dispatch(enrollmentActions.enrollmentBidder(inputs));
    }
  };

  const checkValidation = (isSubmitted) => {
    let validObj = {
      isValid: true,
      message: "",
    };
    let isValid = true;
    let retData = {
      loginId: validObj,
      CorrespondenceEmail: validObj,
      number: validObj,
      mobile: validObj,
      CompanyName: validObj,
      RegistrationNo: validObj,
      PartnerDirector: validObj,
      RegistrationAddress: validObj,
      bidderType: validObj,
      City: validObj,
      Establishment: validObj,
      State: validObj,
      NatureBusiness: validObj,
      PostalCode: validObj,
      LegalStatus: validObj,
      PANTANNumber: validObj,
      CompanyCategory: validObj,
      Title: validObj,
      ContactNubmer: validObj,
      DateOfBirth: validObj,
      Designation: validObj,
      Captcha: validObj,
    };
    if (isSubmitted) {
      if (!inputs.loginId) {
        retData.loginId = {
          isValid: false,
          message: "Login ID is Required",
        };
        isValid = false;
      }
      if (!inputs.CorrespondenceEmail) {
        retData.CorrespondenceEmail = {
          isValid: false,
          message: "Correspondence Email is Required",
        };
        isValid = false;
      }
      if (!inputs.number) {
        retData.number = {
          isValid: false,
          message: "Number is Required",
        };
        isValid = false;
      }
      if (!inputs.mobile) {
        retData.mobile = {
          isValid: false,
          message: "Mobile is Required",
        };
        isValid = false;
      }
      if (!inputs.CompanyName) {
        retData.CompanyName = {
          isValid: false,
          message: "Company Name is Required",
        };
        isValid = false;
      }
      if (!inputs.RegistrationNo) {
        retData.RegistrationNo = {
          isValid: false,
          message: "Registration No is Required",
        };
        isValid = false;
      }
      if (!inputs.PartnerDirector) {
        retData.PartnerDirector = {
          isValid: false,
          message: "Partner Director is Required",
        };
        isValid = false;
      }
      if (!inputs.RegistrationAddress) {
        retData.RegistrationAddress = {
          isValid: false,
          message: "Registration Address is Required",
        };
        isValid = false;
      }
      if (!inputs.bidderType) {
        retData.bidderType = {
          isValid: false,
          message: "BidderType is Required",
        };
        isValid = false;
      }
      if (!inputs.City) {
        retData.City = {
          isValid: false,
          message: "City is Required",
        };
        isValid = false;
      }
      if (!inputs.Establishment) {
        retData.Establishment = {
          isValid: false,
          message: "Establishment is Required",
        };
        isValid = false;
      }
      if (!inputs.State) {
        retData.State = {
          isValid: false,
          message: "State is Required",
        };
        isValid = false;
      }
      if (!inputs.NatureBusiness) {
        retData.NatureBusiness = {
          isValid: false,
          message: "Nature of Business is Required",
        };
        isValid = false;
      }
      if (!inputs.PostalCode) {
        retData.PostalCode = {
          isValid: false,
          message: "Postal Code is Required",
        };
        isValid = false;
      }
      if (!inputs.LegalStatus) {
        retData.LegalStatus = {
          isValid: false,
          message: "LegalStatus is Required",
        };
        isValid = false;
      }
      if (!inputs.PANTANNumber) {
        retData.PANTANNumber = {
          isValid: false,
          message: "PAN/TAN/Number is Required",
        };
        isValid = false;
      }
      if (!inputs.CompanyCategory) {
        retData.CompanyCategory = {
          isValid: false,
          message: "Company Category is Required",
        };
        isValid = false;
      }
      if (!inputs.Title) {
        retData.Title = {
          isValid: false,
          message: "Title is Required",
        };
        isValid = false;
      }
      if (!inputs.ContactNubmer) {
        retData.ContactNubmer = {
          isValid: false,
          message: "Contact Nubmer is Required",
        };
        isValid = false;
      }
      if (!inputs.DateOfBirth) {
        retData.DateOfBirth = {
          isValid: false,
          message: "Date of Birth is Required",
        };
        isValid = false;
      }
      if (!inputs.Designation) {
        retData.Designation = {
          isValid: false,
          message: "Designation is Required",
        };
        isValid = false;
      }
      if (!inputs.Captcha) {
        retData.Captcha = {
          isValid: false,
          message: "Captcha is Required",
        };
        isValid = false;
      }
    }
    retData.isValid = isValid;
    return retData;
  };

  const error = checkValidation(issubmit);
  return (
    <Box className='dashboard-container enrollment-container'>
      <Grid container spacing={4}>
        <Grid item lg={8} md={12} xs={12}>
          <div className='page-title'>
            <h1>Online Enrollment of Bidder</h1>
            <p>
              programmers and printers with the aim of occupying the spaces of a
              website,
            </p>
          </div>
          <Box className='white-box left-box'>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Login Id:</FormLabel>
                  <input
                    name='loginId'
                    value={inputs.loginID}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />

                  <span>
                    {"Enter the e-mail address for login Id Eg: abc@mail.com"}
                  </span>
                  <span>
                    {
                      "{ care may be taken to enter valid E-mail ID. This Information will be kept Confidential the login ID cannot be modified once registered }"
                    }
                  </span>
                  <p className='error'>{error.loginId.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>
                    Correspondence E-mail
                  </FormLabel>
                  <input
                    name='CorrespondenceEmail'
                    value={inputs.CorrespondenceEmail}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <span>
                    {
                      "Correspondence E-mail ID can be same as your Login E-mail"
                    }
                  </span>
                  <p className='error'>{error.CorrespondenceEmail.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Mobile Number</FormLabel>
                  <Grid container spacing={4}>
                    <Grid item md={4} xs={12}>
                      <select
                        name='number'
                        value={inputs.number}
                        onChange={handleChange}
                        class='form-control'>
                        <option value=''>--select--</option>
                        <option value='1'>abd</option>
                        <option value='2'>bcd</option>
                      </select>
                      <p className='error'>{error.number.message}</p>
                    </Grid>
                    <Grid item md={8} xs={12}>
                      <input
                        name='mobile'
                        value={inputs.mobile}
                        onChange={handleChange}
                        class='form-control'
                        type='text'
                      />
                      <p className='error'>{error.mobile.message}</p>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <h3 style={{ marginTop: "30px" }}>Company Details</h3>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Company Name</FormLabel>
                  <input
                    name='CompanyName'
                    value={inputs.CompanyName}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.CompanyName.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Registration No</FormLabel>
                  <input
                    name='RegistrationNo'
                    value={inputs.RegistrationNo}
                    class='form-control'
                    type='text'
                    onChange={handleChange}
                  />
                  <p className='error'>{error.RegistrationNo.message}</p>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>
                    Named of the Partner / Director
                  </FormLabel>
                  <input
                    name='PartnerDirector'
                    value={inputs.PartnerDirector}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.PartnerDirector.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Registration Address</FormLabel>
                  <textarea
                    name='RegistrationAddress'
                    value={inputs.RegistrationAddress}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                    rows={5}
                  />
                  <p className='error'>{error.RegistrationAddress.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Bidder Type</FormLabel>
                  <RadioGroup
                    aria-labelledby='radio-buttons-group-label'
                    // defaultValue="indian"
                    name='bidderType'
                    row>
                    <FormControlLabel
                      value='indian'
                      onChange={handleChange}
                      control={<Radio />}
                      label='Indian'
                      className='radio-btn'
                    />
                    <FormControlLabel
                      value='foreign'
                      onChange={handleChange}
                      control={<Radio />}
                      label='Foreign'
                      className='radio-btn'
                    />
                  </RadioGroup>
                  <p className='error'>{error.bidderType.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>City</FormLabel>
                  <input
                    name='City'
                    value={inputs.City}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.City.message}</p>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Establishment</FormLabel>
                  <input
                    name='Establishment'
                    value={inputs.Establishment}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.Establishment.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>State</FormLabel>
                  <select
                    name='State'
                    value={inputs.State}
                    onChange={handleChange}
                    class='form-control'>
                    <option value=''>--select--</option>
                    <option value='1'>bcd</option>
                    <option value='2'>abc</option>
                  </select>
                  <p className='error'>{error.State.message}</p>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Nature of Business</FormLabel>
                  <input
                    name='NatureBusiness'
                    value={inputs.NatureBusiness}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.NatureBusiness.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Postal Code</FormLabel>
                  <input
                    name='PostalCode'
                    value={inputs.PostalCode}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.PostalCode.message}</p>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Legal Status</FormLabel>
                  <input
                    name='LegalStatus'
                    value={inputs.LegalStatus}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.LegalStatus.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>PAN/TAN Number</FormLabel>
                  <input
                    name='PANTANNumber'
                    value={inputs.PANTANNumber}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.PANTANNumber.message}</p>
                </FormControl>
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Company Category</FormLabel>
                  <input
                    name='CompanyCategory'
                    value={inputs.CompanyCategory}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.CompanyCategory.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <h3 style={{ marginTop: "30px" }}>Contact Details</h3>
                <p
                  style={{
                    fontSize: "13px",
                    paddingTop: "5px",
                    color: "#aaaaaa",
                  }}>
                  Enter Company's Contact Person Details
                </p>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Title</FormLabel>
                  <select
                    name='Title'
                    value={inputs.Title}
                    onChange={handleChange}
                    class='form-control'>
                    <option value=''>--select--</option>
                    <option value='1'>bcd</option>
                    <option value='2'>abc</option>
                  </select>
                  <p className='error'>{error.Title.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Contact Nubmer</FormLabel>
                  <input
                    name='ContactNubmer'
                    value={inputs.ContactNubmer}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.ContactNubmer.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>
                    Date of Birth (DD/MM/YYYY)
                  </FormLabel>
                  <input
                    name='DateOfBirth'
                    value={inputs.DateOfBirth}
                    onChange={handleChange}
                    class='form-control'
                    type='date'
                  />
                  <p className='error'>{error.DateOfBirth.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Designation</FormLabel>
                  <input
                    name='Designation'
                    value={inputs.Designation}
                    onChange={handleChange}
                    class='form-control'
                    type='text'
                  />
                  <p className='error'>{error.Designation.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={0}>
              <Grid item xs={12} md={12} lg={12} className='captcha-content'>
                <FormControl component='fieldset' className='form-group'>
                  <FormLabel component='legend'>Enter Captcha</FormLabel>
                  <input
                    name='Captcha'
                    value={inputs.Captcha}
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
                  <p className='error'>{error.Captcha.message}</p>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12} lg={12}>
                <div className='form-buttons'>
                  <Button variant='contained' className='secondary-btn'>
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    variant='contained'
                    className='success-btn'>
                    Submit
                  </Button>
                </div>
              </Grid>
            </Grid>
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
                  defaultValue='Advance search'
                  helperText='Search with a ID / Title / Reference No'
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
  const { enrolment_status, enrollment_data } = state.vendorPortal;
  return { enrolment_status, enrollment_data };
};
export default connect(mapStateToProps)(Enrollment);
