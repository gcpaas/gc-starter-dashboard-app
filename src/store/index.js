/*
 * @description:
 * @Author: wujian
 * @Date: 2022-11-04 16:12:44
 * @LastEditors: wujian
 * @LastEditTime: 2023-06-05 16:49:46
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import core from './modules/core'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    core,
    user
  }
})

export default store
