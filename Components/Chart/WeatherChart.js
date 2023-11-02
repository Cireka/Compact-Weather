import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const WeatherChart = (props) => {
  const chartRef = useRef(null);

  let Data = props.Data;
  let Title = props.Title;

  function TimeConvertor(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear().toString().slice(-2);
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes().toString().padStart(2, "0");
    const ampm = hour >= 12 ? "pm" : "am";
    const formattedHour = (((hour + 11) % 12) + 1).toString().padStart(2, "0");
    return `${day}/${month}/${year} ${formattedHour}:${minute} ${ampm}`;
  }

  Data.list?.map((item) => {
    return TimeConvertor(item.dt_txt);
  });

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext("2d");

    const chartData = {
      labels: Data.list?.map((item) => {
        return TimeConvertor(item.dt);
      }),
      datasets: [props.DataSet],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            // Callback function to format the ticks
            callback: function (value, index, values) {
              // Append the '°C' symbol to the value
              return value + `${props.symbol}`;
            },
          },
        },
      },
    };

    const lineChart = new Chart(chartCanvas, {
      type: "line",
      data: chartData,
      options: chartOptions,
    });

    return () => {
      lineChart.destroy();
    };
  }, [Data]);

  return <canvas ref={chartRef} />;
};

export default WeatherChart;
