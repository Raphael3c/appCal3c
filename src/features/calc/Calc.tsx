import Button from "../../components/button";
import Input from "../../components/input"
import Soma from "../../_assets/js/Soma"

import "./Calc.css"

interface props{
  title: String
}

function Calc(props: props) {
  return (
    <div className="App">
      <div className="Calc">
        <h2>{props.title}</h2>

        <div className="containerInput">
          <Input id="firstValue"/>
          <Input id="secondValue"/>
        </div>

        <Button onClick={Soma}/>

        <p id="result">0</p> 
      </div>
    </div>  
  )
}

export default Calc
