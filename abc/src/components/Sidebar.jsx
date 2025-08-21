import { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

export default function Sidebar() {
  const [openSpace, setOpenSpace] = useState(false);
  const [openPolicies, setOpenPolicies] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [openAwards, setOpenAwards] = useState(false);
  const [openTasks, setOpenTasks] = useState(false);

  return (
    <div style={styles.sidebar} className="sidebar">
      {/* My Space (static) */}
      <div style={styles.menuItem} className="menuItem" onClick={() => setOpenSpace(!openSpace)}>
        <span>My Space</span>
        <span style={styles.arrow} className="arrow">
          {openSpace ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </div>
      {openSpace && (
        <div style={styles.subMenu}>
          <div style={styles.subItem} className="subItem">My Earnings</div>
          <div style={styles.subItem} className="subItem">Leaves</div>
          <div style={styles.subItem} className="subItem">My Groups</div>
        </div>
      )}

      {/* Policies & Guidelines */}
      <div style={styles.menuItem} className="menuItem" onClick={() => setOpenPolicies(!openPolicies)}>
        <span>Policies & Guidelines</span>
        <span style={styles.arrow} className="arrow">
          {openPolicies ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </div>
      {openPolicies && (
        <div style={styles.subMenu}>
          <div style={styles.subItem} className="subItem">HRMS</div>
          <div style={styles.subItem} className="subItem">Technology</div>
          <div style={styles.subItem} className="subItem">Legal & Compliance</div>
          <div style={styles.subItem} className="subItem">Corporate Communication</div>
          <div style={styles.subItem} className="subItem">Branding</div>
        </div>
      )}

      {/* Event Gallery */}
      <div style={styles.menuItem} className="menuItem" onClick={() => setOpenGallery(!openGallery)}>
        <span>Event Gallery</span>
        <span style={styles.arrow} className="arrow">
          {openGallery ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </div>
      {openGallery && (
        <div style={styles.subMenu}>
          <div style={styles.subItem} className="subItem">Photos</div>
          <div style={styles.subItem} className="subItem">Videos</div>
        </div>
      )}

      {/* Awards */}
      <div style={styles.menuItem} className="menuItem" onClick={() => setOpenAwards(!openAwards)}>
        <span>Awards</span>
        <span style={styles.arrow} className="arrow">
          {openAwards ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </div>
      {openAwards && (
        <div style={styles.subMenu}>
          <div style={styles.subItem} className="subItem">Employee of the Month</div>
          <div style={styles.subItem} className="subItem">Annual Awards</div>
        </div>
      )}

      {/* My Task */}
      <div style={styles.menuItem} className="menuItem" onClick={() => setOpenTasks(!openTasks)}>
        <span>My Task</span>
        <span style={styles.arrow} className="arrow">
          {openTasks ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </div>
      {openTasks && (
        <div style={styles.subMenu}>
          <div style={styles.subItem} className="subItem">Pending</div>
          <div style={styles.subItem} className="subItem">Completed</div>
        </div>
      )}
    </div>
  );
}

const styles = {
  sidebar: {
    position: "fixed",
    left: 0,
    top: 100,
    width: "85vw",  // default mobile
    height: "100vh",
    backgroundColor: "white",
    overflowY: "auto",
    boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
    zIndex: 1000,
    borderTopRightRadius: "10vw",
    borderTopLeftRadius: "5vw",
    padding: "4vw",
  },

  menuItem: {
    fontSize: "4vw", // default
    backgroundColor: "#FFF4D9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4vw 8vw",
    marginBottom: "5vw",
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "50vw", // pill shape
  },

  subMenu: {
    marginTop: "1vw",
    marginBottom: "2vw",
    paddingBottom: "2vw",
  },

  subItem: {
    backgroundColor: "#fffaedff",
    fontSize: "3.5vw",
    padding: "4vw 8vw",
    margin: "2vw 0",
    borderRadius: "50vw",
    cursor: "pointer",
    //fontWeight: "bold",
  },

  arrow: {
    fontSize: "6vw",
    display: "flex",
    alignItems: "center",
    color: "grey",
  },
};

// Add responsive overrides with CSS
const responsiveCSS = `
@media (min-width: 768px) {
  .sidebar {
    width: 1200px !important; /* fixed width on desktop */
    border-radius: 20px !important;
    padding: 20px !important;
  }
  .menuItem {
    font-size: 20px !important;
    padding: 22px 40px !important;
    margin-bottom: 12px !important;
    max-width: 800px; /* restrict max width */
    max-height:50px;    border-radius: 9999px !important; /* fully pill shape */
    white-space: nowrap; /* prevent text wrap */
    overflow: y; /* hide overflow if needed */
    text-overflow: ellipsis; /* add ... if text overflows */
  }
  .subItem {
    font-size: 20px !important;
    padding: 20px 28px !important;
    max-width: 800px; /* restrict max width */
    max-height:50px;
    border-radius: 9999px !important;
    white-space: nowrap;
    overflow: y;
    text-overflow: ellipsis;
  }
  .arrow {
    font-size: 30px !important;
  }
}
;`

// Inject CSS dynamically
if (typeof document !== "undefined") {
  let styleTag = document.getElementById("sidebar-styles");
  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = "sidebar-styles";
    document.head.appendChild(styleTag);
  }
  styleTag.innerHTML = responsiveCSS;
}
