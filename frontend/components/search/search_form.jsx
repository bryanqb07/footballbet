import React from 'react';

// import { Link } from 'react-router-dom';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
    }

    handleChange(e){
        this.setState({ text: e.target.value });
        this.props.searchSubs(e.target.value);
    }

    render() {
        return (
            <div>
                <input 
                    placeholder="Search by sub title"
                    value={this.state.text} 
                    onChange={this.handleChange.bind(this)} type="text" />
                <br />            
            </div>
        )
    }
}

export default SearchForm;