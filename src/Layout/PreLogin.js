import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import routesPages from "../_routes/routePage";
import PreLoginHeader from "../_components/preLoginHeader";
// import {connect} from 'react-redux';
function PreLogin(props) {
  let url = useParams();
  const navigate = useNavigate();
  let [toggleSearch, setToggleSearch] = useState(false);
  useEffect(() => {
    setToggleSearch(url["*"] === "");
  }, [toggleSearch, url]);

  const createRoutes = () => {
    const retData = routesPages.preLogin.map((route, index) => {
      return route.element ? (
        <Route
          key={index}
          path={route.path}
          name={route.name}
          element={<route.element navigate={navigate} />}
        />
      ) : null;
    });
    return retData;
  };

  return (
    <div className="app-content">
      <PreLoginHeader
        props={props}
        navigate={navigate}
        toogleSearch={toggleSearch}
      />
      <div className="main-page-prelogin">
        {/* <Suspense fallback="loading"> */}
        <div className="page-content-view">
          <Routes>{createRoutes()}</Routes>
        </div>
        {/* </Suspense> */}
      </div>
    </div>
  );
}
export default PreLogin;
