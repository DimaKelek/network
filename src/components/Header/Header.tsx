import React from 'react';
import S from './Header.module.css';

export function Header() {
    return (
        <header className={S.header}>
            <img src="https://i.pinimg.com/originals/f7/4f/d1/f74fd1095615d51e4d55ebc14ccbefba.png" alt=""/>
            <div className={S.name_project}>Social Network BY KELEK</div>
        </header>
    );
}