import React from 'react';
// import { prependOnceListener } from 'cluster';

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name='sorting'checked={null} onChange={props.sortStocksAlph}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name='sorting'checked={null} onChange={props.sortStocksNum}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
