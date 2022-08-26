import React, {useState} from 'react'
import './SelectPerson.scss'

const SelectPerson = () => {
    const [value, setValue] = useState(0)
    const [cvalue, setCvalue] = useState(0)
  
    const [toggleclass, setToggleclass] = useState(false)
  
  
    const decNumber = () => {
      if (value > 0) {
        setValue(value - 1)
      }
    }
    const incNumber = () => {
      setValue(value + 1)
    }
    const deccNumber = () => {
      if (cvalue > 0) {
        setCvalue(cvalue - 1)
      }
    }
    const inccNumber = () => {
      setCvalue(cvalue + 1)
    }
  
  return (
    <div className="booking-section">
        <div className="container">
          <div className="box">

            <div className="text" onClick={()=>setToggleclass(true)}>
               {value === 0 && cvalue === 0 ? 'Select Person' :  <span>{value > 0 && `${value} Adult`}  {cvalue > 0 &&  `${cvalue} Children`} </span> }
            </div>

            <div className={`${toggleclass && "active"} popup`}>

              <div className="close" onClick={()=> setToggleclass(false)}>X</div>

              <div className="single">
                <strong>Adult</strong>
                <button onClick={decNumber}>-</button>
                <span>{value}</span>
                <button onClick={incNumber}>+</button>
              </div>

              <div className="single">
                <strong>Children</strong>
                <button onClick={deccNumber}>-</button>
                <span>{cvalue}</span>
                <button onClick={inccNumber}>+</button>
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}

export default SelectPerson