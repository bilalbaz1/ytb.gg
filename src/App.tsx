import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutPage from './views/aboutPage/AboutPage';
import ErrorPage from './views/errorPage/ErrorPage';
import HomePage from './views/homePage/HomePage';
import VideoRedirectPage from './views/videoRedirectPage/VideoRedirectPage';

function App() {

  let [url, setUrl] = useState("");


  return (



    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage urlAndSetUrl={{ url, setUrl }} />}
        />
        <Route
          path="/*"
          element={<VideoRedirectPage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </Router>


    // <div className="App" >
    //   <header className="App-header" >
    //     <HomeBody urlAndSetUrl={{ url, setUrl }} />
    //   </header>
    // </div>
  );
}

export default App;
