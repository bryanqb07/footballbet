import React from 'react';
import Comment from './comment';
// import Sub from './sub';
import CommentForm from './comment_form';


class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.comments != this.props.comments){
    //         console.log(prevProps.comments);
    //         console.log(this.props.comments);
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
                <CommentForm
                    createComment={this.props.createComment}
                    post_id={this.props.post_id}
                    parent_id={null}
                />
                {header}
            </div >
        )
    }
}

export default CommentsIndex;