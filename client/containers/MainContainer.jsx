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
 //import TotalsDisplay from '../components/TotalsDisplay';
 import SearchContainer from './SearchContainer.jsx';
 import DishListContainer from './DishListContainer.jsx';
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
       {/* <TotalsDisplay {...props} /> */}
       <SearchContainer />
       <DishListContainer />
     </div>
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
 