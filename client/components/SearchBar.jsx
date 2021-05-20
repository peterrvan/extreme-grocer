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

const SearchBar = props => {
    //const [search, updateSearch, newSearch] = useState('');
    function handleChange(e) {
      props.updateSearch(e.target.value);
    }
    function handleSubmit(e) {
      e.preventDefault();
      props.search(props.newSearch);
    }

    return(
      <div>
        <form onSubmit={handleSubmit}> 
          <input className='search' type="text" id="location" onChange={handleChange}></input>
          <button type="submit" id="addMarket" className="button">Search</button>
        </form>
      </div>
    )
  }

// const SearchBar = ({
//     search,
//     newSearch,
//     updateSearch,
//   }) => (
//     <div>
//       <form onSubmit={search}>
//         <input
//           id="new-search"
//           value={newSearch}
//           onChange={e => updateSearch(e.target.value)}
//         />
//         {/* <button id='search' className="primary">Search</button> */}
//         <button id="searching" className="primary" onClick={console.log('BUTTON PRESSED')} type="submit">Search</button>
//       </form>
//     </div>
//   );

//  const SearchBar = () => {
//     const [search, updateSearch] = useState('');
//     function handleChange(e) {
//       updateSearch(e.target.value);
//     }
//     function handleSubmit(e) {
//       e.preventDefault();
//       search(e);
//     }
//     return (
//     <div>
//      <form onSubmit={handleSubmit}>
//        <input
//          id="new-search"
//         //  value={newSearch}
//          onChange={handleChange}
//        />
//        {/* <button id='search' className="primary" onClick={console.log("HELLO")}>Search</button> */}
//        <button id='search' className="button" type="submit">Search</button>
//      </form>
//    </div>

//     )
//  } 
 
 export default SearchBar;
 