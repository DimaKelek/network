import React from "react";
import {UsersPagePropsType} from "./UsersContainer";
import {Users} from "./Users";
import {usersAPI} from "../../api/api";

export class UsersAPIContainer extends React.Component<UsersPagePropsType> {
    componentDidMount() {
        this.props.setLoading(true)
            usersAPI.getUsers(this.props.checkedPage, this.props.pageSize).then(data => {
                this.props.setLoading(false)
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
            })
    }

    pageButtonClick = (pageNumber: number) => {
        this.props.setCheckedPage(pageNumber)
        this.props.setLoading(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setLoading(false)
                this.props.setUsers(data.items)
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
                isLoading={this.props.isLoading}
            />
        );
    }
}


