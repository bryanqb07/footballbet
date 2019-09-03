import React from 'react';
import merge from 'lodash.merge';
// import { Link } from 'react-router-dom';

class SubForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        const newSub = merge(this.state, { moderator_id: this.props.currentUser.id});
        this.props.createSub(newSub);
    }

    render() {
        return(
            <div>
                <p>Create new sub</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <span>Title: </span> 
                    <input value={this.state.title} onChange={this.handleInput("title")} type="text"/>
                    <br />
                    <span>Description: </span>
                    <input value={this.state.description} onChange={this.handleInput("description")} type="text" />
                    <br />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default SubForm;