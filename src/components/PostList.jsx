import { useContext } from "react"
import Post from "./Post"
import { PostList as PostListData } from '../store/post-list-store'
import WelcomeMessage from "./WelcomeMessage"


const PostList = () => {
    const { postList, fetchDummyPosts } = useContext(PostListData)

    const handleGetPostsOnClick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                fetchDummyPosts(data.posts)
            });
    }
    return (
        <div className="">
            {postList.length === 0 && <WelcomeMessage getPostsOnClick={handleGetPostsOnClick} />}
            {postList.map((post) => {
                return <Post key={post.id} post={post} />
            })}
        </div>
    );
}


export default PostList