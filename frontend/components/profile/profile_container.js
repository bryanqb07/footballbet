import { connect } from 'react-redux';
import { fetchSub } from '../../actions/sub_actions';
import ProfileIndex from './profile_index';
import { subscribe } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => ({
    sub: entities.subs[ownProps.match.params.id],
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchSubs: (user_id) => dispatch(fetchSub(id)),
    fetchPosts: (user_id) => dispatch(fetchSub(id)),
    fetchComments: (user_id) => dispatch(fetchSub(id)),
    subscribe: (user_id, sub_id) => dispatch(subscribe(user_id, sub_id))
});

export default connect(
    mapStateToProps, mapDispatchToProps)(ProfileIndex);