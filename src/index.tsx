import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './features/calc'

import "./index.css"

const title = process.env.REACT_APP_TITLE

ReactDOM.render(
  
  <Calc  title={title}/>

  , document.getElementById('root')
  );