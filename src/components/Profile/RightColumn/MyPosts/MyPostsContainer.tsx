import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {addPost, PostType, updateNewPost} from "../../../../redux/profileReducer";


type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPost: (newText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const dispatch: MapDispatchPropsType = {addPost, updateNewPost}

export const MyPostsContainer = connect(mapStateToProps, dispatch)(MyPosts)