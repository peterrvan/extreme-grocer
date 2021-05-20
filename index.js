/**
* ************************************
*
* @module  index.js
* @author
* @date
* @description 
*
* ************************************
*/
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styles from './client/scss/application.scss'; // eslint-disable-line no-unused-vars

render(
    <div>
      <h1>Welcome to Extreme Grocer!</h1>
        <form method="GET" action='/search'>
          <input className='button' type='submit' value="Start"></input>
        </form>
    </div>,
    document.getElementById('root'),
  );
  