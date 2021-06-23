import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './features/calc'

import "./index.css"

const title = "Calc"

ReactDOM.render(
  
  <Calc  title={title}/>

  , document.getElementById('root')
  );