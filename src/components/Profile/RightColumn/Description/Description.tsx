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
}

export const Description: React.FC<DescriptionPropsType> = React.memo(props => {
    const {status, updateStatus} = props
    const [openMode, setOpenMode] = useState<boolean>(false)

    const openInfo = () => {setOpenMode(!openMode)}
    const infoButtonStyle = `${S.moreInfoButton} ${openMode && S.openMode_button}`

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
            <div className={infoButtonStyle} onClick={openInfo}>
                <span>{!openMode ? "Watch more" : "Hide info"}</span>
            </div>
            <Contacts contacts={props.profile.contacts} openMode={openMode}/>
            <StatisticPanel/>
            <Photos/>
        </div>
    );
})

