/**
 * ************************************
 *
 * @module  SearchDisplay
 * @author
 * @date
 * @description component that renders a single search result box
 *
 * ************************************
 */

 import React from 'react';
 
 const SearchDisplay = props => {

  function handleClick(e) {
    e.preventDefault();
    const dish = {
        id: props.id,
        title: props.title,
        image: props.image,
        quantity: 1,
    };
    props.addDish(dish);
  }

  return(
    <div className="searchDisplay">
        <div key={props.index}>
            <h3>{props.title}</h3>
            <img src={props.image}></img>
            <br />
        </div>
        <div className="searchResult">
            <button className='button' onClick={handleClick}>Save Dish</button>
        </div>
    </div>
  )
 }

//  const SearchDisplay = ({
//      index,
//      id,
//      title,
//      image,
//      addDish,
//  }) => (
//     <div className="searchResult">
//         <div key={index}>
//             <h1>{title}</h1>
//             <img src={image}></img>
//         </div>
//         <div className="flex">
//             <button className='addToList' onClick={addDish}>ADD TO LIST</button>
//         </div>
//     </div>
//  )

 export default SearchDisplay;
 