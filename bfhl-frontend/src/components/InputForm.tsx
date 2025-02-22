import React, { useState } from 'react';
import { submitData } from '../api';

interface InputFormProps {
  setResponse: React.Dispatch<React.SetStateAction<any>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const InputForm: React.FC<InputFormProps> = ({ setResponse, setError }) => {
  const [input, setInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const validateJSON = (jsonString: string) => {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!validateJSON(input)) {
      setError('Invalid JSON format');
      return;
    }

    setError('');
    const jsonData = JSON.parse(input);

    try {
      const res = await submitData(jsonData);
      setResponse(res.data);
    } catch (err) {
      setError('Failed to fetch data from backend');
    }
  };

  return (
    <div>
      <h2>Enter JSON Data</h2>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder='Enter JSON input here...'
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default InputForm;
