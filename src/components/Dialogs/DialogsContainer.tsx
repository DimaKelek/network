import React from "react";
import {DialogPageType, onMessageChange, sendMessage} from "../../redux/dialogsReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type MapStatePropsType = DialogPageType & {
    isAuth: boolean
}

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
        isAuth: state.auth.isAuth
    }
}

const dispatch: MapDispatchPropsType = {sendMessage, onMessageChange}
export const DialogsContainer = connect(mapStateToProps, dispatch) (Dialogs);