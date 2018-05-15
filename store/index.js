import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: {
        user_info: {
            name: '',
            token: '',
        },
        is_login: false,
    },
    mutations: {
        // the payload of mutation should be no more than one
        login (state, user_info) {
            state.user_info.name = user_info.name;
            state.user_info.token = user_info.token;
            state.is_login = true;
        },
        logout (state) {
            state.user_info.name = '';
            state.user_info.token = '';
            state.is_login = false;
        }

    }
})

export default store
