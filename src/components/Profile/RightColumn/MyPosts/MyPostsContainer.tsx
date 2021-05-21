import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';
import {MyPosts} from './MyPosts';
import {addPostAC, ProfilePageActionsType, ProfilePageType, updateNewPostAC} from "../../../../redux/profileReducer";


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
const mapDispatchToProps = (dispatch: (action: ProfilePageActionsType) => void): MapDispatchPropsType => {
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