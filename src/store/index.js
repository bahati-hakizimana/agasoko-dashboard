import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        images: []
    },
    mutations: {
        increment(state) {
            state.count++
        },
        mutateImages(state, images) {
            state.images = images
        }
    },
    actions: {
        setImages({ commit }, images) {
            commit('mutateImages', images)
        }
    }
})

export default store;