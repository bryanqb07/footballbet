import { connect } from 'react-redux';
import { fetchSub } from '../../actions/sub_actions';
import SubDetail from './sub_detail';

const mapStateToProps = ({ entities, session}, ownProps) => ({
    sub: entities.subs[ownProps.match.params.id],  
    currentUser: entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
    fetchSub: (id) => dispatch(fetchSub(id))
});

export default connect(
    mapStateToProps, mapDispatchToProps)(SubDetail);