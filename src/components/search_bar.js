/**
 * Created by shitman on 18.01.2017.
 */
import React, { Component } from 'react'

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { term: '' };
	}

    render() {
        return (
    	    <div>
	            <input
		        value = {this.state.term}
	    />
		Value: {this.state.term}
	    </div>
    )
  }

};

export default SearchBar;