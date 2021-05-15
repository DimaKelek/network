import React from 'react';
import {PostType} from '../../../../../redux/profileReducer';
import S from './Post.module.css';

export function Post(props: PostType) {
    return (
        <div className={S.item}>
            <div className={S.avatar}>
                <img src="https://goo.su/4VXx" alt=""/>
            </div>
            <div>
                <div className={S.message}>
                    {props.message}
                </div>
            </div>
            <div className={S.response}>
                <div className={S.like}>
                    <img src="https://goo.su/4VXX" alt=""/>
                    <div>25</div>
                </div>
                <div className={S.comment}>
                    <img src="https://goo.su/4x47" alt=""/>
                    <div>25</div>
                </div>
            </div>
        </div>
    );
}