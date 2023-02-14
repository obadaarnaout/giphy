import React from "react";

const SearchInput = ({ handleQuery }) => {
  return (
    <div className="col-md-6">
      <label className="form-label"></label>
      <input
        type="email"
        className="form-control"
        placeholder="Type something to start searching"
        onChange={handleQuery}
      />
    </div>
  );
};

export default SearchInput;