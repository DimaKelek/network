import React from "react";
import S from "./Description.module.css"
import {UserProfileType} from "../../../../redux/profileReducer";

type DescriptionPropsType = {
    profile: UserProfileType
}

export function Description(props: DescriptionPropsType) {
    return (
        <div className={S.description}>
            <div>
                <div className={S.title_container}>
                    <span className={S.title}>Имя: </span>
                    <span className={S.information}>{props.profile.fullName
                        ? props.profile.fullName : "Information is not defined"}</span>
                </div>
                <div className={`${S.title_container} ${S.status}`}>
                    <span className={S.title}>Статуc: </span>
                    <span className={S.information}>{props.profile.aboutMe ? props.profile.aboutMe : "No status"}</span>
                </div>
                <div className={S.title_container}>
                    <span className={S.title}>Поиск работы: </span>
                    <span className={S.information}>{props.profile.lookingForAJobDescription
                        ? props.profile.lookingForAJobDescription : "Information is not defined"}</span>
                </div>
            </div>
        </div>
    );
}