/**
 * ************************************
 *
 * @module  ShoppingList
 * @author
 * @date
 * @description stateful component that renders each ingredient component
 *
 * ************************************
 */

 import React from 'react';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import ListItem from '../components/ListItem.jsx';
 import * as actions from '../actions/actions.js';
 
const mapStateToProps = ({
   dishes: { shoppingList },
 }) => ({
   shoppingList,
 });
 
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
 
const ShoppingListContainer = props => {
  let boxes = [];
  for (let i = 0; i < props.shoppingList.length; i++) {
    boxes.push(<ListItem 
        key={i}
        index={i}
        id={props.shoppingList[i].id}
        name={props.shoppingList[i].name}
        amount={props.shoppingList[i].amount}
        unit={props.shoppingList[i].unit}
    />);
  }

//   function handleClick(e) {
//     e.preventDefault();
//     props.createList(dishId.join());
//   }

  return (
   <div className="shoppingListContainer">
     <div className="outerBox">
       <h1 id="header"><u>Shopping List</u></h1>
     </div>
     <div>{boxes}</div>
     {/* <div> */}
       {/* <button className='createShoppingList' onClick={handleClick}>Create Shopping List</button> */}
     {/* </div> */}
   </div>
   
  
  )
}
 export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListContainer);
 