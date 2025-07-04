import "./App.css";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainHome from "./pages/CaptainHome";
import CaptainLogout from "./pages/CaptainLogout";
import MobileViewOnly from "./MobileViewOnly";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";

function App() {
  return (
    <MobileViewOnly>
      <div className="app">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-signup" element={<UserSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
          <Route
            path="/riding"
            element={
              <UserProtectedWrapper>
                <Riding />
              </UserProtectedWrapper>
            }
          />
          <Route
            path="/captain-riding"
            element={
              <CaptainProtectedWrapper>
                <CaptainRiding />
              </CaptainProtectedWrapper>
            }
          />
          <Route
            path="/users/logout"
            element={
              <UserProtectedWrapper>
                <UserLogout />
              </UserProtectedWrapper>
            }
          />
          <Route
            path="/captains/logout"
            element={
              <CaptainProtectedWrapper>
                <CaptainLogout />
              </CaptainProtectedWrapper>
            }
          />
          <Route
            path="/home"
            element={
              <UserProtectedWrapper>
                <Home />
              </UserProtectedWrapper>
            }
          />
          <Route
            path="/captain-home"
            element={
              <CaptainProtectedWrapper>
                <CaptainHome />
              </CaptainProtectedWrapper>
            }
          />
        </Routes>
      </div>
    </MobileViewOnly>
  );
}

export default App;
