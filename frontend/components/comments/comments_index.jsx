import React from 'react';
import Comment from './comment';
// import Sub from './sub';
import CommentForm from './comment_form';


class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const comments = this.props.comments;

        const header = (Object.keys(comments).length > 0 ?
            (<div>
                <h5>Comments</h5>
                {Object.keys(comments).map(idx => <Comment
                    createComment={this.props.createComment} 
                    comment={comments[idx]} 
                    key={comments[idx].updated_at} 
                    upVoteComment={this.props.upVoteComment}
                    downVoteComment={this.props.downVoteComment} 
                />)}
            </div>)
            : (<h5>No comments available</h5>))

        return (
            <div>
                <CommentForm
                    createComment={this.props.createComment}
                    post_id={this.props.post_id}
                    parent_id={null}
                    openModal={this.props.openModal}
                    currentUser={this.props.currentUser}
                />
                {header}
            </div >
        )
    }
}

export default CommentsIndex;