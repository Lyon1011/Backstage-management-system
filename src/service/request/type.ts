import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 拦截器接口
export interface XHRequestInterceptors<T = AxiosResponse> {
    requestInterceptor?: (
        config: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig
    requestInterceptorCatch?: (error: any) => any
    responseInterceptor?: (res: T) => T
    responseInterceptorCatch?: (error: any) => any
}

// axios 配置接口
export interface XHRequestConfig<T = AxiosResponse>
    extends InternalAxiosRequestConfig {
    headers: any
    interceptors?: XHRequestInterceptors<T>
    showLoading?: boolean
}
