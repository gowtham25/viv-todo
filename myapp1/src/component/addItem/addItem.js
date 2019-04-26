import React from 'react';
import './addItem.css';

const AddItem = (props) => {
    function addTodo() {
        props.newTask(document.getElementsByClassName('add-todo')[0].value);
    }
    return(
        <div>
            <div className="header">
                <h3>ADD ITEM</h3>
            </div>
            <input type="text" className="add-todo"/> 
            <button onClick={addTodo} className="add-todo-button">Add</button>
        </div>
    )
}

export default AddItem;