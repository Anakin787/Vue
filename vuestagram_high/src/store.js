import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            more: {},
        }
    },
    mutations: { //변수변경 - commit
        이름변경(state) {
            state.name = 'park'
        },
        나이변경(state) {
            state.age++
        },
        setMore(state, data) {
            state.more = data
        },
    },
    actions: { //axiox - dispatch
        getData(context) {
            axios.get('https://codingapple1.github.io/vue/more0.json')
                .then((a) => context.commit('setMore', a.data))
        }
    },
}
)
export default store