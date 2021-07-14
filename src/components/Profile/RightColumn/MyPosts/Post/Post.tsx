import React from 'react';
import S from './Post.module.css';
import {PhotosType} from "../../../../../store/usersReducer";

type PostPropsType = {
    message: string
    photos?: PhotosType
}

export const Post: React.FC<PostPropsType> = React.memo(props => {
    const {message, photos} = props
    return (
        <div className={S.item}>
            <div className={S.avatar}>
                <img src={photos?.small || "https://goo.su/4zdi"} alt=""/>
            </div>
            <div className={S.message}>
                {message}
            </div>
        </div>
    );
})