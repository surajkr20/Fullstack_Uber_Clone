
// src/components/MobileOnly.jsx
import React, { useEffect, useState } from "react";

const MobileViewOnly = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // check on mount
    window.addEventListener("resize", handleResize); // check on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h2>This app is optimized for mobile only. Please open it on a mobile device.</h2>
      </div>
    );
  }

  return <>{children}</>;
};

export default MobileViewOnly;
