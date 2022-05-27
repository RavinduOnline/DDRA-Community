import React from 'react';
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"

import Home from './components/Pages/Forum/Home/home';
import SignUp from './components/Pages/UserProfile/SignUp/signup'
import SignIn from './components/Pages/UserProfile/SignIn/signin'
import Profile from './components/Pages/UserProfile/Profile/profile'
import UserSetting from './components/Pages/UserProfile/UserSetting/usersetting';
import ResetPassword from './components/Pages/UserProfile/ResetPassword/resetpassword';
import UpdateProfile from './components/Pages/UserProfile/UpdateProfile/updateprofile';
import NewForum from './components/Pages/Forum/Home/newtopic';
import UpdateForum from './components/Pages/Forum/Home/updatetopic';
import ForumView from './components/Pages/Forum/ForumView/forumview';
import ProfileForum from './components/Pages/Forum/ProfileForum/profileforum';
import ProfileForumEdit from './components/Pages/Forum/ProfileForum/forumedit';
import ReplyUpdate from './components/Pages/Reply/replyupdate/replyupdate';
import AboutUs from './components/Pages/About Us/about';
import Test from './components/test';
import NotFound from './components/Pages/404/notfound';


function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/signup" element={<SignUp/>}/>
              <Route exact path="/signin" element={<SignIn/>}/>
              <Route exact path="/profile" element={<Profile/>}/>
              <Route exact path="/usersetting" element={<UserSetting/>}/>
              <Route exact path="/resetpassword" element={<ResetPassword/>}/>
              <Route exact path="/updateprofile" element={<UpdateProfile/>}/>
              <Route path="/add-forum" element={<NewForum/>}/>
              <Route path="/view-forum/:id" element={<ForumView/>}/>
              <Route path="/forumupdate/:id" element={<UpdateForum/>}/>
              <Route path="/profile-forum" element={<ProfileForum/>}/>
              <Route path="/profile-forum-edit" element={<ProfileForumEdit/>}/>
              <Route path="/replyupdate/:id" element={<ReplyUpdate/>}/>
              <Route path="/aboutus" element={<AboutUs/>}/>
              <Route path="/test" element={<Test/>}/>
              <Route path="*" element={<NotFound/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;

