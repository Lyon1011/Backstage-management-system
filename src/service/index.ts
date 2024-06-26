import localCache from '@/utils/cache'
import XHRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const xhRequest = new XHRequest({
    headers: {},
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor(config) {
            const token = localCache.getCache('token')

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },
        requestInterceptorCatch(err) {
            return err
        },
        responseInterceptor(res) {
            return res
        },
        responseInterceptorCatch(err) {
            return err
        }
    }
})

export default xhRequest
