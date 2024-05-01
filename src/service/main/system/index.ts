import xhRequest from '@/service'
import { getPagesListRequestParam } from './types'
import { ResponseType } from '@/service/login/types'

const getPageListData = (params: getPagesListRequestParam) => {
    return xhRequest.post<ResponseType>({
        headers: {},
        url: params.url,
        data: params.queryInfo
    })
}

export { getPageListData }
