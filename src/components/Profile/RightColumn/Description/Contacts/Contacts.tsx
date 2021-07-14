import React from "react";
import S from "./Contacts.module.css";
import {ContactsType} from "../../../../../store/profileReducer";
import {Contact} from "./Contact/Contact";

type ContactsPropsType = {
    contacts: ContactsType
    openMode: boolean
}

export const Contacts: React.FC<ContactsPropsType> = ({contacts, openMode}) => {
    return (
        <div className={`${S.moreInfo} ${openMode && S.open}`}>
            <Contact title="Facebook: " contact={contacts.facebook}/>
            <Contact title="Github: " contact={contacts.github}/>
            <Contact title="Vk: " contact={contacts.vk}/>
            <Contact title="Instagram: " contact={contacts.instagram}/>
            <Contact title="Website: " contact={contacts.website}/>
            <Contact title="Twitter: " contact={contacts.twitter}/>
            <Contact title="Youtube: " contact={contacts.youtube}/>
        </div>
    )
}