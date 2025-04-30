import React from 'react'

const SearchInput = ({onSearch}) => {
  return (
    <>
     <h2 className="mb-2 text-center">Home</h2>
        <div className="container-body">
          <input
            type="text"
            placeholder="Search a product"
            onChange={onSearch}
          />
        </div>
    </>
  );
}

export default SearchInput;
