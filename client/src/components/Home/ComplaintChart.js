import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Chart } from "chart.js";

const ComplaintChart = () => {
  const [chartData, setChartData] = useState([]);

  // Ref to hold the chart instance
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8070/complaint/complaintchart"
        );
        setChartData(response.data);
      } catch (error) {
        console.error("Failed to fetch complaint data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      // Destroy the previous chart instance
      if (chartRef.current !== null) {
        chartRef.current.destroy();
      }

      // Process the chartData to extract labels and data
      const labels = chartData.map((item) => item._id);
      const data = chartData.map((item) => item.count);

      const chartConfig = {
        labels: labels,
        datasets: [
          {
            label: "Complaints by Province",
            data: data,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      };

      // Render the new chart instance
      const newChart = new Chart(chartRef.current, {
        type: "bar",
        data: chartConfig,
        options: {
          // Configure the chart options as needed
        },
      });

      // Store the new chart instance in the ref
      chartRef.current = newChart;
    }
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default ComplaintChart;
