import React from 'react';
import Sub from './sub'
import PostsIndexContainer from '../posts/posts_index_container';

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
        return (sub ? 
            <div>
                <Sub sub={sub} /> 
                <PostsIndexContainer subId={sub.id} post_ids={sub.post_ids}/>
            </div> : 
        <p>Loading...</p>
        )

    }
}

export default SubDetail;