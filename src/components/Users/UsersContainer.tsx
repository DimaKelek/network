import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
    follow,
    getUsers,
    setCheckedPage,
    setFollowInProgress,
    setLoading,
    setMaxRenderPage,
    setMinRenderPage,
    unfollow,
    UsersPageType
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";

type MapStatePropsType = UsersPageType
type MapDispatchPropsType = {
    setCheckedPage: (checkedPage: number) => void
    setLoading: (isLoading: boolean) => void
    setFollowInProgress: (userID: number, isLoading: boolean) => void
    getUsers: (checkedPage: number, pageSize: number) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void

    setMinRenderPage: (minRenderPage: number) => void
    setMaxRenderPage: (maxRenderPage: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPagePropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.checkedPage, this.props.pageSize)
    }

    pageButtonClick = (pageNumber: number) => {
        this.props.setCheckedPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
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
                previousButtonClick={this.previousButtonClick}
                nextButtonClick={this.nextButtonClick}
                isLoading={this.props.isLoading}
                setLoading={this.props.setLoading}
                followInProgress={this.props.followInProgress}
                setFollowInProgress={this.props.setFollowInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
    setCheckedPage, setMinRenderPage, setMaxRenderPage,
    setLoading, setFollowInProgress, getUsers, follow, unfollow
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, dispatch),
    withAuthRedirect
)(UsersContainer)