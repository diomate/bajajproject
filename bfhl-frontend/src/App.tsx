import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState('');

  // Set website title to roll number
  useEffect(() => {
    document.title = 'Your_Roll_Number';
  }, []);

  return (
    <div>
      <h1>BFHL Frontend</h1>
      <InputForm setResponse={setResponse} setError={setError} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && <ResponseDisplay response={response} />}
    </div>
  );
}

export default App;
