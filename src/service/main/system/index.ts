import xhRequest from '@/service'
import { getPagesListParam } from './types'
import { ResponseType } from '@/service/login/types'

const getPageListData = (params: getPagesListParam) => {
    return xhRequest.post<ResponseType>({
        headers: {},
        url: params.url,
        data: params.queryInfo
    })
}

export { getPageListData }
