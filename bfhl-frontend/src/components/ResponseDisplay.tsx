import React, { useState } from 'react';

interface ResponseDisplayProps {
  response: any;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(options);
  };

  const renderResponse = () => {
    if (!response) return null;

    const filteredResponse = selectedOptions.reduce((acc: any, key: string) => {
      if (response[key]) {
        acc[key] = response[key];
      }
      return acc;
    }, {});

    return <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>;
  };

  return (
    <div>
      <label>Select Options:</label>
      <select multiple onChange={handleOptionChange}>
        <option value='alphabets'>Alphabets</option>
        <option value='numbers'>Numbers</option>
        <option value='highest_alphabet'>Highest Alphabet</option>
      </select>
      {renderResponse()}
    </div>
  );
};

export default ResponseDisplay;
