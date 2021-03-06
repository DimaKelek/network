import axios from "axios";
import {PhotosType, UserType} from "../store/usersReducer";
import {ContactsType, UserProfileType} from "../store/profileReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "4fe92c3a-1b95-46fb-8296-15a97f910aa4"}
})

export const usersAPI = {
    getUsers(checkedPage: number, pageSize: number) {
        return instance.get<GetUsersType>(`users?page=${checkedPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser(userID: number) {
        return instance.post<ResponseType>(`follow/${userID}`).then(response => response.data)
    },
    unfollowUser(userID: number) {
        return instance.delete<ResponseType>(`follow/${userID}`).then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(userID: number) {
        return instance.get<GetProfileType>(`profile/${userID}`).then(response => response.data)
    },
    getStatus(userID: number) {
        return instance.get<string>(`profile/status/${userID}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status}).then(response => response.data)
    },
    editPhotos(file: File) {
        let formData = new FormData()
        formData.append("image", file)
        return instance.put<ResponseType<{photos: PhotosType}>>(`profile/photo`, formData, {
          headers: {"Content-Type": "multipart/form-data"}
        }).then(response => response.data)
    },
    updateProfile(data: UpdateProfileDataType) {
        return instance.put<ResponseType<UpdateProfileDataType>>(`profile`, data)
    }
}
export const authAPI = {
    me() {
        return instance.get<AuthMeType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType<{userId: number}>>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    }
}

export type AuthMeType = {
    data: {
        id: number
        login: string
        email: string
    },
    messages: string[],
    fieldsErrors: string[],
    resultCode: number
}
type GetUsersType = {
    items: UserType[]
    totalCount: number
    error: string | null
}
type GetProfileType = UserProfileType

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: D
}
export type UpdateProfileDataType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    contacts: ContactsType
    aboutMe: string
}