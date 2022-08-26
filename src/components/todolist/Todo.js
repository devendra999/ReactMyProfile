import React, { useState, useEffect } from 'react'
import './Todo.scss'

const Todo = () => {
    const getItem = () => {
        const list = localStorage.getItem("ReactItem");
        if(list) {
            return JSON.parse(list);
        } else {
            return [];
        }
    }

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getItem());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleBtn, setToggleBtn] = useState(false);

    const addItem = () => {
        if(!inputData){
            alert("Please Add Item")
        } else if(inputData && toggleBtn) {
            setItems(
                items.map((e)=> {
                    if(e.id === isEditItem) {
                        return {...items, name : inputData}
                    }
                    return e;
                })
            )
            setIsEditItem("");
            setInputData("");
            setToggleBtn(false);
        } else {
            const newItem = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItems([...items, newItem])
            setInputData("")
        }
    }

    const editItem = (i) => {
        const editItem = items.find((e) => {
            return e.id === i
        })
        setIsEditItem(i);
        setInputData(editItem.name);
        setToggleBtn(true);
    }


    const delItem = (i) => {
        const updateItem = items.filter((e) => {
            return e.id !== i;
        })
        setItems(updateItem)
    }

    const removeAll = () => {
        setItems([])
    }

    useEffect(() => {
      localStorage.setItem("ReactItem", JSON.stringify(items))
    }, [items])
    


  return (
    <>
        <div className="todo-section">
            <div className="container">
                <div className="todo-wrapper">
                    <h2 className='text-center'>Todo List</h2>
                    <div className="inputarea">
                        <input type="text" value={inputData} onChange={(e)=> setInputData(e.target.value)} />
                        {toggleBtn ? <button onClick={addItem}>Edit</button> : <button onClick={addItem}>Add</button>}
                    </div>
                    <div className="input-item">
                        {items.map((e) => {
                            const {id, name} = e;
                            return (
                                <>
                                    <div key={id} className="single-item">
                                        <span>{name}</span>
                                        <button className='edit' onClick={()=> editItem(id)} >Edit</button>
                                        <button className='del'  onClick={()=> delItem(id)} >Del</button>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div className="removeall text-center">
                        <button onClick={removeAll}>Remove All</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo