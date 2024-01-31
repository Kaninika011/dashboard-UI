
import React, { useState } from 'react';
import Select from 'react-select';

const CSVTable = ({ csvData }) => {
  const [selectedTags, setSelectedTags] = useState({});

  const handleTagChange = (rowIndex, selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setSelectedTags((prevTags) => ({
      ...prevTags,
      [rowIndex]: selectedValues.join(', '),
    }));
  };

  const customStyles = {
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: '#805ad5',
      color: '#ffffff',
    }),
  };

  return (
    <div className="table-container">
      <h4>Uploads</h4>
      <div className="table-wrapper">
        <table className="responsive-table">
          <thead>
            <tr>
              {Object.keys(csvData[0]).slice(0, 3).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
              <th>Select Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(row).slice(0, 3).map(([key, value], colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
                <td>
                  <Select
                    isMulti
                    options={(row[Object.keys(row)[3]] || '')
                      .split(',')
                      .map((tag) => ({ value: tag.trim(), label: tag.trim() }))}
                    onChange={(selectedOptions) =>
                      handleTagChange(rowIndex, selectedOptions)
                    }
                    styles={customStyles}
                  />
                </td>
                <td>
                  <div>{selectedTags[rowIndex]}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CSVTable;
