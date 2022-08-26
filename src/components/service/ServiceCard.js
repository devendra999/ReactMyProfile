import React from 'react'

const ServiceCard = ({Data}) => {
  return (
    <>
        {Data.map((e) => {
          const {id, title, info} = e;
          return <div className="col-md-4 col-sm-6 col-xs-6 col-12 single-list" key={id}>
                      <div className="content">
                          <div className="icon"><i class={e.icon}></i></div>
                          <h4>{title}</h4>
                          <p>{info}</p>
                      </div>
                  </div>
        })}
    </>
  )
}

export default ServiceCard