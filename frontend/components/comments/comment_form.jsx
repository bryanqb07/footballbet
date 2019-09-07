import React from 'react';
import merge from 'lodash.merge';
// import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ""
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newComment = merge(this.state, { 
            user_id: this.props.currentUser.id, 
            post_id: [this.props.postId] });
        // console.log(this.props)
        // console.log(newPost)
        // debugger
        this.props.createComment(newComment);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        placeholder="Add comment here..." 
                        value={this.state.body} onChange={this.handleInput("body")} type="text" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default CommentForm;