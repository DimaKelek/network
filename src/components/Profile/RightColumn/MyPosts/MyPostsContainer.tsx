import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../store/store';
import {MyPosts} from './MyPosts';
import {profileActions, PostType, ProfileActionsType} from "../../../../store/profileReducer";
import {PhotosType} from "../../../../store/usersReducer";


type MapStatePropsType = {
    posts: Array<PostType>
    photos?: PhotosType
}
type MapDispatchPropsType = {
    addPost: (newPostMessage: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        photos: state.profilePage.profile?.photos
    }
}

const dispatch = (dispatch: Dispatch<ProfileActionsType>): MapDispatchPropsType => {
    return {
        addPost: (newPostMessage: string) => {
            dispatch(profileActions.addPost(newPostMessage))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, dispatch)(MyPosts)