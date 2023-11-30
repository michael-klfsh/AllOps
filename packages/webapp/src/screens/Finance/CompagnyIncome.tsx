import React, { useEffect, useState } from "react";
import { Button, Container, Row, Table } from "reactstrap";
import { BsBellFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import useModalRemind from "../../components/ModelRemind";

interface IIncome {
  id: number;
  client: string;
  domain: string;
  amount: number;
  paid: boolean;
  month: string;
  dueDate: Date;
}

const CompagnyIncome = () => {
  const [incomeData, setIncomeData] = useState<IIncome[]>([]);
  const modalRemind = useModalRemind({});

  useEffect(() => {
    setIncomeData([
      {
        id: 365837214,
        client: "KAIST",
        domain: "Education",
        amount: 4813,
        paid: true,
        month: "Jan",
        dueDate: new Date(),
      },
      {
        id: 365837212,
        client: "Swiss Life",
        domain: "Insurance",
        amount: 1534,
        paid: true,
        month: "Feb",
        dueDate: new Date(),
      },
      {
        id: 365837215,
        client: "KORAIL",
        domain: "Transportation",
        amount: 2641,
        paid: false,
        month: "Jan",
        dueDate: new Date(new Date().setDate(new Date().getDate() - 3)),
      },
      {
        id: 365837217,
        client: "Woori Bank",
        domain: "Banking",
        amount: 53421,
        paid: true,
        month: "Feb",
        dueDate: new Date(new Date().setDate(new Date().getDate() + 4)),
      },
      {
        id: 365837218,
        client: "Hyundai",
        domain: "Automotive",
        amount: 2431,
        paid: true,
        month: "Feb",
        dueDate: new Date(),
      },
      {
        id: 365837220,
        client: "KAIST",
        domain: "Education",
        amount: 48137,
        paid: false,
        month: "Mar",
        dueDate: new Date(new Date().setDate(new Date().getDate() - 5)),
      },
      {
        id: 365837219,
        client: "Hyundai",
        domain: "Automotive",
        amount: 2431,
        paid: true,
        month: "Mar",
        dueDate: new Date(),
      },
    ]);
  });

  return (
    <Container className={"p-sm-4"}>
      <Row className={"justify-content-center"}>
        <h2>
          Company <span className={"text-success"}>Income</span>
        </h2>
        <p>Overview of the company&apos;s income and financial performance.</p>
      </Row>

      {/* Add a table or chart here to display income data */}
      <Row className={"mt-5"}>
        {modalRemind.markup}
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Client</th>
              <th>Domain</th>
              <th>Amount</th>
              <th>Month</th>
              <th>Due Date</th>
              <th>Paid</th>
              <th>Notify</th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((data) => (
              <tr
                key={data.id}
                className={`${
                  !data.paid && new Date() >= data.dueDate ? "table-danger" : ""
                }`}
              >
                <td>{data.id}</td>
                <td>{data.client}</td>
                <td>{data.domain}</td>
                <td>{data.amount}</td>
                <td>{data.month}</td>
                <td>{data.dueDate ? data.dueDate.toLocaleDateString() : ""}</td>
                <td>
                  <span className={`text-${data.paid ? "success" : "danger"}`}>
                    {data.paid ? <FaCheck /> : <FaX />}
                  </span>
                </td>
                <td>
                  <Button
                    disabled={data.paid}
                    onClick={() => modalRemind.open(true)}
                    color={`${data.paid ? "secondary" : "primary"}`}
                  >
                    <BsBellFill />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p style={{ textAlign: "center" }}>
          Income data visualization will be here
        </p>
        {/* You can use a library like Chart.js or similar for actual data visualization */}
      </Row>

      {/* Additional Information */}
      <Row className={"mt-5"}>
        <h3>Monthly Breakdown</h3>
        <p>Details about monthly income and trends.</p>
        {/* Include more detailed information or a breakdown here */}
      </Row>
    </Container>
  );
};

export default CompagnyIncome;
