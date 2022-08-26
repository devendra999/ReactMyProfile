import React, {useState} from 'react'
import Menu from './Menu'
import FilterCard from './FilterCard'
import Filterbtn from './Filterbtn'

const uniqValue = ["All", 
    ...new Set(Menu.map((e, i) => {
        return e.category
    }))
]


const Filter = () => {
    const [items, setItems] = useState(Menu)
    const [value, setValue] = useState(0)

    const filterItem = (category, i) => {
        if(category === "All") {
            return (
                setItems(Menu)
            )
        }
        
        const updateItem = Menu.filter((e) => {
            return e.category === category;
        })

        setItems(updateItem)

    }
  


  return (
    <div className="filter-section">
        <div className="container">
            <h2 className='text-center'>Filter Item</h2>
            <Filterbtn uniqValue={uniqValue} filterItem={filterItem} />
            <div className="row filter-list">
                <FilterCard items={items}  />
            </div>
        </div>
    </div>
  )
}

export default Filter