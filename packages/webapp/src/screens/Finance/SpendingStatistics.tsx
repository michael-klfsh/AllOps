import React, { useState, useEffect } from "react";
import "./assets/SpendingStatistics.css";
import { Container, Row, Table } from "reactstrap";
import SpendingStatisticCharts from "./components/SpendingStatisticCharts"; // Import your CSS file

// Define an interface for the spending data
export interface SpendingData {
  name: string;
  month: string;
  category: string;
  amount: number;
}

const SpendingStatistics = () => {
  const [spendingData, setSpendingData] = useState<SpendingData[]>([]);
  const [totalSpending, setTotalSpending] = useState<number>(0);

  useEffect(() => {
    // Example data
    const data: SpendingData[] = [
      { name: "John Doe", month: "Feb", category: "Marketing", amount: 1000 },
      {
        name: "Jane Smith",
        month: "Jan",
        category: "Development",
        amount: 1500,
      },
      {
        name: "Michael Kleefisch",
        month: "Feb",
        category: "Employee Wage",
        amount: 5000,
      },
      {
        name: "Aghiles Gasselin",
        month: "Mar",
        category: "Office Supplies",
        amount: 800,
      },
      {
        name: "Luoshan Rosan Zheng",
        month: "Mar",
        category: "Vehicle Maintenance",
        amount: 320,
      },
      {
        name: "Sam Smith",
        month: "Apr",
        category: "Employee Wage",
        amount: 4800,
      },
      {
        name: "Louis Armstrong",
        month: "Feb",
        category: "Development",
        amount: 1300,
      },
      {
        name: "Jane Smith",
        month: "Jan",
        category: "Development",
        amount: 1300,
      },
      {
        name: "Jane Smith",
        month: "Jan",
        category: "Marketing",
        amount: 1400.25,
      },
      // ... more data
    ];

    setSpendingData(data);
    setTotalSpending(data.reduce((total, item) => total + item.amount, 0));
  }, []);

  return (
    <Container className={"p-sm-4"}>
      <h2>Spending Statistics</h2>

      <Row className="total-spending mt-5">
        <h3>
          Total Spendings:{" "}
          <span className={"text-danger"}>
            <strong>$ {totalSpending.toFixed(2)}</strong>
          </span>
        </h3>
      </Row>

      <SpendingStatisticCharts spendingData={spendingData} />

      <Table bordered striped>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Month</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {spendingData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.month}</td>
              <td>{item.category}</td>
              <td>${item.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Additional statistics and details can go here */}
    </Container>
  );
};

export default SpendingStatistics;
