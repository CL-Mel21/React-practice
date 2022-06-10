import './App.css';
import WeatherForecast from './components/WeatherForecast';

const forecastData = [
  {
    day: "Monday",
    conditions: "sunny",
    maxTemp: 38,
    wind: 15,
  },
  {
    day: "Tuesday",
    conditions: "stormy",
    maxTemp: 26,
    wind: 36,
  },
  {
    day: "Wednesday",
    conditions: "rainy",
    maxTemp: 25,
    wind: 25,
  },
  {
    day: "Thursday",
    conditions: "cloudy",
    maxTemp: 28,
    wind: 20,
  },
  {
    day: "Friday",
    conditions: "sunny",
    maxTemp: 35,
    wind: 16,
  },
];

function App() {
  return (
    <>
    {forecastData.map(
      data => <WeatherForecast 
      key={data.day} 
      day={data.day}
      conditions={data.conditions}
      maxTemp={data.maxTemp}
      wind={data.wind}/>
    )}
      
    </>
  );
}

export default App;
