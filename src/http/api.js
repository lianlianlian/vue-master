import axios from './index'
import {baseUrl, DATAKEY} from './indexConfig'

/* eslint-disable */
export const login = (data) => axios.post(`${baseUrl}client_login`, {...data, password: Vue.prototype.$md5(`${DATAKEY}${Vue.prototype.$md5(data.password)}`)})
export const getUser = (data) => axios.post(`${baseUrl}client_get`, data)
export const getHotActive = (data) => axios.post(`${baseUrl}activity`, data)
export const getHotActiveDetail = (data) => axios.post(`${baseUrl}activity_detail`, data)
export const getExclusiveActive = (data) => axios.post(`${baseUrl}category_goods`, data)
export const getExclusiveActiveDetail = (data) => axios.post(`${baseUrl}goods_detail`, data)