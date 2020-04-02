import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({label, important, done, toggleDone, toggleImportant, onDeleteItem}) => {
	let className = 'todo-list-item';
		if(important){
			className += ' important';
		};
		if(done){
			className += ' done';
		};


	return (
			<span className={className}>
				<span className="todo-list-item-label "
				onClick={toggleDone}> {label} </span>

				<button type="button" className="btn btn-outline-success btn-sm float-right" 
				onClick={toggleImportant} ><i className="fa fa-exclamation"></i></button>

				<button type="button" className="btn btn-outline-danger btn-sm float-right"
				onClick = {onDeleteItem} ><i className="fa fa-trash-o"
				></i></button>
			</span>
	)
}

export default TodoListItem; 