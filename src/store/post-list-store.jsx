/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

const PostList =  createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
})

const postListReducer = (currPostList, action) => {
    return currPostList
}

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST) 
    const addPost = () => {}
    const deletePost = () => {}
    return <PostList.Provider value={{ postList, addPost, deletePost}}>
        {children}
    </PostList.Provider>
}

const DEFAULT_POST_LIST = [
    {
        id: 1,
        title: 'going to village',
        body: "hello guys, I am going to village. Lot's of enjoyment ahead",
        reactions: 5,
        user_id: 'user_1',
        tags: ['travel', 'village']
    },
    {
        id: 2,
        title: 'Learning React',
        body: "hello guys, I am Learning react. It's a fun to code in React",
        reactions: 10,
        user_id: 'user_2',
        tags: ['React', 'coding', 'learning']
    }

]

export default PostListProvider