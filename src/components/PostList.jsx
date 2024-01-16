import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostList as PostListData } from '../store/post-list-store'
import WelcomeMessage from "./WelcomeMessage"
import LoadingSpinner from "./LoadingSpinner"


const PostList = () => {
    const { postList, fetchDummyPosts } = useContext(PostListData)
    const [fetching, setFetching ] = useState(false)

    useEffect(() => {
        setFetching(true)
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                fetchDummyPosts(data.posts)
                setFetching(false)
            });
    }, [])

    return (
        <div className="">
            {fetching && <LoadingSpinner /> }
            {!fetching && postList.length === 0 && <WelcomeMessage />}
            {!fetching && postList.map((post) => {
                return <Post key={post.id} post={post} />
            })}
        </div>
    );
}


export default PostList