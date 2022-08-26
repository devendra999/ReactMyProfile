import React from 'react'

const FilterCard = ({items}) => {
    // console.log(items)
  return (
    <>
        {items.map((e) => {
      const {id, name, price, category, image, description} = e;
            return <div className="col-md-4 col-sm-6 col-xs-12 single-list" key={id}>
                        <div className="content">
                            <div className="image-wrapper">
                                <img src={image} alt="" />
                                <span>{id}</span>
                            </div>
                            <div className="info">
                                <h4>{name}</h4>
                                <p>{description}</p>
                                <div className="d-flex justify-content-between">
                                    <span>{category}</span>
                                    <span>{price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
        })}
    </>
    
    
    
  )
}

export default FilterCard