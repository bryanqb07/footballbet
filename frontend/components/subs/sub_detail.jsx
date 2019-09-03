import React from 'react';
import Sub from './sub'

class SubDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSub(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchSub(this.props.match.params.subId);
        }
    }

    render() {
        const { sub, currentUser } = this.props;
        console.log(sub);
        return (sub ? <Sub sub={sub} /> : <p>Hello</p>)
        // return (Object.keys(sub).length > 0 ?
        //     (<div>
        //         <Sub sub={sub} />
        //     </div>) :
        //     <h3>Error</h3>
        // );
    }
}

export default SubDetail;