import { useState } from "react";

export default function Slider() {
    const [activeTab, setActiveTab] = useState("HRMS");
    const [activeSubTab, setActiveSubTab] = useState("");
    const [hoveredCard, setHoveredCard] = useState("");

    const subTabs = {
        HRMS: [
            { name: " Mark Attendance", img: "src/assets/attendance.png" },
            { name: "Attendance Regularization", img: "src/assets/regu.png" },
            { name: "Apply Leave", img: "src/assets/leave.png" },
            { name: "Payslip & Form 16", img: "src/assets/pay.png" },
            { name: "Travel", img: "src/assets/travel.png" },
            { name: "Reimbursement", img: "src/assets/reim.png" },
        ],
        Wellness: [
            { name: "Medical Card", img: "src/assets/medcard.png" },
            { name: "Empaneled Hospitals", img: "src/assets/eh.png" },
            { name: "Empaneled Hospitals", img: "src/assets/ehn.png" },
            { name: "Claim/Cashless Support", img: "src/assets/claim.png" },
            { name: "24*7 Insurance Helpline", img: "src/assets/helpline.png" },
            { name: "ActivHealth Download", img: "src/assets/activ.png" },
            
        ],
        MyApps: [
            { name: "Poornata", img: "src/assets/poornata.png" },
            { name: "Onstream", img: "src/assets/onstream.png" },
            { name: "Learning & Development", img: "src/assets/l&d.png" },
            { name: "Infinite", img: "src/assets/infinite.png" },
            { name: "PIFA", img: "src/assets/pifa.png" },
            { name: "Report IT Issue", img: "src/assets/itIssue.png" },
        ],
    };

    const tabs = ["HRMS", "Wellness", "MyApps"];

    return (
        <div>
            {/* Top Tabs */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid #b10023",
                    borderRadius: "10vh",
                    margin: "5vh auto",
                    width: "90%",
                    backgroundColor: "white",
                    overflow: "hidden",
                    flexWrap: "wrap",
                }}
            >
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => {
                            setActiveTab(tab);
                            setActiveSubTab("");
                        }}
                        style={{
                            flex: 1,
                            minWidth: "100px",
                            textAlign: "center",
                            padding: "1.2vh 0",
                            cursor: "pointer",
                            fontWeight: "bold",
                            backgroundColor: activeTab === tab ? "#d8032eff" : "white",
                            color: activeTab === tab ? "white" : "#d1012bff",
                            borderRadius: activeTab === tab ? "10vh" : "0",
                            transition: "0.3s ease",
                        }}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Fixed 3x2 Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(2, auto)",
                    gap: "3vh",
                    width: "90%",
                    //height:"32vh",
                    Height:"25%",
                    maxWidth: "1200px",
                    margin: "2vh auto",
                }}
            >
                {subTabs[activeTab].map((item, index) => {
                    const isActive = activeSubTab === item.name;
                    const isHovered = hoveredCard === item.name;

                    return (
                        <div
                            key={index}
                            onClick={() => setActiveSubTab(item.name)}
                            
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                border: "1px solid #b10023",
                                borderRadius: "15px",
                                padding: "1vw 1vh",
                                backgroundColor: isActive   ? "#cf012aff" : "#fff",
                                //backgroundColor: isHovered ? "yellow":"#fff",
                                color: isActive || isHovered ? "white" : "black",
                                transition: "0.3s ease",
                                minHeight: "10vh",
                                overflow: "hidden",
                                cursor: "pointer",
                            }}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                style={{
                                    width: "10vw",
                                    height: "5vh",
                                    objectFit: "contain",
                                }}
                            />
                            <div
                                style={{
                                    fontWeight: "500",
                                    fontSize: "clamp(18px, 2vw, 50px)",
                                    padding: "1vw 1vh",
                                    textAlign: "center",
                                    wordWrap: "break-word",
                                    width: "100%",
                                }}
                            >
                                {item.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
