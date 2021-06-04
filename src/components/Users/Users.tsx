import React from "react";
import {MyButton} from "../Decoration/MyButton/MyButton";
import S from "./Users.module.css"
import {UsersPagePropsType} from "./UsersContainer";
import axios from "axios";

export class Users extends React.Component<UsersPagePropsType> {
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

        if(this.props.checkedPage > 0) {
            if(this.props.checkedPage - 1 === this.props.minRenderPages) {
                this.props.setMinRenderPage(this.props.minRenderPages - 5)
                this.props.setMaxRenderPage(this.props.maxRenderPages - 5)
            }
            this.props.setCheckedPage(this.props.checkedPage - 1)
        }
    }
    nextButtonClick = (pageQuantity: number) => {
        if(this.props.checkedPage < pageQuantity) {
            if(this.props.checkedPage === this.props.maxRenderPages) {
                this.props.setMinRenderPage(this.props.minRenderPages + 5)
                this.props.setMaxRenderPage(this.props.maxRenderPages + 5)
            }
            this.props.setCheckedPage(this.props.checkedPage + 1)
        }
    }
    render() {
        const pageQuantity = Math.ceil(this.props.totalCount / this.props.pageSize);
        const pages = [];
        for(let i = 1; i <= pageQuantity; i++) {
            pages.push(i);
        }
        const pageButtons = pages.map((p, i) => {
            const pageCheckedStyle = `${S.pageButton} ${this.props.checkedPage === p && S.pageCheckedStyle}`
            if(p <= this.props.maxRenderPages && p > this.props.minRenderPages) {
                return (
                    <div key={i} className={pageCheckedStyle} onClick={() => this.pageButtonClick(p)}>
                        <div className={S.number}>{p}</div>
                    </div>
                );
            } else {
                return null
            }

        })
        const users = this.props.users.map(u => {
            const followCallback = () => {
                u.followed ? this.props.unfollow(u.id) : this.props.follow(u.id)
            }
            return (
                <div key={u.id} className={S.user_box}>
                    <div className={S.avatar}>
                        <img src={u.photos.small ? u.photos.small : "https://goo.su/4zdi"} alt="#"/>
                    </div>
                    <div className={S.info}>
                        <div className={S.name}>{u.name}</div>
                        <div className={S.status}>{u.status ? u.status : "No status"}</div>
                        <div className={S.follow_button}>
                            <MyButton onClick={followCallback}>
                                {u.followed ? "Unfollow" : "Follow"}
                            </MyButton>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className={S.users}>
                <h2 className={S.title}>Users</h2>
                {users}
                <div className={S.pageButtons_container}>
                    <div className={`${S.pageButton} ${this.props.checkedPage === 1 ? S.invisibleButton : null}`}
                         onClick={this.previousButtonClick}
                    >
                        <div className={S.number}>Back</div>
                    </div>
                    {pageButtons}
                    <div className={`${S.pageButton} ${this.props.checkedPage >= this.props.totalCount - 5 ? S.invisibleButton : null}`}
                         onClick={() => this.nextButtonClick(pageQuantity)}
                    >
                        <div className={S.number}>Next</div>
                    </div>
                </div>
            </div>
        );
    }
}