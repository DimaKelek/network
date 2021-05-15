import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

export function DialogsContainer(props: DialogsContainerPropsType) {
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
}