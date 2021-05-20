import React from "react";
import {addMessageAC, DialogPageType, updateMessageTextAC} from "../../redux/dialogsReducer";
import {ActionsTypes, AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type MapStatePropsType = DialogPageType
type MapDispatchPropsType = {
    sendMessage: () => void
    onMessageChange: (newText: string) => void
}

export type DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(addMessageAC())
        },
        onMessageChange: (newText: string) => {
            dispatch(updateMessageTextAC(newText))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);