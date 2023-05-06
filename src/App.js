import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import Community from "./pages/Community";
import Donations from "./pages/Donations";
import UserProfile from "./pages/UserProfile";
import Reward from "./pages/Reward";
import NGOFeedback from "./pages/NGOFeedback";
import NotificationUser from "./pages/NotificationUser";
import NotificationNgo from "./pages/NotificationNgo";
import NgoMaps from "./pages/NgoMaps";
import Calendar from "./pages/Calendar";
import UserHome from "./pages/UserHome";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import NgoLogin from "./pages/NgoLogin";
import NgoRegister from "./pages/NgoRegister";
import PrivateRoute from "./pages/PrivateRoute";
import NgoHome from "./pages/NgoHome";
import NGOProfileUser from "./pages/NGOProfileUser";
import Analysis from "./pages/Ananlysis";
import UserMap from "./pages/UserMap";
import { useEffect } from "react";
import { useState } from "react";
import { LoginContext } from "./Contexts/LoginContext";
import Nutrition from "./pages/Nutrition";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  const [logged, setLogged]= useState(false);
  const [username, setUsername]= useState("")

  return (
    
    <LoginContext.Provider value={{setUsername, username, logged, setLogged}}>
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path={'/userregister'} element={<UserRegister/>}/>
      <Route path={'/userlogin'} element={<UserLogin/>}/>
      
     
      <Route path={'/ngoregister'} element={<NgoRegister/>}/>
      <Route path={'/ngologin'} element={<NgoLogin/>}/>
      <Route path={'/analysis'} element={<Analysis />}/>
     
      <Route path={'/userhome'} element={<UserHome/>}/>
      <Route path={'/userhome/usermap'} element={<UserMap />}/>
        
        <Route path={'/userhome/ngoprofileuser'} element={<NGOProfileUser/>}/> 
        <Route path={'/calendar'} element={<Calendar/>}/>
      <Route path="/userhome/contact" element={<ContactUs />} />
      <Route path="/userhome/community" element={<Community />} />
      <Route path="/userhome/donations" element={<Donations />} />
      <Route
       path={'/userprofile'} element={<UserProfile />} />

         <Route path="/userhome/notificationuser" element={<NotificationUser/>} />
         <Route path="notificationngo" element={<NotificationNgo/>} />
         

<Route path={'/ngohome'} element={<NgoHome/>}/>
        <Route path={'/ngomaps'} element={<NgoMaps/>}/>
        <Route path="reward" element={<Reward />} />
        <Route path="/nutrition" element={<Nutrition />} />
       <Route
        path="/ngohome/feedback" element={<NGOFeedback />} />
    </Routes>
    
    </LoginContext.Provider>
    
    
  );
}
export default App;
