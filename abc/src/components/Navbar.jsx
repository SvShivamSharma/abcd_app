import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleSidebar, isSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  // Responsive CSS injected (same approach as Sidebar)
  React.useEffect(() => {
    const responsiveCSS = `
    @media (min-width: 768px) {
      .navbar-container {
        padding: 10px 32px !important;
      }
      .navbar-menu-icon {
        font-size: 32px !important;
      }
      .navbar-logo {
        font-size: 24px !important;
      }
      .navbar-support {
        padding: 12px 18px !important;
        font-size: 16px !important;
        border-bottom-left-radius: 25px !important;
      }
      .navbar-support img {
        height: 24px !important;
        width: 40px !important;
      }
    }
    `;
    let styleTag = document.getElementById("navbar-styles");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "navbar-styles";
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = responsiveCSS;
  }, []);

  return (
    <nav
      className="navbar-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "10px 20px",
        backgroundColor: "white",
        zIndex: 1001,
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          className="navbar-menu-icon"
          style={{
            fontSize: "6vw",
            cursor: "pointer",
            transition: "0.3s",
            userSelect: "none",
          }}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "✖" : "☰"}
        </div>

        <div
          className="navbar-logo"
          style={{
            color: "#b10023ff",
            fontWeight: "bold",
            fontSize: "4vw",
            cursor: "pointer",
          }}
          onClick={handleLogoClick}
        >
          My ABC
        </div>
      </div>

      <div
        className="navbar-support"
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          backgroundColor: "#DC143C",
          color: "lightyellow",
          padding: "15px 9px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          borderBottomLeftRadius: "25px",
        }}
        onClick={() => alert("Support clicked")}
      >
        <img
          src="/src/assets/support.png"
          alt="support"
          style={{ height: "20px", width: "40px" }}
        />
        <span style={{ marginLeft: "8px" }}>Support</span>
      </div>
    </nav>
  );
}
