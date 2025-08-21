// components/SubTabsGrid.jsx
import React from "react";

export default function TabGrid({ items, activeSubTab, onSubTabClick }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2vh",
        width: "85vw",
        margin: "2vh auto",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => onSubTabClick(item.name)}
          style={{
            border: "1px solid #b10023",
            borderRadius: "15px",
            padding: "1.5vh",
            textAlign: "center",
            backgroundColor: activeSubTab === item.name ? "#b10023" : "#fff",
            color: activeSubTab === item.name ? "white" : "#b10023",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
        >
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "60px", height: "60px", marginBottom: "1vh" }}
          />
          <div style={{ fontWeight: "bold" }}>{item.name}</div>
        </div>
      ))}
    </div>
  );
}
