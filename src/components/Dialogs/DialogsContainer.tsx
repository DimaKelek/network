import React from "react";
import {addMessageAC, DialogPageType, updateMessageTextAC} from "../../redux/dialogsReducer";
import {ActionsTypes, RootType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

/*type DialogsContainerPropsType = {
    store: StoreType
}*/

/*export function DialogsContainer(props: DialogsContainerPropsType) {
    const dialogsState = props.store.getState().dialogsPage

    const dialogs = dialogsState.dialogs
    const messages = dialogsState.messages
    const newMessageText = dialogsState.newMessageText

    const sendMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onMessageChange = (newText: string) => {
        props.store.dispatch(updateMessageTextAC(newText))
    }

    return (
        <Dialogs
            sendMessage={sendMessage}
            onMessageChange={onMessageChange}
            dialogs={dialogs}
            messages={messages}
            newMessageText={newMessageText}
        />
    );
}*/
type MapStatePropsType = DialogPageType
type MapDispatchPropsType = {
    sendMessage: () => void
    onMessageChange: (newText: string) => void
}

export type DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootType): MapStatePropsType => {
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