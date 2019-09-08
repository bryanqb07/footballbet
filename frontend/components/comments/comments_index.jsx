import React from 'react';
import Comment from './comment';
// import Sub from './sub';
import CommentForm from './comment_form';


class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidUpdate(prevProps){
    //     (prevProps.post_ids != this.props.post_ids){
    //         this.props.
    //     }
    // }

    render() {
        const comments = this.props.comments;

        const header = (Object.keys(comments).length > 0 ?
            (<div>
                <h5>Comments</h5>
                {Object.keys(comments).map(idx => <Comment
                    createComment={this.props.createComment} 
                    comment={comments[idx]} 
                    key={comments[idx].id} />)}
            </div>)
            : (<h5>No comments available</h5>))

        return (
            <div>
                {header}
                <CommentForm
                    createComment={this.props.createComment}
                    currentUser={this.props.currentUser}
                    post_id={this.props.post_id} 
                    parent_id={null}
                />
            </div >
        )
    }
}

export default CommentsIndex;