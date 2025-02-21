import PropTypes from 'prop-types';
import Select from 'react-select';

const FilterDropdown = ({ options, onChange }) => {
  return (
    <Select
      options={options}
      isMulti
      onChange={(selected) => onChange(selected.map((s) => s.value))}
    />
  );
};

// Add PropTypes for validation
FilterDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterDropdown;
