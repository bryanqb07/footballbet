import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentsIndex from './comments_index';
import { selectComments } from '../../utils/selectors';


const mapStateToProps = (state, ownProps) => ({
    comments: selectComments(state, ownProps.comment_ids)
});

const mapDispatchToProps = dispatch => ({
    createComment: (newComment) => dispatch(createComment(newComment)),
});

export default connect(
    mapStateToProps, mapDispatchToProps)(CommentsIndex);