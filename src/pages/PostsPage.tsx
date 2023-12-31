import React,{useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Post from "../components/post";

const PostsPage = ({dispatch,loading, posts, hasErrors}) => {
    
    useEffect(() => {
        dispatch(fetchPosts());
    },[dispatch]);

     // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map((post) => <Post key={post.id} post={post} />)
  }
  return (
    <section>
      {renderPosts()}
    </section>
  )
}
const mapStateToProps = (state) => ({
    loading:state.posts.loading,
    posts:state.posts.posts,
    hasErrors:state.posts.hasErrors
})
const component = connect(mapStateToProps)(PostsPage);
export default component;