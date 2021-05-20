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
   searchList: [],
   newSearch: '',
   dishList: [],
   shoppingList: [],
 };
 

 const dishesReducer = (state = initialState, action) => {
  
  switch (action.type) {
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

     case types.ADD_QUANTITY: {

       const newDishList = state.dishList.map((dish, idx) => {
         if (idx === action.payload) {
           return {
             ...dish,
             quantity: dish.quantity + 1,
           }
         }
         return dish;
       })
          return {
            ...state,
            dishList: newDishList,
          };
     };

     case types.SUBTRACT_QUANTITY: {
      const newDishList = state.dishList.map((dish, idx) => {
        if (idx === action.payload) {
          return {
            ...dish,
            quantity: dish.quantity - 1,
          }
        }
        return dish;
      })
         return {
           ...state,
           dishList: newDishList,
         };
    };

      case types.CREATE_LIST: {
        console.log('INSIDE THE REDUCER');
        const data = [];
        action.payload.forEach((element, index) => {
          element.extendedIngredients.forEach(ingredient => {
            data.push({
              id: ingredient.id,
              name: ingredient.name,
              amount: ingredient.amount * state.dishList[index].quantity,
              unit: ingredient.unit,
            })
          })
        })
        console.log('after gathering data: ', data);

        return {
          ...state,
          shoppingList: data,
        };
     };

     default:
       return state;
  }
 };
 
 export default dishesReducer;
 