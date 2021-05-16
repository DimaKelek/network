import React from 'react';
import S from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../../redux/profileReducer";


export type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostsPropsType) {

    const newPost = React.createRef<HTMLTextAreaElement>()

    const posts = props.posts.map( p => <Post key={p.id} id={p.id} message={p.message} />);

    //----callbacks---//
    const addPost = () => {
        if(newPost.current) {
            props.addPost()
        }
    }

    const onPostChange = () => {
        if(newPost.current) {
            const newText = newPost.current.value
            props.updateNewPostText(newText)
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
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={S.posts}>
                {posts}
            </div>
        </div>
    );
}