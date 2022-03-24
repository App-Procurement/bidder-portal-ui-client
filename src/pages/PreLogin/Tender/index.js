import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import TenderDetail from '../../../_components/tenderDetail';
import { Box, Grid, Container, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const TypeOfTender = () => {
  const [inputs, setInputs] = useState({});
  const [range, setRang] = useState([1000, 10000]);
  const [issubmit, setIsssubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'from') {
      setRang([([range[0]] = value), range[1]]);
    } else if (name === 'to') {
      setRang([range[0], ([range[1]] = value)]);
    } else {
      setInputs({ ...inputs, [name]: value });
    }
  };
  const clearALL = () => {
    const clearAllInputs = {
      from: '',
      to: '',
      date: '',
      location: '',
    };
    clearRange();
    setInputs(clearAllInputs);
  };
  const clearRange = () => {
    setRang([1000, 1000]);
  };
  const clearDate = () => {
    setInputs({ date: '' });
  };
  const clearLocation = () => {
    setInputs({ location: '' });
  };
  const handleRange = (e, val) => {
    setRang([...val]);
  };

  return (
    <Box className="tender-filter-container">
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12}>
            <div className="filter-box">
              <Box className="white-box">
                <div className="heading-box">
                  <h3>Filter</h3>
                  <Button className="clear-link" onClick={clearALL}>
                    Clear All
                  </Button>
                </div>
                <div className="filter">
                  <div className="heading">
                    <strong>Organisation</strong>
                    <Button className="clear-link">Clear</Button>
                  </div>
                  <div className="values-box">
                    <ul className="values">
                      <li>
                        <CloseIcon /> Covid 19
                      </li>
                      <li>
                        <CloseIcon /> Paper and printing
                      </li>
                      <li>
                        <CloseIcon /> Transpostation
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter">
                  <div className="heading">
                    <strong>Tender Value</strong>
                    <Button className="clear-link" onClick={clearRange}>
                      Clear
                    </Button>
                  </div>
                  <div className="values-box">
                    <div className="slider">
                      <Slider
                        classes={'distance'}
                        getAriaLabel={() => 'Minimum distance'}
                        value={range}
                        onChange={(e, val) => handleRange(e, val)}
                        valueLabelDisplay="auto"
                        min={1000}
                        max={10000}
                        disableSwap
                      />
                    </div>
                    <div className="slider-input">
                      <input type="text" name="from" value={range[0]} onChange={handleChange} placeholder="0.00" />
                      <span>To</span>
                      <input type="text" name="to" value={range[1]} onChange={handleChange} placeholder="10000" />
                    </div>
                  </div>
                </div>
                <div className="filter">
                  <div className="heading">
                    <strong>Closed Date</strong>
                    <Button className="clear-link" onClick={clearDate}>
                      Clear
                    </Button>
                  </div>
                  <div className="values-box">
                    <input onChange={handleChange} name="date" value={inputs.date} type="date" className="datepicker" />
                  </div>
                </div>
                <div className="filter">
                  <div className="heading">
                    <strong>Location</strong>
                    <Button className="clear-link" onClick={clearLocation}>
                      Clear
                    </Button>
                  </div>
                  <div className="values-box">
                    <input
                      name="location"
                      type="text"
                      className="location-input"
                      value={inputs.location}
                      onChange={handleChange}
                      placeholder="Search"
                    />
                    <FormGroup className="location-links">
                      <FormControlLabel control={<Checkbox />} label="Telangna" />
                      <FormControlLabel control={<Checkbox />} label="Arunanchal Pradesh" />
                      <FormControlLabel control={<Checkbox />} label="Himachal Pradesh" />
                      <FormControlLabel control={<Checkbox />} label="Uttar Pradesh" />
                      <FormControlLabel control={<Checkbox />} label="Madhya Pradesh" />
                      <FormControlLabel control={<Checkbox />} label="Delhi" />
                    </FormGroup>
                  </div>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid item lg={9} md={9} sm={12}>
            <Box className="page-heading">
              <h1>Telangana Tenders</h1>
            </Box>
            <Box className="white-box">
              <TenderDetail />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TypeOfTender;
