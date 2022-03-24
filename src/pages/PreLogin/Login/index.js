import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { status } from '../../../redux/_constants/commonDS';
import { authAction } from '../../../redux/_actions';
import { commonFunctions } from '../../../_uttils';
import { Container, Grid, Box } from '@mui/material';
import Button from '@mui/material/Button';

const Login = (props) => {
  const [inputs, setInputs] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  useEffect(() => {
    // let data = JSON.parse(localStorage.getItem("data"));
    // console.log(data);
    if (props.login_status === status.SUCCESS) {
      // localStorage.removeItem("data");
      // localStorage.setItem("data", JSON.stringify(props.login_data));
      props.navigate('/bidder-portal');
      // console.log(JSON.parse(localStorage .getItem("data")));
    }
  }, [props.login_status]);

  const handleSubmit = (e) => {
    setIsSubmit(true);
    let validate = handleValidation(true);
    if (validate.isValid === true) {
      props.dispatch(authAction.login(inputs));
      setInputs({ email: '', password: '' });
      setIsSubmit(false);
    }

    if (localStorage.getItem('userLoginData') === null && validate.isValid) {
      localStorage.setItem('userLoginData', JSON.stringify(inputs));
    }
  };

  const handleValidation = (isSubmitted) => {
    const validObj = {
      isValid: true,
      messageError: '',
    };
    const retData = {
      email: validObj,
      password: validObj,
    };
    let isValid = true;

    if (isSubmitted) {
      if (!inputs.email) {
        retData.email = {
          validObj: false,
          messageError: 'Email is Required',
        };
        isValid = false;
      } else if (!commonFunctions.validateEmail(inputs.email)) {
        retData.email = {
          validObj: false,
          messageError: 'Invalid email',
        };
        isValid = false;
      }

      if (!inputs.password) {
        retData.password = {
          validObj: false,
          messageError: 'Password is required',
        };
        isValid = false;
      } else if (!commonFunctions.passwordValidation(inputs.password)) {
        retData.password = {
          validObj: false,
          messageError: 'Invalid Password',
        };
        isValid = false;
      }
    }
    retData.isValid = isValid;
    return retData;
  };

  const validate = handleValidation(isSubmit);
  return (
    <div className="login-container">
      <Container fixed>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item lg={5} md={7} sm={12}>
            <Box className="white-box">
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  value={inputs.email}
                  onChange={handleChange}
                  className="form-control"
                />
                <p className="error">{validate.email.messageError}</p>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  value={inputs.password}
                  onChange={handleChange}
                  className="form-control"
                />
                <p className="error">{validate.password.messageError}</p>
              </div>
              <Button className="success-btn" onClick={handleSubmit}>
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { login_status, login_data } = state.vendorPortal;
  return {
    login_status,
    login_data,
  };
};
export default connect(mapStateToProps)(Login);
