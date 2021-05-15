import React from 'react';
import S from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {NeonButton} from "../../../Decoration/NeonButton/Neon";
import {addPostAC, PostType, updateNewPostAC} from "../../../../redux/profileReducer";
import { ActionsTypes } from '../../../../redux/redux-store';


export type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}
export function MyPosts(props: MyPostsPropsType) {
    const newPost = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if(newPost.current) {
            props.dispatch(addPostAC())
        }
    }

    const posts = props.posts.map( p => <Post key={p.id} id={p.id} message={p.message} />);

    //----callbacks---//
    const onPostChange = () => {
        if(newPost.current) {
            const newText = newPost.current.value
            props.dispatch(updateNewPostAC(newText))
        }
    }
    return (
        <div className={S.posts_box}>
            <div className={S.addPost}>
                <h3>My Posts</h3>
                <div>
                    <textarea
                        ref={newPost}
                        value={props.newPostText}
                        onChange={onPostChange}
                        placeholder="Что нового?)"
                    />
                </div>
                <div className={S.add}>
                    <NeonButton title="Add post" instruction={addPost}/>
                </div>
            </div>
            <div className={S.posts}>
                {posts}
            </div>
        </div>
    );
}