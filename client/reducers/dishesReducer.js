/**
 * ************************************
 *
 * @module  dishesReducer
 * @author
 * @date
 * @description reducer for dish data
 *
 * ************************************
 */

 import * as types from '../actions/actionTypes.js';

 const initialState = {
  //  totalMarkets: 0,
  //  totalCards: 0,
   searchList: [],
   newSearch: '',
   dishList: [],
   //synced: true,
 };
 
 // action arg accesses the action types in actionType.js file
 const dishesReducer = (state = initialState, action) => {
   // switch is like focus on this variable
   switch (action.type) {
     // case is like if/else statement
     case types.SEARCH:
       return {
         ...state,
         searchList: action.payload,
         newSearch: '',
       };
 
     case types.UPDATE_SEARCH:
       return {
         ...state,
         newSearch: action.payload,
       };
 
     case types.ADD_DISH: {
           return {
             ...state,
             dishList: state.dishList.concat(action.payload)
           };
         };
 
    //    return {
    //      ...state,
    //      totalCards: state.totalCards + 1,
    //      marketList: newMarketList,
    //      synced: false,
    //    };
    //  }
 
    //  case types.DELETE_CARD: {
    //    const newMarketList = state.marketList.map((market, idx) => {
    //      if (idx === action.payload) {
    //        return {
    //          ...market,
    //          cards: market.cards - 1,
    //        };
    //      }
    //      return market;
    //    });
 
    //    return {
    //      ...state,
    //      totalCards: state.totalCards - 1,
    //      marketList: newMarketList,
    //    };
    //  }
 
    //  case types.SYNC_MARKETS:
    //    return {
    //      ...state,
    //      synced: true,
    //    };
 
    //  case types.LOAD_MARKETS:
    //    return {
    //      ...state,
    //      totalMarkets: action.payload.length,
    //      totalCards: action.payload.reduce((res, m) => res + m.cards, 0),
    //      marketList: action.payload,
    //    };
     // default is else statement
     default:
       return state;
   }
 };
 
 export default dishesReducer;
 