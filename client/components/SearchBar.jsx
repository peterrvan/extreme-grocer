/**
 * ************************************
 *
 * @module  SearchBar
 * @author
 * @date
 * @description component that takes user input for searching dishes
 *
 * ************************************
 */

 import React from 'react';

 const SearchBar = ({
   search,
   newSearch,
   updateSearch,
 }) => (
   <div>
     <form onSubmit={search}>
       <input
         id="new-search"
         value={newSearch}
         onChange={e => updateSearch(e.target.value)}
       />
       <button id='search' className="primary" onClick={console.log("HELLO")}>Search</button>
       {/* <button id='search' className="primary" type="submit">Search</button> */}
     </form>
   </div>
 );
 
 export default SearchBar;
 