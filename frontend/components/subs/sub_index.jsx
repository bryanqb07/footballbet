import React from 'react';
import Sub from './sub';
import SubForm from './sub_form';


class SubsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchSubs();
    }

    render() {
        const subs = this.props.subs;
        
        return( Object.keys(subs).length > 0 ? 
            (<div>
               { Object.keys(subs).map(idx => <Sub sub={subs[idx]} key={idx} />)}
               <SubForm createSub={this.props.createSub} currentUser={this.props.currentUser} />
            </div> 
        ) :
            <h3>No subs available</h3>
            );
    }
}

export default SubsIndex;