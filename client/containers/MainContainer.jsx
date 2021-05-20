/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders SearchContainer
 *
 * ************************************
 */

 import React from 'react';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 //import Buttons from '../components/Buttons.jsx';
 import SearchContainer from './SearchContainer.jsx';
 import DishListContainer from './DishListContainer.jsx';
 import ShoppingListContainer from './ShoppingListContainer.jsx';
 import * as actions from '../actions/actions.js';
 
 const mapStateToProps = ({
   dishes: { searchList, newSearch },
 }) => ({
//    Need to revise
   searchList,
   newSearch,
 });

 const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
 
//  const mapDispatchToProps = dispatch => ({
//    syncMarkets: () => dispatch(actions.syncMarkets()),
//  });
 
 const MainContainer = props => (
   <div className="container">
     <div className="outerBox">
       <h1 id="header">Extreme Grocer</h1>
       {/* <Buttons /> */}
       <SearchContainer />
       <DishListContainer />
       <ShoppingListContainer />
     </div>
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
 