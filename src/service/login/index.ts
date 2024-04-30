import xhRequest from '@/service'
import { type Account, type LoginResponse, type ResponseType } from './types'

const loginByUsername = (data: Account) => {
    return xhRequest.post<ResponseType<LoginResponse>>({
        headers: {
            'Content-Type': 'application/json'
        },
        url: '/login',
        showLoading: true,
        data
    })
}

const getUserInfo = (id: number) => {
    return xhRequest.get<ResponseType>({
        headers: {},
        url: `/users/${id}`
    })
}

const getMenusList = (id: number) => {
    return xhRequest.get<ResponseType>({
        headers: {},
        url: `/role/${id}/menu`
    })
}

export { loginByUsername, getUserInfo, getMenusList }
