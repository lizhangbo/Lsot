/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
// import Vue from "vue";

const article = {
    // 新闻列表
    articleList () {
        return axios.get(`${base.sq}/topics`);
    },
    // 新闻详情,演示
    articleDetail (id, params) {
        return axios.get(`${base.sq}/${id}`, {
            params: params
        });
        // return Vue.prototype.$server.sendTo(id,qs.stringify(params));
    },
    // post提交
    login (params) {
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));
    },
    getAddRelease(params){
        return axios.post(`${base.sq}/getAddRelease`, qs.stringify(params));
    },
    getRelease(params){
        return axios.post(`${base.sq}/getRelease`, qs.stringify(params));
    }
    // 其他接口…………
}

export default article;