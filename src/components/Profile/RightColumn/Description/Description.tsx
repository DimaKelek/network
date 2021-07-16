import React, {useState} from "react";
import S from "./Description.module.css"
import {UserProfileType} from "../../../../store/profileReducer";
import {Preloader} from "../../../Decoration/Preloader/Preloader";
import {Status} from "./Status/Status";
import {StatisticPanel} from "./Statistic/StatisticPanel";
import {Photos} from "./Photos/Photos";
import {Contacts} from "./Contacts/Contacts";

type DescriptionPropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const Description: React.FC<DescriptionPropsType> = React.memo(props => {
    const {status, updateStatus} = props


    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={S.description}>
            <div className={S.name}>
                {props.profile.fullName || "Information is not defined"}
            </div>
            <Status status={status} updateStatus={updateStatus}/>
            <div className={S.job}>
                Looking for a job: {props.profile.lookingForAJob ? "Yes" : "Later"}
            </div>
            <Contacts contacts={props.profile.contacts} isOwner={props.isOwner}/>
            <StatisticPanel/>
            <Photos/>
        </div>
    );
})

