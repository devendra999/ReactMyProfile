import React, { useState } from 'react'
import data from './AccordionData'

const Accordion = () => {

    const [value, setvalue] = useState(0)


  return (
        <div className="acc-section">
            <div className="container">
            <h2 class="text-center"> Accordion </h2>
                <div className="acc-wrapper">
                    {data.map((e, i) => {
                        return <div className={`single-list ${value === i && 'active' }`} key={i}>
                                    <div className="acc-title" onClick={()=> setvalue(i)}>{e.title}</div>
                                    <div className="acc-content">{e.info}</div>
                                </div>
                    })}
                </div>
            </div>
        </div>
  )
}

export default Accordion