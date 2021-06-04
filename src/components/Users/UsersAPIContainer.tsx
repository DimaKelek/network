import React from "react";
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";
import {Users} from "./Users";

export class UsersAPIContainer extends React.Component<UsersPagePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.checkedPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    pageButtonClick = (pageNumber: number) => {
        this.props.setCheckedPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    previousButtonClick = () => {
        this.props.setCheckedPage(this.props.checkedPage - 1)
        this.pageButtonClick(this.props.checkedPage - 1)
        if (this.props.checkedPage - 1 === this.props.minRenderPages) {
            this.props.setMinRenderPage(this.props.minRenderPages - 5)
            this.props.setMaxRenderPage(this.props.maxRenderPages - 5)
        }
    }
    nextButtonClick = (pageQuantity: number) => {
        if (this.props.checkedPage < pageQuantity) {
            this.props.setCheckedPage(this.props.checkedPage + 1)
            this.pageButtonClick(this.props.checkedPage + 1)
            if (this.props.checkedPage === this.props.maxRenderPages) {
                this.props.setMinRenderPage(this.props.minRenderPages + 5)
                this.props.setMaxRenderPage(this.props.maxRenderPages + 5)
            }
        }
    }

    render() {
        return (
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                maxRenderPages={this.props.maxRenderPages}
                minRenderPages={this.props.minRenderPages}
                checkedPage={this.props.checkedPage}
                pageButtonClick={this.pageButtonClick}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                previousButtonClick={this.previousButtonClick}
                nextButtonClick={this.nextButtonClick}
            />
        );
    }
}


