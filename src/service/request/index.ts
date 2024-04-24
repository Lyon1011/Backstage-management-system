import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading'

import type { XHRequestConfig, XHRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'

class XHRequest {
    instance: AxiosInstance
    interceptors?: XHRequestInterceptors
    loading?: LoadingInstance
    showLoading: boolean

    constructor(config: XHRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        this.showLoading = config.showLoading ?? false

        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        )
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )

        // 全局拦截器设置
        this.instance.interceptors.request.use(
            (config) => {
                if (this.showLoading) {
                    this.loading = ElLoading.service({
                        lock: true,
                        text: 'Loading...'
                    })
                }
                return config
            },
            (err) => {
                return err
            }
        )
        this.instance.interceptors.response.use(
            (res) => {
                this.loading?.close()
                return res.data
            },
            (err) => {
                return err
            }
        )
    }

    request<T>(config: XHRequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            // 对发送请求设置拦截处理
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config)
            }

            // 设置 showLoading 加载动画
            if (config.showLoading) {
                this.showLoading = config.showLoading
            }

            // 对响应结果设置拦截处理并返回数据
            this.instance
                .request<any, T>(config)
                .then((res) => {
                    if (config.interceptors?.responseInterceptor) {
                        res = config.interceptors.responseInterceptor(res)
                    }

                    // 恢复默认值
                    this.showLoading = false

                    // 这里res的类型是通过对 request 的泛型来决定了
                    resolve(res)
                })
                .catch((err) => {
                    // 恢复默认值
                    this.showLoading = false
                    reject(err)
                })
        })
    }

    get<T>(config: XHRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'GET', headers: {} })
    }

    post<T>(config: XHRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'POST', headers: {} })
    }

    delete<T>(config: XHRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'DELETE', headers: {} })
    }

    patch<T>(config: XHRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'PATCH', headers: {} })
    }
}

export default XHRequest
