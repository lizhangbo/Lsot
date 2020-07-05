//将数据存到store中
import data from "../../../../api/data";

const state={
    title:null
}
const getters ={

}
const actions = {
    setArticle({ commit },title){
        commit('setContent',title);
    }
}
const mutations = {
    setContent(state,param){
        alert(param);
        state.title = param;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}