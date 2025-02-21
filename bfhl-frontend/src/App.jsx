import { useState } from "react";
import axios from "axios";
import JsonInput from "./component/JsonInput.jsx";
import ResultDisplay from "./component/ResultDisplay.jsx";
import FilterDropdown from "./component/FilterDropdown.jsx";


import './App.css';


import './App.css';

const App = () => {
  const [output, setOutput] = useState(null);
  const [filters, setFilters] = useState([]);

  const handleJsonSubmit = async (jsonData) => {
    try {
      const response = await axios.post('/bfhl', jsonData);
      setOutput(response.data);
    } catch {
      alert('Invalid JSON or API Error');
    }
  };

  return (
    <div className="App">
      <h1>BFHL Dev Challenge</h1>
      <JsonInput onSubmit={handleJsonSubmit} />
      <FilterDropdown onChange={setFilters} />
      <ResultDisplay output={output} filters={filters} />
    </div>
  );
};

export default App;
