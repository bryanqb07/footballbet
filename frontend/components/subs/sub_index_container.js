import { connect } from 'react-redux';
import { fetchSubs, fetchSub, createSub } from '../../actions/sub_actions';
import { subscribe } from '../../actions/session_actions';
import SubsIndex from './sub_index';

const mapStateToProps = ({ entities, session }) => ({
    subs: entities.subs,
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchSub: (id) => dispatch(fetchSub(id)),
    fetchSubs: () => dispatch(fetchSubs()),
    createSub: (newSub) => dispatch(createSub(newSub)),
    subscribe: (user_id, sub_id) => dispatch(subscribe(user_id, sub_id))
});

export default connect(
    mapStateToProps, mapDispatchToProps)(SubsIndex);