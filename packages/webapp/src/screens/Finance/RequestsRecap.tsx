import React from "react";

const RequestsRecap = () => {
  const style = {
    container: {
      display: "relative",
      margin: "65px 0px 0px 0px",
      padding: "20px 20px 20px 20px",
    },
  };

  // Mock data for the list of requests
  const requests = [
    {
      id: 1,
      title: "Office Supplies",
      description: "Stationery items",
      status: "Approved",
    },
    {
      id: 2,
      title: "Software License",
      description: "Annual subscription",
      status: "Pending",
    },
    {
      id: 3,
      title: "Travel Expenses",
      description: "Client meeting travel cost",
      status: "Denied",
    },
    // Add more mock data as needed
  ];

  return (
    <div>
      <div style={style.container}>
        <h1 style={{ textAlign: "center", color: "#333" }}>Requests Recap</h1>
        <div style={{ marginTop: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
                <th style={{ padding: "8px" }}>ID</th>
                <th style={{ padding: "8px" }}>Title</th>
                <th style={{ padding: "8px" }}>Description</th>
                <th style={{ padding: "8px" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    {request.id}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    {request.title}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    {request.description}
                  </td>
                  <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                    {request.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestsRecap;
