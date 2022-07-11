import React, { Component } from "react";

class WeatherForecast extends Component {
  render() {
    return (
      <div className="day">
        <h1>{this.props.day}</h1>
        <h2>
          {this.props.conditions}
          {this.props.conditions === "sunny" && <span class="emoji"> ☀️</span>}
          {this.props.conditions === "stormy" && <span class="emoji"> ⚡</span>}
          {this.props.conditions === "rainy" && <span class="emoji"> 🌧️</span>}
          {this.props.conditions === "cloudy" && <span class="emoji"> ☁️</span>}
        </h2>
        <h2>Maximum temperature: {this.props.maxTemp}°C</h2>
        {this.props.maxTemp >= 35 && (
          <h3 style={{ color: "red" }}> Heatwave warning</h3>
        )}
        <h2>Wind speed: {this.props.wind}km/h</h2>
        {this.props.wind >= 30 && (
          <h3 style={{ color: "orange" }}> Strong wind warning</h3>
        )}
      </div>
    );
  }
}

export default WeatherForecast;
