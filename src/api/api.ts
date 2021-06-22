import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "4fe92c3a-1b95-46fb-8296-15a97f910aa4"}
})

export const usersAPI = {
    getUsers(checkedPage: number, pageSize: number) {
        return instance.get(`users?page=${checkedPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser(userID: number) {
        return instance.post(`follow/${userID}`).then(response => response.data)
    },
    unfollowUser(userID: number) {
        return instance.delete(`follow/${userID}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get(`profile/${userID}`).then(response => response.data)
    },
    getStatus(userID: string) {
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
}