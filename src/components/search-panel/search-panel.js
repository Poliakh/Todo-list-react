import React, {Component} from 'react';
import './search-panel';

export default class SearchPanel extends Component {
	state = {
		fieldValue:''
	}
	onSearch = ({target:{value}}) => {
		this.setState({fieldValue:value});
		this.props.onSearchPanel(value);
	}
	render(){
		return (
			<input type="text" className="form-control search-input" placeholder="type to search"
			onChange={ this.onSearch }
			value={ this.state.fieldValue } />
		)
	}
	

}

