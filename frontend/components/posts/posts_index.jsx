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
        console.log(this.props);
        // debugger
        const header = ( Object.keys(posts).length > 0 ?
            (<div>
                <h3>Posts</h3>
                {Object.keys(posts).map(idx => <Post 
                    post={posts[idx]} 
                    key={posts[idx].updated_at} 
                    upVotePost={this.props.upVotePost}
                    downVotePost={this.props.downVotePost}
                    />)}
            </div>)
        : (<h3>No posts available</h3>) )
            

        return (
                <div>
                    { header }
                    <PostForm
                        createPost={this.props.createPost}
                        currentUser={this.props.currentUser}
                        subId={this.props.subId} 
                        openModal={this.props.openModal} />
                </div >
            )

    }
}

export default PostsIndex;