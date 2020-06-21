import data from '../../../../api/data'

// initial state
const state = () => ({
    table_data: [],
    table_title: []
})

// getters
const getters = {
    // carProducts: (state, getters, rootState) => {
    //     return state.items.map(({ id, quantity }) => {
    //         const product = rootState.product.all.find(product => product.id === id)
    //         return {
    //             title: product.title,
    //             price: product.price,
    //             quantity
    //         }
    //     })
    // },
    //
    // carTotalPrice: (state, getters) => {
    //     return getters.carProducts.reduce((total, product) => {
    //         return total + product.price * product.quantity
    //     }, 0)
    // }
}

// actions
const actions = {
    getTables({ commit }){
        data.findTableData((table_data)=>{
            commit('setTables',table_data)
        })
    },
    getTableTitle({ commit }){
        data.findTitle((table_title)=>{
            commit('setTableTitle',table_title)
        })
    }
}

// mutations
const mutations = {
    //设置表数据
    setTables (state, table_data) {
        state.table_data = table_data
    },
    setTableTitle(state, table_title){
        state.table_title = table_title
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}