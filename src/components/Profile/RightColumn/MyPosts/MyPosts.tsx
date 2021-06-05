import React, {ChangeEvent} from 'react';
import S from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import { MyButton } from '../../../Decoration/MyButton/MyButton';

export function MyPosts(props: MyPostsPropsType) {
    const posts = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}/>);

    //----callbacks---//
    const addPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const newText = e.currentTarget.value
            props.updateNewPost(newText)
        }
    }
    return (
        <div className={S.posts_box}>
            <div className={S.addPost}>
                <h3>My Posts</h3>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChange}
                        placeholder="Что нового?)"
                    />
                </div>
                <div className={S.add}>
                    <MyButton onClick={addPost}>Add Post</MyButton>
                </div>
            </div>
            <div className={S.posts}>{posts}</div>
        </div>
    );
}