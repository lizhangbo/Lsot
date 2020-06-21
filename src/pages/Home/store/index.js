import Vue from 'vue'
import Vuex from 'vuex'
import car from './modules/car'
import product from './modules/product'
import table from "./modules/table";
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        car,
        product,
        table
    },
    strict: debug,
    //plugins: debug ? [createLogger()] : []
})