import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/Pages/Dashboard/dashboard';
import SignIn from './components/Pages/SignIn/signin';
import ForgotPassword from './components/Pages/ForgotPassword/forgotpassword';
import TopicManagement from './components/Pages/TopicManagement/topicmanagement';
import WordFilter from './components/Pages/WorldFilter/wordfilter';
import Test from './components/test';
import NotFound from './components/Pages/404/notfound';


function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/login" element={<SignIn/>}/>
              <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
              <Route exact path="/topicmanagement" element={<TopicManagement/>}/>
              <Route exact path="/wordfilter" element={<WordFilter/>}/>
              <Route exact path="/test" element={<Test/>}/>
              <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
