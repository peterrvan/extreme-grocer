/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

 import { combineReducers } from 'redux';
 import dishesReducer from './dishesReducer';
 
 export default combineReducers({
   dishes: dishesReducer,
 });
 