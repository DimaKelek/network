import React from 'react';
import {connect} from 'react-redux';
import {ActionsTypes, AppStateType} from '../../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {addPostAC, ProfilePageType, updateNewPostAC} from "../../../../redux/profileReducer";


type MapStatePropsType = ProfilePageType
type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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