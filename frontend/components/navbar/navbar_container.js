import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ entities, session }) => ({
    currentUser: entities.users[session.id] 
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
    mapStateToProps, mapDispatchToProps)(Navbar);