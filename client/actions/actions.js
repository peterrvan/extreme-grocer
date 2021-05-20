/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */
 import axios from 'axios';
 import * as types from './actionTypes.js';
 const apiKey = '3f7dc1c2f19b4e3ba7ba30c52cc1932c';

 export const updateSearch = data => ({
  type: types.UPDATE_SEARCH,
  // inputs data that's associated with the action
  payload: data,
});
 
 export const addDish = id => ({
   type: types.ADD_DISH,
   payload: id,
 });
 
//  export const deleteCard = id => (dispatch, getState) => {
//    if (getState().markets.marketList[id].cards > 0) {
//      dispatch({ type: types.DELETE_CARD, payload: id });
//    }
//  };
 
 export const search = target => (dispatch) => {
   console.log('YOU ARE IN THE ACTIONS FILE');
   console.log('target: ', target);
  //  const searchTarget = getState().dishes.newSearch;
   axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${target}`)
    .then((data) => {
      dispatch({
        type: types.SEARCH,
        payload: data.data.results,
      });
    })
 };
 
//  export const syncMarkets = () => (dispatch, getState) => {
//    axios.put('/markets', getState().markets.marketList)
//      .then(({ status }) => {
//        if (status === 200) dispatch({ type: types.SYNC_MARKETS });
//      })
//      .catch(console.error);
//  };
 
//  export const loadMarkets = () => (dispatch) => {
//    axios.get('/markets')
//      .then(({ data }) => {
//        dispatch({
//          type: types.LOAD_MARKETS,
//          payload: data,
//        });
//      })
//      .catch(console.error);
//  };
 