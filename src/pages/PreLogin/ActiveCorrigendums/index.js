import React, { useState, useEffect } from 'react';
import TenderDetail from '../../../_components/tenderDetail';
import { corrigendumActions } from '../../../redux/_actions';
import { connect } from 'react-redux';
import { status } from '../../../redux/_constants/commonDS';
import { Container, Grid, Box } from '@mui/material';
import Button from '@mui/material/Button';

const ActiveCorrigendum = (props) => {
  const { corrigendum_data, corrigendum_status, dispatch } = props;

  const [inputs, setInputs] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [corrigendumData, setCorrigendumData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  useEffect(() => {
    if (
      corrigendum_status &&
      corrigendum_status === status.SUCCESS &&
      corrigendum_data &&
      Object.keys(corrigendum_data).length > 0
    ) {
      setCorrigendumData([...corrigendum_data]);
    }
  }, [corrigendum_status, corrigendum_data]);

  const handleSubmit = () => {
    let validate = handleValidation(true);
    setIsSubmit(true);
    if (validate.isValid === true) {
      dispatch(corrigendumActions.searchCorrigendums(inputs));
      setInputs({ id: '', title: '', captcha: '' });
      setIsSubmit(false);
    }
  };
  const handleValidation = (isSubmited) => {
    const valiObj = {
      message: '',
      isValid: true,
    };
    const retData = {
      id: valiObj,
      title: valiObj,
      captcha: valiObj,
    };
    let isValid = true;
    if (isSubmited) {
      if (!inputs.id) {
        retData.id = {
          message: 'Tender Id is required',
          isValid: false,
        };
        isValid = false;
      }
      if (!inputs.title) {
        retData.title = {
          message: 'Tender title is required',
          isValid: false,
        };
        isValid = false;
      }
      if (!inputs.captcha) {
        retData.captcha = {
          message: 'Captch Value is required',
          isValid: false,
        };
        isValid = false;
      }
      retData.isValid = isValid;
    }
    return retData;
  };
  const validate = handleValidation(isSubmit);
  return (
    <div className="active-corrigendum-container">
      <Container fixed>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <div className="page-heading">
              <h1>Active Corrigendum</h1>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <Box className="white-box corrigendum-search-box">
              <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                  <div className="box-heading">
                    <h3>Search</h3>
                    <p>Loream ipsum doler sit amet</p>
                  </div>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item lg={4} md={12} sm={12}>
                      <div className="form-group">
                        <legend>Tender ID</legend>
                        <input
                          name="id"
                          placeholder="Tender ID"
                          className="form-control"
                          value={inputs.id}
                          onChange={handleChange}
                        />
                        <p className="error">{validate.id.message}</p>
                      </div>
                      <div className="form-group">
                        <legend>Tender Title</legend>
                        <input
                          name="title"
                          placeholder="Tender Title"
                          className="form-control"
                          value={inputs.title}
                          onChange={handleChange}
                        />
                        <p className="error">{validate.title.message}</p>
                      </div>
                      <div className="form-group">
                        <legend>Enter Captcha</legend>
                        <Grid container>
                          <Grid item lg={8} md={8} sm={8}>
                            <input
                              name="captcha"
                              placeholder="captcha"
                              className="form-control"
                              value={inputs.captcha}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item lg={4} md={8} sm={4}>
                            <span>ZGT12$%</span>
                          </Grid>
                        </Grid>
                        <p className="error">{validate.captcha.message}</p>
                      </div>
                      <div className="form-group-buttons">
                        <Button className="secondary-btn">Cancel</Button>
                        <Button className="success-btn" onClick={() => handleSubmit()}>
                          Submit
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        {corrigendumData && corrigendumData.length > 0 ? (
          <Box className="white-box tender-details-box">
            <Grid container justifyContent="center" alignItems="center">
              <Grid item lg={9} md={9} sm={12}>
                <TenderDetail tender={corrigendumData} />
              </Grid>
            </Grid>
          </Box>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { corrigendum_data, corrigendum_status } = state.vendorPortal;
  return { corrigendum_data, corrigendum_status };
};
export default connect(mapStateToProps)(ActiveCorrigendum);
