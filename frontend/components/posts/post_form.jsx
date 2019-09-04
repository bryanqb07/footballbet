import React from 'react';
import merge from 'lodash.merge';
// import { Link } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newPost = merge(this.state, { user_id: this.props.currentUser.id, sub_ids: [this.props.subId] });
        console.log(this.props)
        console.log(newPost)
        debugger
        this.props.createPost(newPost);
    }

    render() {
        return (
            <div>
                <p>Create new post</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <span>Title: </span>
                    <input value={this.state.title} onChange={this.handleInput("title")} type="text" />
                    <br />
                    <span>Description: </span>
                    <input value={this.state.description} onChange={this.handleInput("content")} type="text" />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default PostForm;