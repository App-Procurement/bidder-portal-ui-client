import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useParams ,useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import routesPages from '../_routes/routePage';
import Sidebar from "../_components/_sideBar";
import HeaderBar from '../_components/headerBar';


function PostLogin(props) {
  const navigate = useNavigate()
  let userData=localStorage.getItem("data");
  const createRoutes = () => {
    const retData = routesPages.postLogin.map((route, index) => {
      return (route.element) ? (
        <Route
          key={index}
          path={route.path}
          name={route.name}
          element={<route.element navigate={navigate} />} />
      ) : (null);
    });
    return retData;
  };


  return (
    <div className="app-content">

      <Sidebar props={props} navigate={navigate} />
      <HeaderBar props={props} navigate={navigate} />
      
      <div className="main-page">
        {/* <Suspense fallback="loading"> */}
          <div className="page-content-view">
            <Routes>
              {createRoutes()}
            </Routes>
          </div>
        {/* </Suspense> */}
      </div>
    </div>
  )
}

export default PostLogin;
