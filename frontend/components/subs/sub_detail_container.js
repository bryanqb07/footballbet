import { connect } from 'react-redux';
import { fetchSub } from '../../actions/sub_actions';
import SubDetail from './sub_detail';
import { subscribe } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session}, ownProps) => ({
    sub: entities.subs[ownProps.match.params.id],  
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchSub: (id) => dispatch(fetchSub(id)),
    subscribe: (user_id, sub_id) => dispatch(subscribe(user_id, sub_id))
});

export default connect(
    mapStateToProps, mapDispatchToProps)(SubDetail);