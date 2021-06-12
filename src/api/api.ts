import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "4fe92c3a-1b95-46fb-8296-15a97f910aa4"}
})

export const usersAPI = {
    getUsers(checkedPage: number, pageSize: number) {
        return instance.get(`users?page=${checkedPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}