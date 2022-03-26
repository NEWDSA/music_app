/*
 * @Author: luciano 
 * @title:获取轮播图接口 type:1安卓
 * @Date: 2022-03-14 21:43:26 
 * @Last Modified by: luciano
 * @Last Modified time: 2022-03-20 02:18:15
 */
import axios from 'axios'
let baseUrl='http://localhost:3000'
// 获取轮播图
export function getBanner(type=0) {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}
// 获取推荐歌单
export function getRecommend(limit=10) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}