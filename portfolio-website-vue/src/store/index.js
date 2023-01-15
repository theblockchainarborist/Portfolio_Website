import { createStore } from 'vuex'

export default createStore({
    state: {
        HomeViewVisible: true,
        AboutViewVisible: false,
        ExamplesViewVisible: false,
        ResumeViewVisible: false,
        completedProjects: [
            {
                id: 1,
                name: 'connor-ray.com',
                description: 'A portfolio website!',
                img: '/connor-ray-com-thumbnail.png',
                link: ''
            },
            {
                id: 2,
                name: 'Coming Soon!',
                description: 'Image by Samuel Regan-Asante on unsplash.com',
                img: '/samuel-regan-asante-unsplash.jpg',
                link: ''
            }
        ],
        ongoingProjects: [
            {
                id: 1,
                name: 'InternetDashboard',
                description: 'A customizable browser homepage!',
                img: '/InternetDashboard.png',
                link: 'https://codesandbox.io/p/github/theblockchainarborist/Internet_Dashboard/main?workspace=%257B%2522activeFileId%2522%253Anull%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clc1fxnix000x356ih983c1b8%2522%253A%257B%2522key%2522%253A%2522clc1fxnix000x356ih983c1b8%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A5173%252C%2522url%2522%253A%2522q1tkw0-5173.preview.csb.app%2522%252C%2522key%2522%253A%2522clc1fz8j600dp356i1l2ilvuc%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clc1fy74v00127qgi6qgyapqf%2522%252C%2522key%2522%253A%2522clc1fy6yv0075356i69zppcsh%2522%252C%2522isMinimized%2522%253Atrue%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clc1fxnix000x356ih983c1b8%2522%252C%2522spacesOrder%2522%253A%255B%2522clc1fxnix000x356ih983c1b8%2522%255D%257D'
            },
            {
                id: 2,
                name: 'Superalgos Social Trading',
                description: 'An application for the Superalgos project that functions like a social media website while also allowing users to subscribe and follow broadcasted trading signals from other users!',
                img: '/Superalgos-Social-Trading-App.png',
                link: 'https://codesandbox.io/p/github/theblockchainarborist/My_Superalgos_Social-Trading-App/main?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clcf2g9s900007oiv4hp067mm%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clcf2gb2n0015356jc1420r2h%2522%253A%257B%2522key%2522%253A%2522clcf2gb2n0015356jc1420r2h%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A5173%252C%2522url%2522%253A%2522usp9zr-5173.preview.csb.app%2522%252C%2522key%2522%253A%2522clcf2hjvr00b8356jc6vllsv0%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clcf2gpo1001j7oiv9mevbgk9%2522%252C%2522key%2522%253A%2522clcf2gosu006i356jba8j94i8%2522%252C%2522isMinimized%2522%253Atrue%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clcf2gb2n0015356jc1420r2h%2522%252C%2522spacesOrder%2522%253A%255B%2522clcf2gb2n0015356jc1420r2h%2522%255D%257D'
            }
        ]
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