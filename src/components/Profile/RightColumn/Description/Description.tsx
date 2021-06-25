import React from "react";
import S from "./Description.module.css"
import {UserProfileType} from "../../../../redux/profileReducer";
import {Preloader} from "../../../Decoration/Preloader/Preloader";
import { Status } from "./Status/Status";

type DescriptionPropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export function Description(props: DescriptionPropsType) {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className={S.description}>
            <div className={S.name}>
                {props.profile.fullName || "Information is not defined"}
            </div>
            <Status status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}