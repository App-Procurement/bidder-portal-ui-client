import React, { Suspense } from 'react';
import { Routes, Route, } from 'react-router-dom';
import './assets/scss/styles.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostLogin from './Layout/PostLogin';
import PreLogin from './Layout/PreLogin';
function App(props) {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/*" element={<PreLogin props={props}/>}/>
        <Route path="/bidder-portal/*" element={<PostLogin props={props} /> } />
      </Routes>
      <ToastContainer enableMultiContainer containerId={'TOP_RIGHT'} position={toast.POSITION.TOP_RIGHT} />
    </Suspense>

  );
}

export default App;
