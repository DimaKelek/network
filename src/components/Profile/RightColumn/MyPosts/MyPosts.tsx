import React from 'react';
import S from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {MyButton} from '../../../Decoration/MyButton/MyButton';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type AddPostFormPropsType = {
    newPostMessage: string
}

export function MyPosts(props: MyPostsPropsType) {
    const posts = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message}/>);

    //----callbacks---//
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
}

const AddPostForm: React.FC<InjectedFormProps<AddPostFormPropsType>> = props => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newPostMessage"} placeholder="Что нового?)" component={"textarea"}/>
        </div>
        <div className={S.add}>
            <MyButton>Add Post</MyButton>
        </div>
    </form>;
}

const AddPostFormRedux = reduxForm<AddPostFormPropsType>({form: "AddPostForm"})(AddPostForm)