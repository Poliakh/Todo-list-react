import React, { Component } from 'react';
import './item-add-form.css';

class ItemAddForm extends Component {
	state = {
		fieldImput:''
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAddItem(this.state.fieldImput);
		this.setState({fieldImput:""})
	};
	onChangeInput = ({target:{value}}) => this.setState({ fieldImput:value });
	render() {
		return (
			<form className="item-add-form d-flex"
				onSubmit={this.onSubmit}>
				<input className="form-control" placeholder="What needs to be done"
					onChange={this.onChangeInput}
					value={this.state.fieldImput} />
				<button className="btn btn-outline-secondary">Add Item</button>
			</form>
		)
	};
};


export default ItemAddForm;