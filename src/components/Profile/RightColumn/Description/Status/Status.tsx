import React from "react";
import S from "../Description.module.css";

type StatusPropsType = {
    status: string
}

export class Status extends React.Component<StatusPropsType> {
    state = {
        editMode: false
    }

    changeEditMode = () => {
        this.setState(this.state.editMode)
    }

    render() {
        return (
            <div className={`${S.title_container} ${S.status}`}>
                <span className={S.title}>Статуc: </span>

                <span onDoubleClick={this.changeEditMode}
                      className={S.information}>{this.props.status ? this.props.status : "No status"}
                </span>
                {/*<input*/}
                {/*    autoFocus*/}
                {/*    onBlur={this.changeEditMode}*/}
                {/*    value={this.props.status ? this.props.status : "No status"} type="text"*/}
                {/*/>*/}
            </div>
        )
    }
}