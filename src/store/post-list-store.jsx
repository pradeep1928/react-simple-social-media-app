/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

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

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    fetchDummyPosts: () => { },
    deletePost: () => { }
})

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    } else if (action.type === 'FETCH_DUMMY_POSTS') {
        newPostList = action.payload.posts
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userID, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reactions: reactions,
                user_id: userID,
                tags: tags
            }
        })
    };

    const fetchDummyPosts = (posts) => {
        dispatchPostList({
            type: 'FETCH_DUMMY_POSTS',
            payload: {
                posts
            }
        })
    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId
            }
        })
    };

    return <PostList.Provider value={{ postList, addPost, fetchDummyPosts, deletePost }}>
        {children}
    </PostList.Provider>
}

export default PostListProvider