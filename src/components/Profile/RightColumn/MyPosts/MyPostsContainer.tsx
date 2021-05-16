import React from 'react';
import {connect} from 'react-redux';
import {ActionsTypes, RootType} from '../../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {addPostAC, ProfilePageType, updateNewPostAC} from "../../../../redux/profileReducer";

/*
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
}*/

type MapStatePropsType = ProfilePageType

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const mapStateToProps = (state: RootType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchPropsType => {
    return {
        addPost: () => {
           dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostAC(newText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)