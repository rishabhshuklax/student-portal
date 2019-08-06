import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 250
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        legend: { position: "bottom" },
        labels: ["Absent", "Present"].reverse(),
        colors: ["#cf142b", "#219900"].reverse()
      },
      series: [this.props.attendance.a, this.props.attendance.p].reverse()
    };
  }

  render() {
    return (
      <div className="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="300"
        />
        <h1 style={{textAlign: 'center'}}>{this.props.subject}</h1>
      </div>
    );
  }
}

export default DonutChart;
