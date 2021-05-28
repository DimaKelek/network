import React from 'react';
import S from './Header.module.css';

type HeaderPropsType = {
    url: string
}

export function Header(props: HeaderPropsType) {
    const title = props.url.split('').map( (l, i) => <span key={i}>{l}</span>)
    return (
        <header className={S.header}>
            <img src="https://i.pinimg.com/originals/f7/4f/d1/f74fd1095615d51e4d55ebc14ccbefba.png" alt="#"/>
            <div className={S.title}>
                {title}
            </div>
        </header>
    );
}