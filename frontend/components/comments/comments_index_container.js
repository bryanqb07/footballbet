import { connect } from 'react-redux';
import { createComment, upVoteComment, downVoteComment } from '../../actions/comment_actions';
import CommentsIndex from './comments_index';
import { selectComments } from '../../utils/selectors';


const mapStateToProps = (state, ownProps) => ({
    comments: selectComments(state, ownProps.comment_ids)
});

const mapDispatchToProps = dispatch => ({
    createComment: (newComment) => dispatch(createComment(newComment)),
    upVoteComment: (comment_id) => dispatch(upVoteComment(comment_id)),
    downVoteComment: (comment_id) => dispatch(downVoteComment(comment_id))
});

export default connect(
    mapStateToProps, mapDispatchToProps)(CommentsIndex);