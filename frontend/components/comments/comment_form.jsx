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
        console.log(this.props)
        const newComment = merge(this.state, {
            post_id: this.props.post_id,
            parent_comment_id: this.props.parent_comment_id
        });
 
        this.props.createComment(newComment);
        this.setState({ body: ""}); // clear comment form
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