import { useState } from 'react';
import PropTypes from 'prop-types';

const JsonInput = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.parse(input);
      onSubmit(jsonData);
    } catch {
      alert("Invalid JSON format");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter JSON"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// Add PropTypes validation here
JsonInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default JsonInput;
