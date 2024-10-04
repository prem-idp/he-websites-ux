import React from "react";

const Announcement = () => {
  return (
    <div
      style={{
        height: "40px",
        width: "100%",
        backgroundColor: "#d4ffca",
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ marginLeft: "17.5rem" }}>
        <span style={{ color: "#333333", fontSize: "13px", fontWeight: "700" }}>
          ANNOUNCEMENTS:
        </span>
        <span style={{ color: "#00bbf0", fontSize: "13px" }}>
          Welcome To IDP world
        </span>
      </div>
    </div>
  );
};

export default Announcement;
