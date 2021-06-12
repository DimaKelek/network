import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {follow, setCheckedPage, setFollowInProgress, setLoading,
    setMaxRenderPage, setMinRenderPage, setTotalCount,
    setUsers, unfollow, UsersPageType, UserType} from "../../redux/usersReducer";
import {usersAPI} from "../../api/api";
import {Users} from "./Users";

type MapStatePropsType = UsersPageType
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setTotalCount: (totalCount: number) => void
    setCheckedPage: (checkedPage: number) => void
    setLoading: (isLoading: boolean) => void
    setFollowInProgress: (userID: number, isLoading: boolean) => void

    setMinRenderPage: (minRenderPage: number) => void
    setMaxRenderPage: (maxRenderPage: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPagePropsType> {
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
                setLoading={this.props.setLoading}
                followInProgress={this.props.followInProgress}
                setFollowInProgress={this.props.setFollowInProgress}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        checkedPage: state.usersPage.checkedPage,
        minRenderPages: state.usersPage.minRenderPages,
        maxRenderPages: state.usersPage.maxRenderPages,
        isLoading: state.usersPage.isLoading,
        followInProgress: state.usersPage.followInProgress
    }
}

const dispatch: MapDispatchPropsType = {
    follow, unfollow, setUsers, setTotalCount,
    setCheckedPage, setMinRenderPage, setMaxRenderPage,
    setLoading, setFollowInProgress
}

export default connect(mapStateToProps, dispatch)(UsersContainer)