/**
 * ************************************
 *
 * @module  ListItem
 * @author
 * @date
 * @description component that renders a single line of ingredient
 *
 * ************************************
 */

 import React from 'react';
 
 const ListItem = props => {

  return(
    <div className="listItem">
        <div key={props.id}>
            <span>{props.amount} {props.unit} {props.name}</span>
        </div>
    </div>
  )
 }

 export default ListItem;