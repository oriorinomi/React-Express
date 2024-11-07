import { useState } from 'react';
import './App.css'
import EmployeeCard from "./CardEmployee";

function App() {
  

const sampleEmployee = {
  name: {
    first: "Ori",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
  },
};
const [employee, setEmployee] = useState(sampleEmployee);

const getEmployee = () => {
  fetch("http://localhost:3310/api/employees")
  .then((response) => response.json())
  .then((data) => {
    setEmployee(data.results[0]);
  })
}

return ( 
  <>
<EmployeeCard props={employee} /> 
<button type="button" onClick={getEmployee}>Get Employee</button>
</>
);

}

export default App
