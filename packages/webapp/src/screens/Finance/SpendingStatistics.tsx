import React, { useState, useEffect } from "react";
import HorizontalNavbar from "../../components/FinanceNavBar";
import "./SpendingStatistics.css"; // Import your CSS file

// Define an interface for the spending data
interface SpendingData {
  name: string;
  category: string;
  amount: number;
}

const SpendingStatistics = () => {
  const [spendingData, setSpendingData] = useState<SpendingData[]>([]);
  const [totalSpending, setTotalSpending] = useState<number>(0);

  useEffect(() => {
    // Example data
    const data: SpendingData[] = [
      { name: "John Doe", category: "Marketing", amount: 1000 },
      { name: "Jane Smith", category: "Development", amount: 1500 },
      // ... more data
    ];

    setSpendingData(data);
    setTotalSpending(data.reduce((total, item) => total + item.amount, 0));
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: spendingData.map((data) => data.category),
    datasets: [
      {
        label: "Spending per Category",
        data: spendingData.map((data) => data.amount),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <HorizontalNavbar />
      <div className="spending-stats">
        <h1>Spending Statistics</h1>

        <div className="total-spending">
          <h2>Total Spending: ${totalSpending}</h2>
        </div>

        <div className="chart-container">#TODO add graph ?</div>

        <div className="spending-details">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {spendingData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Additional statistics and details can go here */}
    </div>
  );
};

export default SpendingStatistics;
