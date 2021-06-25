import React, {ChangeEvent} from "react";
import S from "../Description.module.css";

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
            <div className={`${S.title_container} ${S.status}`}>
                <span className={S.title}>Статуc: </span>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}
                        className={S.information}>{this.props.status || "No status"}
                    </span>
                }
                {this.state.editMode &&
                    <input
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