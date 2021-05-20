/**
 * ************************************
 *
 * @module  DishListContainer
 * @author
 * @date
 * @description stateful component that renders each dish in dishList
 *
 * ************************************
 */

 import React from 'react';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
//  import SearchBar from '../components/SearchBar.jsx';
 import DishDisplay from '../components/DishDisplay.jsx';
 import * as actions from '../actions/actions.js';
 
const mapStateToProps = ({
   dishes: { dishList },
 }) => ({
   dishList,
   //add quantity
   //decrease quantity
   //function for compile ingredients
 });
 
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

//  const mapDispatchToProps = dispatch => ({
//    updateSearch: () => dispatch(actions.updateSearch()),
//  });
 
const DishListContainer = props => {
  let boxes = [];
  let dishId = [];
  for (let i = 0; i < props.dishList.length; i++) {
    boxes.push(<DishDisplay 
        key={i}
        index={i}
        id={props.dishList[i].id}
        title={props.dishList[i].title}
        image={props.dishList[i].image}
        quantity={props.dishList[i].quantity}
        addQty={props.addQty}
        subQty={props.subQty}
    />);
    dishId.push(props.dishList[i].id);
  }

  function handleClick(e) {
    e.preventDefault();
    props.createList(dishId.join());
  }

  return (
   <div className="dishListContainer">
     <div className="outerBox">
       <h1 id="header">Shopping List Container</h1>
     </div>
     <div>{boxes}</div>
     <div>
       <button className='createShoppingList' onClick={handleClick}>Create Shopping List</button>
     </div>
   </div>
   
  
  )
}
 export default connect(mapStateToProps, mapDispatchToProps)(DishListContainer);
 