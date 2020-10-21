import React, { Component } from 'react';
// import axios from 'axios';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';

class Posts extends Component {
    // state = { posts:[] };
    componentDidMount(){
        // const {data} = await axios.get('http://localhost:3001/posts');
        // // this.setState({posts: data});
        // fetch('http://localhost:3001/posts')
        // .then(res=>res.json())
        // .then(data=>this.setState({posts:data}))

        //call Action 
        this.props.fetchPosts();
    }
    render() { 
        return ( 
            <React.Fragment>
                <h1>Posts</h1>
                {this.props.posts.map(post=>(
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <h6>{post.author}</h6>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        posts: state.posts.items //Get Items From PostsReducer
    }
}
export default connect(mapStateToProps, { fetchPosts })( Posts );