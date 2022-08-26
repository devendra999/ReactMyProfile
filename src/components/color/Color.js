import React from 'react'
import './colorsytle.scss'

const colors = [
    {
        color: '#f00',
        label: 'red'
    },
    {
        color: '#524547',
        label: 'yellow'
    },
    {
        color: '#0f0',
        label: 'green'
    },
    {
        color: '#00f',
        label: 'blue'
    },
];


const Color = () => {
  return (
    <>
        <div className="color-section" style={{backgroundColor: 'gray'}}>
            <div className="container">
                <div className="text-center">
                    <h3>Please Select color Below</h3>
                    <h5>Selected Color is: </h5>
                    <ul>
                        <li><span className='bg red'></span></li>
                        <li><span className='bg yellow'></span></li>
                        <li><span className='bg green'></span></li>
                        <li><span className='bg blue'></span></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Color