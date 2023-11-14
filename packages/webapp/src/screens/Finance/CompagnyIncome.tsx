import React from "react";
import HorizontalNavbar from "../../components/FinanceNavBar";

const CompagnyIncome = () => {
  const style = {
    container: {
      display: "relative",
      margin: "65px 0px 0px 0px",
      padding: "20px 20px 20px 20px",
    },
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <HorizontalNavbar />
      <div style={style.container}>
        <h1 style={{ textAlign: "center", color: "#333" }}>Company Income</h1>
        <p style={{ textAlign: "center", marginBottom: "40px" }}>
          Overview of the company's income and financial performance.
        </p>

        {/* Add a table or chart here to display income data */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Placeholder for income data visualization */}
          <p style={{ textAlign: "center" }}>
            Income data visualization will be here
          </p>
          {/* You can use a library like Chart.js or similar for actual data visualization */}
        </div>

        {/* Additional Information */}
        <div
          style={{
            marginTop: "30px",
            borderTop: "1px solid #ddd",
            paddingTop: "20px",
          }}
        >
          <h3 style={{ color: "#555" }}>Monthly Breakdown</h3>
          <p>Details about monthly income and trends.</p>
          {/* Include more detailed information or a breakdown here */}
        </div>
      </div>
    </div>
  );
};

export default CompagnyIncome;
