import React, { Component } from 'react';
import './item-status-filter.css';



class ItemStatusFilter extends Component {
	status = [
		{label:'all', name:'all'},
		{label:'active', name:'active'},
		{label:'done', name:'done'},
	]

	render() {
		const buttons = this.status.map(({label, name} ) => {
			const className= (this.props.filter === name)? "btn btn-info": "btn btn-outline-secondary";
			return (
				<button type="button"
					className={className}
					name={name}
					key={name}
					onClick={()=>this.props.onFilter(name)} > {label}</button>
			);
		});
		
		return (
			<div className="btn-group" >
				{buttons}
			</div>
		)
	}
};

export default ItemStatusFilter;