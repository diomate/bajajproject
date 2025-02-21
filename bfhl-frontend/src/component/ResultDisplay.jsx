import PropTypes from 'prop-types';

const ResultDisplay = ({ output, filters }) => {
  return (
    <div>
      <h2>Output:</h2>
      {output && filters.map(filter => (
        <div key={filter}>
          <h3>{filter}:</h3>
          <p>{JSON.stringify(output[filter])}</p>
        </div>
      ))}
    </div>
  );
};

// Add PropTypes for validation
ResultDisplay.propTypes = {
  output: PropTypes.object.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ResultDisplay;
