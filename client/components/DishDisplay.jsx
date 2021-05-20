/**
 * ************************************
 *
 * @module  DishDisplay
 * @author
 * @date
 * @description component that renders a single dish box
 *
 * ************************************
 */

 import React from 'react';
 
 const DishDisplay = props => {

  function handleClickPlus(e) {
    e.preventDefault();
    props.addQty(props.index);
  }

  function handleClickMinus(e) {
    e.preventDefault();
    props.subQty(props.index);
  }

  return(
    <div className="dishDisplay">
        <div key={props.index}>
            <h1>{props.title}</h1>
            <img src={props.image}></img>
        </div>
        <div className="flex">
            <span>
            <button className='quantity' onClick={handleClickMinus}>-</button>
            <span style={{padding: 1 + 'em'}}>{props.quantity}</span>
            <button className='quantity' onClick={handleClickPlus}>+</button>
            </span>
        </div>
    </div>
  )
 }

 export default DishDisplay;