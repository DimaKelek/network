import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/store';
import {MyPosts} from './MyPosts';
import {addPost, PostType, ProfilePageActionsType} from "../../../../redux/profileReducer";


type MapStatePropsType = {
    posts: Array<PostType>
}
type MapDispatchPropsType = {
    addPost: (newPostMessage: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const dispatch = (dispatch: Dispatch<ProfilePageActionsType>): MapDispatchPropsType => {
    return {
        addPost: (newPostMessage: string) => {
            dispatch(addPost(newPostMessage))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, dispatch)(MyPosts)