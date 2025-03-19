import { useState, useEffect } from "react";
import Container from "./components/Container/Container.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import SocialMedia from "./components/SocialMedia/SocialMedia.jsx";
import Opening from "./pages/Opening.jsx";
import CursorLight from "./components/CursorLight/CursorLight.jsx";

const AppRoute = () => {
  const [showOpening, setShowOpening] = useState(true);
  const [showMiddleNav, setShowMiddleNav] = useState(false);
  const [showLightBg, setShowLightBg] = useState(false);

  useEffect(() => {
    const deviceType = getDeviceType();

    if(deviceType==="DESKTOP") {
      setShowLightBg(true);
    } else setShowLightBg(false);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowOpening(false);
    }, 5000);

    if (window.innerWidth < 768) {
      setShowMiddleNav(true);
    }

    window.addEventListener("resize", (e) => {
      if (e.target.screen.width < 768) {
        setShowMiddleNav(true);
      } else setShowMiddleNav(false);
    });
  }, [setShowOpening, setShowMiddleNav]);

  function getDeviceType() {
    const userAgent = navigator.userAgent?.toLowerCase();
    
    if(userAgent?.includes("mobi")) return "MOBILE";
    else if((userAgent?.includes("tablet") || userAgent?.includes("ipad") || userAgent?.includes("android")) && !userAgent?.includes("mobile")) return "TABLET";
    return "DESKTOP";
  }

  return (
    <>
      {showOpening ? (
        <Opening showOpening={showOpening} />
      ) : (
        <div className="app_route_container">
          {!showMiddleNav ? <Header /> : null}
          {!showMiddleNav ? <SocialMedia /> : null}
          <Container showMiddleNav={showMiddleNav} />
          {/* <div className="light"></div> */}
          {/* <div className="custom_cursor"></div> */}
          
          <Footer />
          {showLightBg && <CursorLight />}
        </div>
      )}
    </>
  );
};

export default AppRoute;
