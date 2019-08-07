import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import Classes from "../Card/Card.module.css";

class DonutChart extends Component {
  state = {
    options: {
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 220
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      legend: { position: "bottom" },
      labels: ["Absent", "Present"].reverse(),
      colors: ["#B22222", "#008000"].reverse()
    },
    series: [this.props.attendance.a, this.props.attendance.p].reverse()
  };

  render() {
    return (
      <div className={Classes.chart}>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="300"
        />
        <h1 style={{ textAlign: "center" }}>{this.props.subject}</h1>
      </div>
    );
  }
}

export default DonutChart;
