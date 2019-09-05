import React from 'react';
import Post from './post';
// import Sub from './sub';
import PostForm from './post_form';


class PostsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidUpdate(prevProps){
    //     (prevProps.post_ids != this.props.post_ids){
    //         this.props.
    //     }
    // }

    render() {


        const posts = this.props.posts;
        // debugger
        return (Object.keys(posts).length > 0 ?
            (<div>
                <h3>Posts</h3>
                {Object.keys(posts).map(idx => <Post post={posts[idx]} key={idx} />)}
                <PostForm 
                    createPost={this.props.createPost} 
                    currentUser={this.props.currentUser} 
                    subId={this.props.subId}/>
            </div>
            ) :
            <div>
                <h3>No posts available</h3>
                <PostForm
                    createPost={this.props.createPost}
                    currentUser={this.props.currentUser}
                    subId={this.props.subId} />
            </div >
        );
    }
}

export default PostsIndex;