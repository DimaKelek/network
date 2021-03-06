import React, {Dispatch} from "react";
import {DialogPageType, DialogsPageActionsType, dialogsActions} from "../../store/dialogsReducer";
import {AppStateType} from "../../store/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = DialogPageType

type MapDispatchPropsType = {
    sendMessage: (newMessage: string) => void
}

export type DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

const dispatch = (dispatch: Dispatch<DialogsPageActionsType>): MapDispatchPropsType => {
   return {
       sendMessage: (newMessage: string) => {
           dispatch(dialogsActions.sendMessage(newMessage))
       }
   }
}

export const DialogsContainer = compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, dispatch)
)(Dialogs)