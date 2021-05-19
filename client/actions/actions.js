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

 export const updateSearch = data => ({
  type: types.UPDATE_SEARCH,
  // inputs data that's associated with the action
  payload: data,
});

 import * as types from './actionTypes.js';
 const fetch = require('node-fetch');
 //const api key
 
 export const updateLocation = data => ({
   type: types.UPDATE_LOCATION,
   // inputs data that's associated with the action
   payload: data,
 });
 
 export const addCard = id => ({
   type: types.ADD_CARD,
   payload: id,
 });
 
 export const deleteCard = id => (dispatch, getState) => {
   if (getState().markets.marketList[id].cards > 0) {
     dispatch({ type: types.DELETE_CARD, payload: id });
   }
 };
 
 export const addMarket = event => (dispatch, getState) => {
   event.preventDefault();
   const location = getState().markets.newLocation;
   if (location) {
     dispatch({
       type: types.ADD_MARKET,
       payload: location,
     });
   }
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
 