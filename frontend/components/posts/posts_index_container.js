import { connect } from 'react-redux';
import { createPost, upVotePost, downVotePost } from '../../actions/post_actions';
import PostsIndex from './posts_index';
import { selectPosts } from '../../utils/selectors';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
    posts: selectPosts(state, ownProps.post_ids),
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    createPost: (newPost) => dispatch(createPost(newPost)),
    upVotePost: (post_id) => dispatch(upVotePost(post_id)),
    downVotePost: (post_id) => dispatch(downVotePost(post_id)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps, mapDispatchToProps)(PostsIndex);