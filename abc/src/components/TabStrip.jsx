// components/TabStrip.jsx
import React from "react";

export default function TabStrip({ tabs, activeTab, onTabClick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid #b10023",
        borderRadius: "10vh",
        margin: "3vh auto",
        width: "85vw",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab}
          onClick={() => onTabClick(tab)}
          style={{
            flex: 1,
            textAlign: "center",
            padding: "1.2vh 0",
            cursor: "pointer",
            fontWeight: "bold",
            backgroundColor: activeTab === tab ? "#b10023" : "white",
            color: activeTab === tab ? "white" : "#b10023",
            borderRadius: activeTab === tab ? "10vh" : "0",
            transition: "0.3s ease",
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
