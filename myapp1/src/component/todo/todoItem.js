import React, { useState } from 'react';
import './todo.css';

const TodoItem = (props) => {
    const [isEditing, changeEditing] = useState(false);

    function onEdit() {
        changeEditing(true);
    }
    function onCancel() {
        changeEditing(false);
    }
    function saveTask() {
        let oldTask = props.task,
            newTask = document.getElementById('editTask').value;
        props.changeTask(oldTask, newTask);
        changeEditing(false);
    }
    function changeTask(){
        if(isEditing){
            return(
                <td>
                    <input className="editTask" type="text" defaultValue={props.task} id="editTask"/>
                </td>
            )
        }
        return(
            <td>
                <span className={props.isCompleted ? 'strike' : ''}>{props.task}</span>
            </td>
        )
    }
    function changeButton(){
        if(isEditing){
            return(
                <td>
                    <button onClick={saveTask}>Save</button>
                    <button onClick={onCancel}>Cancel</button>
                </td>
            )
        }
        return(
            <td>
                <button onClick={onEdit}>Edit</button>
                <button onClick={() => props.deleteTask(props.task)}>Delete</button>
            </td>
        )
    }
    // render(){
        return(
            <tr>
                <td><input type="checkbox" onChange={() => props.toggleTask(props.task)} className="toggle-task" checked={props.isCompleted ? true : false}/></td>
                {changeTask()}
                {changeButton()}
            </tr> 
        )
    // }
}

export default TodoItem;