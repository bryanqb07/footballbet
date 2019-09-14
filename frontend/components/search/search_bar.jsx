import React from 'react';
import SearchForm from './search_form';
import SubSearchDetail from './sub_search_detail';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount(){
        this.props.clearSearchSubs();
    }

    render() {
        const subs = this.props.subs; 
        // debugger
        const searchList = (
            Object.keys(subs).length > 0 ? Object.keys(subs).map((idx) =>
                <SubSearchDetail sub={subs[idx]} key={idx} />
            ) :
            ""
        )
        return (
            <div>
                <SearchForm searchSubs={this.props.searchSubs}/>
                { searchList }
            </div >
        )

    }
}

export default SearchBar;