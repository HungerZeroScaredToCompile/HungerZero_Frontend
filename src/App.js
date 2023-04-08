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
import { useEffect } from "react";
import { useState } from "react";


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

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="community" element={<Community />} />
      <Route path="donations" element={<Donations />} />
      <Route
       path="userprofile" element={<UserProfile />} />
       <Route path="reward" element={<Reward />} />
       <Route
        path="feedback" element={<NGOFeedback />} />
         <Route path="notificationuser" element={<NotificationUser/>} />
         <Route path="notificationngo" element={<NotificationNgo/>} />
    </Routes>
  );
}
export default App;
