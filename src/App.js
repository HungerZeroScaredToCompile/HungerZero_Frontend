import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useEffect, useState } from "react";
import PrivateRoute from "./pages/PrivateRoute"
import NgoMaps from "./pages/NgoMaps";
import UserRegister from "./pages/UserRegister"
import UserLogin from "./pages/UserLogin";
import NgoRegister from "./pages/NgoRegister"
import NgoLogin from "./pages/NgoLogin";
import UserHome from "./pages/UserHome";
import NgoHome from "./pages/NgoHome";
import Calendar from "./pages/Calendar";
import NoMatch from "./pages/NoMatch"
import { LoginContext } from "./Contexts/LoginContext";


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
    <>
     {/* <LoginContext.Provider value={{username, setUsername, logged, setLogged}}>
     <Routes>
     
     <Route path={'/'} element={<LandingPage/>}/>

      <Route path={'/userregister'} element={<UserRegister/>}/>
      <Route path={'/userlogin'} element={<UserLogin/>}/>
     
      <Route path={'/ngoregister'} element={<NgoRegister/>}/>
      <Route path={'/ngologin'} element={<NgoLogin/>}/>
     
     
      <Route element={<PrivateRoute isLoggedIn={logged}/>}>
      
        <Route path={'/userhome'} element={<UserHome/>}/>
        <Route path={'/ngohome'} element={<NgoHome/>}/>
        <Route path={'/ngomaps'} element={<NgoMaps/>}/>
        <Route path={'/calendar'} element={<Calendar/>}/>
       
      </Route>
     
      <Route path="*" element={<NoMatch/>}/>

     </Routes>
      </LoginContext.Provider> */}

<UserHome/>
{/* <Calendar/> */}
{/* <NgoMaps/> */}
    
    
    </>
    
  );
}
export default App;
