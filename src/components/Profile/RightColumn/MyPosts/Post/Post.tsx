import React from 'react';
import {PostType} from '../../../../../redux/profileReducer';
import S from './Post.module.css';

export function Post(props: PostType) {
    return (
        <div className={S.item}>
            <div className={S.avatar}>
                <img src="https://goo.su/4zdi" alt=""/>
            </div>
            <div>
                <div className={S.message}>
                    {props.message}
                </div>
            </div>
        </div>
    );
}