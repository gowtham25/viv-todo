import React, { Component } from 'react';
import AddItem from './component/addItem/addItem';
import Todo from './component/todo/todo';
import './App.css';
var _ = require('lodash');

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			todos:[],
			completed:[],
			notCompleted:[],
			err:''
		}
	}

	toggleTask = (task) => {
		const findTask = _.find(this.state.todos, todo => todo.task === task);
		findTask.isCompleted = !findTask.isCompleted;
		this.setState({todos: this.state.todos});
		let	comp = _.filter(this.state.todos, function(o) { return !o.isCompleted; }),
			notComp = _.filter(this.state.todos, function(o) { return o.isCompleted; });
		this.setState({
			completed:comp,
			notCompleted:notComp
		});
		
	}

	createTask = (task) => {
		if(task === "" || task.trim().length === 0){
			this.setState({err:"Task name should not be empty"});
			return false;
		}
		let myTask = [...this.state.todos];
		let findDuplicate = _.filter(myTask, function(o) { return o.task.trim() === task.trim(); });
		if(findDuplicate.length > 0){
			this.setState({err:"Already you add the same Task."});
			return false;
		}
		myTask.push({
			task,
			isCompleted: false
		});
		let comp = _.filter(myTask, function(o) { return !o.isCompleted; });
		this.setState({
			todos:myTask,
			completed:comp,
			err:''
		});
		document.getElementsByClassName('add-todo')[0].value = "";
		
	}

	deleteTask = (task) => {
		let myTask = [...this.state.todos];
		const deleteTask = _.reject(myTask, todo => todo.task === task);
		let	comp = _.filter(deleteTask, function(o) { return !o.isCompleted; }),
			notComp = _.filter(deleteTask, function(o) { return o.isCompleted; });
		this.setState({
			todos:deleteTask,
			completed:comp,
			notCompleted:notComp
		});
	}

	saveTask = (oldTask, newTask) => {
		const changeTask = _.find(this.state.todos, todo => todo.task === oldTask);
		changeTask.task = newTask;
		this.setState({todos:this.state.todos});
	}
	
	render() {
		return (
			<div className="App">
				<AddItem newTask={this.createTask}/>
				<Todo todos={this.state.completed} changeTask={this.saveTask} toggleTask={this.toggleTask} deleteTask={this.deleteTask} noTask="No more tasks to do." title="TODO"/>
				<Todo todos={this.state.notCompleted} changeTask={this.saveTask} toggleTask={this.toggleTask} deleteTask={this.deleteTask} noTask="There are no completed tasks." title="COMPLETED"/>
				<h3 className="error">{this.state.err}</h3>
			</div>
		);
	}
}

export default App;
