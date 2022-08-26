import React, {useState} from 'react'

const data = [
    {
        img: "images/hero-image.jpg"
    },
    {
      img: "images/maggi.jpg"
    },
    {
      img: "images/puri.jpg"
    },
    {
      img: "images/sweet.jpg"
    },
    
  ];

const ImageSelect = () => {
    const [value, setValue] = useState(0);
    const [toggle, setToggle] = useState(false)


    const toggleDiv = () => {
        if(toggle) {
          setToggle(false)
        } else {
          setToggle(true)
        }
      }

 

  return (
    <div className="image-section">
        <button onClick={toggleDiv}>{toggle ? 'close modal' : 'Open Modal'}</button>
        {toggle && 
            <div className="popup">
                <div className="close" onClick={toggleDiv}>close</div>
                <h1>modal title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi quis, unde explicabo, excepturi eos adipisci quod blanditiis expedita perferendis voluptate? Et, ab qui.</p>
            </div>
        }


        {data.map((e, i) => {
                    return <img className={value === i ? 'active' : ''} key={e.i} src={e.img} alt="" />
                })}
        <div className="container">
            <div className="row select-image-wrapper">
                {data.map((e, i) => {
                    
                    return <div key={e.i} className="single-image" onClick={()=>setValue(i)}>
                                <img src={e.img} alt="" />
                            </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default ImageSelect