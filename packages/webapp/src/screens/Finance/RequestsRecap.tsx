import React from "react";
import { Container, Table } from "reactstrap";

const RequestsRecap = () => {
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
    <Container className={"p-sm-4"}>
      {" "}
      <h1 className={"text-center"}>Requests Recap</h1>
      <Table bordered striped className={"mt-5"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.title}</td>
              <td>{request.description}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RequestsRecap;
