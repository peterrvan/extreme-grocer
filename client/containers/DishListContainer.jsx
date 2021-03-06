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
 import DishDisplay from '../components/DishDisplay.jsx';
 import * as actions from '../actions/actions.js';
 
const mapStateToProps = ({
   dishes: { dishList },
 }) => ({
   dishList,
 });
 
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

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
       <h1 id="header"><u>Saved Dishes</u></h1>
     </div>
     <div>{boxes}</div>
     <div>
       <button className='button' onClick={handleClick}>Create Shopping List</button>
     </div>
   </div>
   
  
  )
}
 export default connect(mapStateToProps, mapDispatchToProps)(DishListContainer);
 