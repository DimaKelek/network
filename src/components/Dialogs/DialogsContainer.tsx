import React from "react";
import {DialogPageType, onMessageChange, sendMessage} from "../../redux/dialogsReducer";
import {AppStateType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

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

const dispatch: MapDispatchPropsType = {sendMessage, onMessageChange}

export const DialogsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, dispatch)
)(Dialogs)