import React from 'react';
import S from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostFormPropsType, AddPostFormRedux} from "./AddPostForm/AddPostFormRedux";

export const MyPosts: React.FC<MyPostsPropsType> = React.memo(props => {
    const posts = props.posts.map(p => <Post key={p.id} message={p.message} photos={props.photos}/>);

    const addPost = (values: AddPostFormPropsType) => {
        props.addPost(values.newPostMessage)
    }

    return (
        <div className={S.posts_box}>
            <div className={S.addPost}>
                <h3>My Posts</h3>
                <AddPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={S.posts}>{posts}</div>
        </div>
    );
})