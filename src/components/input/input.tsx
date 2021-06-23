import "./input.css"

interface inputProps{
  id: string
}

function input(props: inputProps) {
  return (
   <>
    <input className="input" type="number" id={props.id}/>
   </>
  )
}

export default input
