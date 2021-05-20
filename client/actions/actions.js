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
 const apiKey = '3aed19a92f9b4bb791b00c45346170c5';

 export const updateSearch = data => ({
  type: types.UPDATE_SEARCH,
  payload: data,
});
 
 export const addDish = data => ({
   type: types.ADD_DISH,
   payload: data,
 });
 
 export const addQty = index => ({
  type: types.ADD_QUANTITY,
  payload: index,
});

export const subQty = index => ({
  type: types.SUBTRACT_QUANTITY,
  payload: index,
});
 
 export const search = target => (dispatch) => {
   console.log('target: ', target);
   axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${target}`)
    .then((data) => {
      dispatch({
        type: types.SEARCH,
        payload: data.data.results,
      });
    })
 };
 
 export const createList = target => (dispatch) => {
  console.log('createList target: ', target);
  axios.get(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${target}`)
   .then((data) => {
     console.log(data);
     dispatch({
       type: types.CREATE_LIST,
       payload: data.data,
     });
   })
};
