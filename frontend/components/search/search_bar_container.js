import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { searchSubs, clearSearchSubs } from '../../actions/sub_actions';

const mapStateToProps = ({ ui }) => ({
    subs: ui.subs
});

const mapDispatchToProps = dispatch => ({
    searchSubs: query => dispatch(searchSubs(query)),
    clearSearchSubs: () => dispatch(clearSearchSubs())
});

export default connect(
    mapStateToProps, mapDispatchToProps)(SearchBar);