import React, {useState} from "react";
import S from "./Contacts.module.css";
import Scontact from "./Contact/Contact.module.css";
import {ContactsType, updateProfile} from "../../../../../store/profileReducer";
import {Contact} from "./Contact/Contact";
import {useFormik} from "formik";
import {MyButton} from "../../../../Decoration/MyButton/MyButton";
import {useDispatch} from "react-redux";
import {UpdateProfileDataType} from "../../../../../api/api";
import { SuperInput } from "../../../../Decoration/SuperInput/SuperInput";

type ContactsPropsType = {
    contacts: ContactsType
    isOwner: boolean
}

export const Contacts: React.FC<ContactsPropsType> = ({contacts, isOwner}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [openMode, setOpenMode] = useState<boolean>(false)
    const dispatch = useDispatch()

    const openInfoHandler = () => {
        setOpenMode(!openMode)
        if (editMode) {
            setEditMode(false)
        }
    }
    const editModeHandler = () => {setEditMode(!editMode)}
    const createRequestObject = (values: ContactsType): UpdateProfileDataType => {
        return {
            userId: 17320,
            fullName: "kelek",
            lookingForAJob: false,
            lookingForAJobDescription: "Test",
            contacts: {...values},
            aboutMe: "Test"
        }
    }
    const formik = useFormik({
        initialValues: {...contacts},
        onSubmit: values => {
            dispatch(updateProfile(createRequestObject(values)))
            editModeHandler()
        },
    })
    const arr = ["facebook", "website", "vk", "twitter", "instagram", "youtube", "github", "mainLink"]
    const contactItems = arr.map(c => <Contact title={c + ": "} contact={contacts[c as keyof ContactsType]}/>)
    const form = arr.map(c => {
        return (
            <div className={Scontact.contact_box}>
                <div className={Scontact.title}>{c + ": "}</div>
                <SuperInput
                    name={c}
                    onChange={formik.handleChange}
                    value={formik.values[c as keyof ContactsType]}
                    className={S.input}
                />
            </div>
        )
    })
    return (
        <div>
            <div className={S.moreInfoButton} onClick={openInfoHandler}>
                <span>{!openMode ? "Watch more" : "Hide info"}</span>
            </div>
            <div className={`${S.moreInfo} ${openMode && S.open}`}>
                {editMode
                    ? <form onSubmit={formik.handleSubmit}>
                        {isOwner && <MyButton className={S.editButton}>
                            {!editMode ? "Edit" : "Save"}</MyButton>}
                        {form}
                    </form>
                    : <div>
                        {isOwner && <MyButton className={S.editButton} onClick={editModeHandler}>
                            {!editMode ? "Edit" : "Save"}
                        </MyButton>}
                        {contactItems}
                    </div>
                }
            </div>
        </div>

    )
}