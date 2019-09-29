import React from 'react';
import Sub from './sub'
import PostsIndexContainer from '../posts/posts_index_container';
import { Link } from 'react-router-dom';

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
        const { sub, currentUserID } = this.props;
        return (sub ? 
            <div>
                <Link to="/">Home</Link>
                <Sub 
                    sub={sub} 
                    user_id={currentUserID}
                    subscribe={this.props.subscribe}/> 
                <PostsIndexContainer subId={sub.id} post_ids={sub.post_ids}/>
            </div> : 
        <p>Loading...</p>
        )

    }
}

export default SubDetail;