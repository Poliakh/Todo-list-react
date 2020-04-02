import React, { Component } from 'react';
import "./todo-list.css";

import TodoListItem from '../todo-list-item'

export default class TodoList extends Component {

	render() {
		const { todos, changeImportant, changeDone, deleteItem } = this.props;

		const elements = todos.map(item => {
			const { id, ...itemProps } = item;
			return (
				<li key={id} className="list-group-item">
					<TodoListItem {...itemProps}
						toggleImportant={()=>changeImportant(id)}
						toggleDone={()=>changeDone(id)}
						onDeleteItem={()=>deleteItem(id)} />
				</li>
			);
		});
		return (
			<ul className="list-group todo-list">
				{elements}
			</ul>
		);
	};
};
