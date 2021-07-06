import React from 'react';
import {PostType} from '../../../../../store/profileReducer';
import S from './Post.module.css';

export const Post: React.FC<PostType> = React.memo(props => {
    const {message, ...restProps} = props
    return (
        <div className={S.item}>
            <div className={S.avatar}>
                <img src="https://goo.su/4zdi" alt=""/>
            </div>
            <div>
                <div className={S.message}>
                    {message}
                </div>
            </div>
        </div>
    );
})