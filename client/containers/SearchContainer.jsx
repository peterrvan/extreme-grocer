/**
 * ************************************
 *
 * @module  SearchContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

 import React from 'react';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import SearchBar from '../components/SearchBar.jsx';
//  import MarketsContainer from './MarketsContainer';
 import * as actions from '../actions/actions.js';
 
 const mapStateToProps = ({
   dishes: { searchList, newSearch },
 }) => ({
   searchList,
   newSearch,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

//  const mapDispatchToProps = dispatch => ({
//    updateSearch: () => dispatch(actions.updateSearch()),
//  });
 
 const SearchContainer = props => (
   <div className="container">
     <div className="outerBox">
       <h1 id="header">Search Here</h1>
       <SearchBar 
       search={props.search}
       newSearch={props.newSearch}
       updateSearch={props.updateSearch}/>
       {/* <MarketsContainer /> */}
     </div>
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
 