import React from 'react';
import TodoItem from './todoItem';
import './todo.css';
var _ = require('lodash');

const Todo = (props) => {
    function renderItem(){
        return _.map(props.todos, (todo, index) => <TodoItem key={index} {...todo} {...props}/>)
    }
    return(
        <div>
            <div className="header">
                <h3>{props.title}</h3>
            </div>
            <table className="show-not-completed-task">
                {
                    props.todos.length ? (
                        <tbody>
                            {renderItem()}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr className="no-task">
                                <td>{props.noTask}</td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        </div>
    )
}

export default Todo;