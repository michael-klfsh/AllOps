import React from "react";
import { Col, Row } from "reactstrap";
import { PieChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";

const Statistics = () => {
  return (
    <>
      <Row>
        <Col>
          <h5>Absence Distribution</h5>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 6, label: "Sick Leaves" },
                  { id: 1, value: 12, label: "Vacation" },
                  { id: 2, value: 25, label: "Home Office", color: "grey" },
                ],
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            width={400}
            height={200}
          />
        </Col>
        <Col>
          <h5>Overview per Month in 2023</h5>

          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: [
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
                ],
              },
            ]}
            series={[
              {
                data: [0, 0, 5, 0, 3, 0, 12, 2, 3, 0, 0, 5],
                stack: "1",
                label: "Vacation",
              },
              {
                data: [2, 0, 0, 3, 0, 1, 0, 0, 5, 0, 0, 0],
                stack: "1",
                label: "Sick Leave",
              },
              {
                data: [3, 5, 9, 4, 2, 6, 13, 2, 7, 6, 4, 8],
                color: "grey",
                label: "Home Office",
              },
              {
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
                stack: "1",
                label: "Parental Leave",
              },
            ]}
            width={450}
            height={400}
          />
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
