import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useContext } from "react";
import DataContext from "Components/Context/weather-context";

const WeatherChart = () => {
  const chartRef = useRef(null);
  const ctx = useContext(DataContext);
  let Data = ctx.EntireData;
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
      datasets: [
        {
          label: "Fluctuation Of Avrage Temperature Over Next 5 Days",
          data: Data.list?.map((item) => {
            return item.main.temp;
          }),

          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
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
