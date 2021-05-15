import React from 'react';
import {addPostAC, updateNewPostAC} from "../../../../redux/profileReducer";
import {StoreType} from '../../../../redux/redux-store';
import {MyPosts} from './MyPosts';

type MyPostsContainerPropsType = {
    store: StoreType
}

export function MyPostsContainer(props: MyPostsContainerPropsType) {
    const profilePageState = props.store.getState().profilePage
    const posts = profilePageState.posts
    const value = profilePageState.newPostText

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onPostChange = (newText: string) => {
        props.store.dispatch(updateNewPostAC(newText))
    }

    return (
       <MyPosts
           posts={posts}
           addPost={addPost}
           updateNewPostText={onPostChange}
           newPostText={value}
       />
    );
}