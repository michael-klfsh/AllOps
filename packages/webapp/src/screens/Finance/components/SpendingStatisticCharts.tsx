import React, { useEffect, useState } from "react";
import { SpendingData } from "../SpendingStatistics";
import { Col, Row } from "reactstrap";
import {
  PieChart,
  BarPlot,
  LinePlot,
  ChartContainer,
  AllSeriesType,
  ChartsXAxis,
  ChartsYAxis,
  BarSeriesType,
} from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";

interface IPieData {
  id: number | string;
  value: number;
  label: string;
}
const SpendingStatisticCharts = ({
  spendingData,
}: {
  spendingData: SpendingData[];
}) => {
  const [pieData, setPieData] = useState<IPieData[]>([]);
  const [overflowData, setOverflowData] = useState<AllSeriesType[]>([]);
  const [employeesData, setEmployeesData] = useState<BarSeriesType[]>([]);

  const [showCharts, setShowCharts] = useState<boolean>(false);
  const [employeeList, setEmployeeList] = useState<string[]>([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    setEmployeeList([...new Set(spendingData.map((r) => r.name))]);
    if (pieData.length === 0 || overflowData.length === 0) {
      setPieData(calculatePieData());
      setOverflowData(calculateBarData());
      setEmployeesData(calculateEmployeeData());
    } else if (pieData.length > 0 && overflowData.length > 0) {
      setShowCharts(true);
    }
  }, [spendingData, overflowData, pieData]);

  const calculatePieData = () => {
    const departments = [
      ...new Set(
        spendingData.map((r) => {
          return r.category;
        })
      ),
    ];

    return departments.map((department, index) => {
      const value = spendingData
        .map((data) => {
          return data.category === department ? data.amount : 0;
        })
        .reduce((total, value) => total + value, 0);

      return {
        id: `${index}-category`,
        value,
        label: department,
      };
    });
  };

  const calculateBarData = () => {
    const departments = [
      ...new Set(
        spendingData.map((r) => {
          return r.category;
        })
      ),
    ];

    // Bars
    const barData: AllSeriesType[] = [];
    departments.forEach((item) => {
      const data: number[] = [];
      const dataRaw = spendingData.filter((d) => d.category === item);
      months.forEach((month) => {
        const value = dataRaw
          .map((r) => (r.month === month ? r.amount : 0))
          .reduce((total, value) => total + value, 0);
        data.push(value);
      });

      barData.push({
        type: "bar",
        stack: "",
        label: item,
        yAxisKey: "spendings",
        data,
      });
    });
    // Limit
    const limitData: AllSeriesType = {
      type: "line",
      curve: "linear",
      yAxisKey: "spendings",
      color: "red",
      data: [
        4000, 5000, 2000, 5000, 4000, 6000, 4000, 5000, 6000, 6000, 7000, 7500,
      ],
    };

    return [...barData, limitData];
  };

  const calculateEmployeeData = () => {
    const employees = [...new Set(spendingData.map((r) => r.name))];
    const barData: BarSeriesType[] = [];
    employees.forEach((e, index) => {
      const dataRaw = spendingData.filter((d) => d.name === e);
      dataRaw.forEach((raw) => {
        let array: number[] = Array<number>(employees.length).fill(0);
        array = array.fill(raw.amount, index, index + 1);
        barData.push({
          data: array,
          stack: "",
          type: "bar",
          label: raw.category,
        });
      });
    });
    console.log(barData);
    return barData;
  };
  /**
   * Spendings by Month + Grenze (Budget als Linie --> Check how much over limit
   */
  /**
   * Aggregate by Person
   */

  return (
    <>
      <Row className={"mb-5"}>
        <Col>
          {showCharts ? (
            <PieChart
              series={[
                {
                  data: pieData,
                  highlightScope: { faded: "global", highlighted: "item" },
                  faded: {
                    innerRadius: 30,
                    additionalRadius: -30,
                    color: "gray",
                  },
                  valueFormatter: (item) => `${item.value.toFixed(2)} $`,
                },
              ]}
              width={600}
              height={300}
            />
          ) : (
            "NOT"
          )}
        </Col>
        <Col>
          <h3>Expense Distribution</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Col>
      </Row>
      <Row className={"mb-5"}>
        <Col>
          <h3>Spendings Overflow</h3>
          {showCharts ? (
            <ChartContainer
              width={600}
              height={500}
              series={overflowData}
              xAxis={[
                {
                  id: "months",
                  data: months,
                  scaleType: "band",
                },
              ]}
              yAxis={[
                {
                  id: "spendings",
                  scaleType: "linear",
                },
              ]}
            >
              <BarPlot />
              <LinePlot />
              <ChartsXAxis label="Month" position="bottom" axisId="months" />
              <ChartsYAxis position="left" axisId="spendings" />
            </ChartContainer>
          ) : (
            ""
          )}
        </Col>
        <Col>
          <h3>Spendings per Employee</h3>
          {showCharts ? (
            <BarChart
              series={employeesData}
              xAxis={[
                {
                  scaleType: "band",
                  data: employeeList,
                },
              ]}
              width={600}
              height={500}
              slotProps={{ legend: { hidden: true } }}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </>
  );
};

export default SpendingStatisticCharts;
