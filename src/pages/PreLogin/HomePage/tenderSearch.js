import React, { useState, useEffect } from 'react';
import { Grid, Box, Link } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GroupIcon from '@mui/icons-material/Group';
import { connect } from 'react-redux';
import { searchTenderTypes } from '../../../redux/_actions';
import { status } from '../../../redux/_constants/commonDS';

const TenderSearch = (props) => {
  const { dispatch, tender_type_status, tender_type_data, navigate } = props;
  const [tenderData, setTenderData] = useState([]);
  let [type, setType] = useState('subCategory');
  let [subType, setSubType] = useState('');

  useEffect(() => dispatch(searchTenderTypes.searchTenderType()), []);
  useEffect(() => {
    if (tender_type_status === status.SUCCESS && tender_type_data && tender_type_data.length > 0) {
      setTenderData([...tender_type_data]);
    }
  }, [tender_type_status, tender_type_data]);

  const leftNav = (type) => {

    let retData = [];
    let list = {};
    for (let value of tenderData) {
      list[value[type]] = list[value[type]] + 1 || 1;
    }
    if (Object.keys(list).length > 0 && subType === '') {
      subType = Object.keys(list)[0];
    }
    Object.keys(list).length > 0 ? (
      retData.push(
        Object.keys(list).map((val, index) => (
          <li
            key={index}
            onClick={() => {
              setSubType(val);
            }}
            className={subType === val ? "active" : ""}
          >
            <span className="icon">
              <GroupIcon />
            </span>
            <span className="value">{val}</span>
            <span className="arrow">
              <ArrowForwardIosIcon />
            </span>
          </li>
        ))
      )
    ) : (
      <>..loading</>
    );
    return retData;

  };

  const rightNav = (sub) => {
    let list = [];
    let retData = [];
    for (let value of tenderData) {
      if (value[type] === sub) {
        list.push(value);

        retData.push(
          <Grid item lg={4}>
            <Link
              key={value.id}
              onClick={() => {
                navigate(`/tender-search`);
              }}
            >
              <span className="value">{value[type === 'state' ? 'city' : 'subCategory']}</span>
              <ArrowRightAltIcon />
            </Link>
          </Grid>
        );
      }
    }
    return retData;
  };

  return (
    <Box className="tender-data">
      {tenderData && tenderData.length > 0 ? (
        <ul className="tender-data-tabs">
          <li
            onClick={() => {
              setType('subCategory');
              setSubType('');
            }}
            className={type === "subCategory" ? "active" : ""}
          >
            Top-Category
          </li>
          <li
            onClick={() => {
              setType('department');
              setSubType('');
            }}
            className={type === "department" ? "active" : ""}
          >
            Department
          </li>

          <li
            onClick={() => {
              setType('state');
              setSubType('');
            }}
            className={type === "state" ? "active" : ""}
          >
            Location
          </li>
        </ul>
      ) : (
        <> ...Loading</>
      )}
      <div className="tender-data-content">
        <Grid container>
          <Grid item lg={3} md={3} xs={6}>
            <ul className="tender-data-category">
              {tenderData && tenderData.length > 0 && type.length > 0 && leftNav(type)}
            </ul>
          </Grid>
          <Grid item lg={9} md={9} xs={6}>
            <div className="tender-data-links">
              <Grid container spacing={3}>
                {tenderData && tenderData.length > 0 && rightNav(subType)}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
const mapStateToProps = (state) => {
  const { tender_type_status, tender_type_data } = state.vendorPortal;
  return { tender_type_data, tender_type_status };
};
export default connect(mapStateToProps)(TenderSearch);
