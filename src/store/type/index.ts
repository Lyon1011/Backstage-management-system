interface Account {
    name: string
    password: string
}

interface LoginResponse {
    id: number
    name: string
    token: string
}

interface ResponseType<T = any> {
    code: number
    data: T
}

interface menuType {
    icon?: string
    id: number
    name: string
    sort: number
    type: number
    url: string
    parentId?: number
    children?: menuType[]
}

export { Account, LoginResponse, ResponseType, menuType }
