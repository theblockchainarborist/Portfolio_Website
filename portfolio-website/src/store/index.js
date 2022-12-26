import { createStore } from 'vuex'

export default createStore({
    state: {
        HomeViewVisible: true,
        AboutViewVisible: false,
        ExamplesViewVisible: false,
        ResumeViewVisible: false,
    },
    mutations: {
        TOGGLE_HOME(state, isVisible) {
            state.AboutViewVisible = !isVisible;
            state.ExamplesViewVisible = !isVisible;
            state.ResumeViewVisible = !isVisible;
            state.HomeViewVisible = isVisible;
        },
        TOGGLE_ABOUT(state, isVisible) {
            state.HomeViewVisible = !isVisible;
            state.ExamplesViewVisible = !isVisible;
            state.ResumeViewVisible = !isVisible;
            state.AboutViewVisible = isVisible;
        },
        TOGGLE_EXAMPLES(state, isVisible) {
            state.HomeViewVisible = !isVisible;
            state.AboutViewVisible = !isVisible;
            state.ResumeViewVisible = !isVisible;
            state.ExamplesViewVisible = isVisible;
        },
        TOGGLE_RESUME(state, isVisible) {
            state.HomeViewVisible = !isVisible;
            state.AboutViewVisible = !isVisible;
            state.ExamplesViewVisible = !isVisible;
            state.ResumeViewVisible = isVisible;
        }
    }
})