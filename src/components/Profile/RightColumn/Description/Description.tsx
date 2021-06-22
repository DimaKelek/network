import React from "react";
import S from "./Description.module.css"
import {UserProfileType} from "../../../../redux/profileReducer";
import {Preloader} from "../../../Decoration/Preloader/Preloader";
import { Status } from "./Status/Status";

type DescriptionPropsType = {
    profile: UserProfileType | null
}

export function Description(props: DescriptionPropsType) {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className={S.description}>
            <div>
                <div className={S.title_container}>
                    <span className={S.title}>Имя: </span>
                    <span className={S.information}>{props.profile.fullName
                        ? props.profile.fullName : "Information is not defined"}</span>
                </div>
                <Status status={props.profile.aboutMe}/>
                <div className={S.title_container}>
                    <span className={S.title}>Поиск работы: </span>
                    <span className={S.information}>{props.profile.lookingForAJobDescription
                        ? props.profile.lookingForAJobDescription : "Information is not defined"}</span>
                </div>
            </div>
        </div>
    );
}