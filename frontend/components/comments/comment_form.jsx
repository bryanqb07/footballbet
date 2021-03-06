import React from 'react';
import merge from 'lodash.merge';
// import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentUser != this.props.currentUser){
            console.log(true);
        }        
    }

    handleSubmit(e) {       
        e.preventDefault();

        if(this.props.currentUser){
            const newComment = merge(this.state, {
                post_id: this.props.post_id,
                parent_comment_id: this.props.parent_comment_id
            });
    
            this.props.createComment(newComment);
            this.setState({ body: ""}); // clear comment form
        }
        else {
            this.props.openModal("login")
        }
   }

    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        placeholder="Add comment here..." 
                        value={this.state.body} 
                        onChange={(e) => this.setState({ body: e.target.value })} 
                        type="text" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default CommentForm;