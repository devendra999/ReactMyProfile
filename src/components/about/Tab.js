import React, {useState} from 'react'
import './Tab.scss'
import Data from './TabData'


const Tab = () => {
    const [value, setvalue] = useState(0)

  return (
    <>
        <div className="tab-section">
            <div className="tab-btn">
                <ul>
                    {Data.map((e, i) => {
                        return <li key={i} className={`${i === value && 'active' }`}><button onClick={()=> setvalue(i)}>{e.btn}</button></li>
                    })}
                </ul>
            </div>
            <div className="tab-content">

                {Data.map((e, i) => {
                    return (
                        <div className={`single-content ${i === value && 'active' }`} key={i}>
                            <ul>
                                {Data[i].info.map((e, i) => {
                                    return (
                                        <li key={i}>
                                            <strong>{e.title}</strong> {e.text}
                                            <p>{e.content}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}

            </div>
        </div>
    </>
  )
}

export default Tab