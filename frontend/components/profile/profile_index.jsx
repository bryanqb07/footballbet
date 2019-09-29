import React from 'react';

class ProfileIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const user_id = this.props.currentUser.id
        this.props.fetchSubs(user_id);
        this.props.fetchPosts(user_id);
        this.props.fetchComments(user_id);
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
        const header = (Object.keys(posts).length > 0 ?
            (<div>
                <h3>Posts</h3>
                {Object.keys(posts).map(idx => <Post
                    post={posts[idx]}
                    key={posts[idx].updated_at}
                    upVotePost={this.props.upVotePost}
                    downVotePost={this.props.downVotePost}
                />)}
            </div>)
            : (<h3>No posts available</h3>))


        return (
            <div>
                {header}
                <PostForm
                    createPost={this.props.createPost}
                    currentUser={this.props.currentUser}
                    subId={this.props.subId}
                    openModal={this.props.openModal} />
            </div >
        )

    }
}

export default ProfileIndex;