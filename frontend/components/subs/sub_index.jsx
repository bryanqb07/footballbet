import React from 'react';
import Sub from './sub';
import SubForm from './sub_form';
import SearchBarContainer from '../search/search_bar_container';


class SubsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchSubs();
    }

    render() {
        const subs = this.props.subs;
        const subIndex = ( Object.keys(subs).length > 0 ? 
            (<div>
               { Object.keys(subs).map(idx => 
                    <Sub 
                        sub={subs[idx]} 
                        user_id={this.props.currentUser.id}
                        subscribe={this.props.subscribe}
                        key={idx} />)}
                    <SubForm 
                        createSub={this.props.createSub} 
                        currentUser={this.props.currentUser} />
            </div> 
        ) :
            <h3>No subs available</h3>
        );

        return(
            <div>
                <SearchBarContainer />
                { subIndex }
            </div>
        );
    }
}

export default SubsIndex;