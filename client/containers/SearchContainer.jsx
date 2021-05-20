/**
 * ************************************
 *
 * @module  SearchContainer
 * @author
 * @date
 * @description stateful component that renders the search bar & search results
 *
 * ************************************
 */

 import React from 'react';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 import SearchBar from '../components/SearchBar.jsx';
 import SearchDisplay from '../components/SearchDisplay.jsx';
 import * as actions from '../actions/actions.js';
 
const mapStateToProps = ({
   dishes: { searchList, newSearch, dishList },
 }) => ({
   searchList,
   newSearch,
   dishList,
 });
 
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

//  const mapDispatchToProps = dispatch => ({
//    updateSearch: () => dispatch(actions.updateSearch()),
//  });
 
const SearchContainer = props => {
  let boxes = [];
  for (let i = 0; i < props.searchList.length; i++) {
    boxes.push(<SearchDisplay 
        key={i}
        id={props.searchList[i].id}
        title={props.searchList[i].title}
        image={props.searchList[i].image}
        addDish={props.addDish}
    />);
  }
  return (
   <div className="searchContainer">
     <div className="outerBox">
       <h2 id="header">Search For Dishes!</h2>
       <SearchBar 
       search={props.search}
       newSearch={props.newSearch}
       updateSearch={props.updateSearch}/>
     </div>
     <div>{boxes}</div>
   </div>
  )
}
 export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
 