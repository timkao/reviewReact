import React from 'react';


function FilterInput(props) {

  const { inputValue, handleChange } = props;

  return (
    <form className="form-group" style={{ marginTop: '20px' }}>
      <input
        className="form-control"
        placeholder="Enter artist name"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  )
}


export default FilterInput;
