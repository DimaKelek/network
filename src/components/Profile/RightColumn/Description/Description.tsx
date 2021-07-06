import React from "react";
import S from "./Description.module.css"
import {UserProfileType} from "../../../../store/profileReducer";
import {Preloader} from "../../../Decoration/Preloader/Preloader";
import { Status } from "./Status/Status";
import {UserType} from "../../../../store/usersReducer";

type DescriptionPropsType = {
    profile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void
    users: UserType[]
}

export function Description(props: DescriptionPropsType) {
    if(!props.profile) {
        return <Preloader />
    }
    const subs = props.users.filter(u => u.followed)
    return (
        <div className={S.description}>
            <div className={S.name}>
                {props.profile.fullName || "Information is not defined"}
            </div>
            <Status status={props.status} updateStatus={props.updateStatus}/>
            <div className={S.statistic}>
                <div className={`${S.subs} ${S.box}`}>
                    <div>{subs.length}</div>
                    <div>Subs</div>
                </div>
                <div className={`${S.news} ${S.box}`}>
                    <div>0</div>
                    <div>News</div>
                </div>
                <div className={`${S.photo} ${S.box}`}>
                    <div>0</div>
                    <div>Photos</div>
                </div>
                <div className={`${S.videos} ${S.box}`}>
                    <div>0</div>
                    <div>Videos</div>
                </div>
                <div className={`${S.friends} ${S.box}`}>
                    <div>0</div>
                    <div>Music</div>
                </div>
            </div>
            <div className={S.photos}>
                <div className={S.title}>Photos</div>
                <div className={S.img_box}>
                    <img src="https://goo.su/4zdi" alt="#"/>
                    <img src="https://goo.su/4zdi" alt="#"/>
                    <img src="https://goo.su/4zdi" alt="#"/>
                    <img src="https://goo.su/4zdi" alt="#"/>
                </div>
            </div>
        </div>
    );
}