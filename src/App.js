import "./App.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 5],
  ["Еда", 2],
  ["Общение", 2],
  ["Физическая активность", 7],
  ["Сон", 8], // CSS-style declaration
];

export const options = {
  title: "Режим дня",
  pieHole: 0.4,
  is3D: false,
};

function App() {
  return (
    <div className="App">
      <h1>My Pie Chart</h1>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default App;
