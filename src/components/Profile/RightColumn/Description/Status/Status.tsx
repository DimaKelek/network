import React, {ChangeEvent} from "react";
import S from "./Status.module.css";
import {SuperInput} from "../../../../Decoration/SuperInput/SuperInput";

type StatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class Status extends React.Component<StatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={S.status}>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}
                        className={S.title}>{this.props.status || "No status"}
                    </div>
                }
                {this.state.editMode &&
                    <SuperInput
                        autoFocus
                        onChange={this.onChangeStatus}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status} type="text"
                    />
                }
            </div>
        )
    }
}