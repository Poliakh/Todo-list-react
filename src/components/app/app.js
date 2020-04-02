import React from 'react';
import './app.css';

import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';
import SearchPanel from '../search-panel'
import AppHeader from '../app-header'


export default class App extends React.Component {
	idMax = 100;
	state = {
		todoData: [
			this.createItem('Drink Coffee'),
			this.createItem('Have a lunch'),
			this.createItem('Create React App')
		],
		searchValue: '',
		statusFilter: 'all'//all, done, active
	}
	createItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.idMax++
		}
	}
	toggleProp = (arr, id, prop) => {
		return arr.map((item) => {
			if (id === item.id) {
				item[prop] = !item[prop];
			};
			return item
		})
	};

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			const newArr = this.toggleProp(todoData, id, 'important')
			return {
				todoData: newArr
			};
		});
	};
	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			const newArr = this.toggleProp(todoData, id, 'done');
			return {
				todoData: newArr
			};
		});
	};

	addItem = (text) => {
		this.setState(({ todoData }) => {
			return {
				todoData: [...todoData, this.createItem(text)]
			}
		});
	};

	deleteItem = (key) => {
		this.setState(({ todoData }) => {
			const newArr = todoData.filter(item => {
				return (item.id !== key)
			});
			return {
				todoData: newArr
			}
		});
	};
	onFilterSearch = (value) => {
		this.setState({ searchValue: value })
	}
	onSearchItem = (arr) => {
		return arr.filter(item => (item.label.indexOf(this.state.searchValue) > -1));
	}
	onChangeFilter = (status) => {
		this.setState({ statusFilter: status })
	}
	onFilterItem = (arr) => {
		switch (this.state.statusFilter) {
			case 'active':
				return arr.filter(item => !item.done)

			case 'done':
				return arr.filter(item => item.done)

			default:
				return arr
		}
	}

	render() {
		const { todoData, statusFilter } = this.state;

		let newData = this.onSearchItem(todoData);

		const doneTasck = newData.filter(item => item.done).length;
		const activTasck = newData.length - doneTasck;

		newData = this.onFilterItem(newData);

		return (
			<div className="todo-app">
				<AppHeader
					active={activTasck}
					done={doneTasck} />
				<div className="top-panel d-flex">
					<SearchPanel onSearchPanel={this.onFilterSearch} />
					<ItemStatusFilter filter={statusFilter}
						onFilter={this.onChangeFilter} />
				</div>


				<TodoList todos={newData}
					changeImportant={this.onToggleImportant}
					changeDone={this.onToggleDone}
					deleteItem={this.deleteItem} />
				<ItemAddForm onAddItem={this.addItem} />
			</div>
		)
	};
};
