import React, { useState } from 'react'

const Filterbtn = ({uniqValue, filterItem}) => {
  return (
    <>
        <div className='filter-btn'>
            <ul>
                {uniqValue.map((e, i) => {
                    return <li key={i}>
                                <button onClick={()=> filterItem(e) }>{e}</button>
                            </li>
                })}
            </ul>
        </div>
    </>
  )
}

export default Filterbtn