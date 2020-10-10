/* eslint-disable */
import api from '../../api/api'

const initialState = {
    accessToken: null,
    loggedIn: false,
    loggedOut: true,
    socials: [],
    currentUser: {
        email: null,
        username: null,
        provider: null
    }
}

const state = {
    ...initialState
}

const getters = {
    loggedIn: ({ loggedIn }) => loggedIn
}

const mutations = {
    setAuthState(state, payload) {
        Object.entries(payload).forEach(([property, value]) => {
            state[property] = value
        })
    },
    setSocial(state, payload) {

        let socialindex = state.socials.findIndex(
            social => social.provider === payload.provider
        )

        socialindex !== -1
            ? state.socials.splice(socialindex, 1, payload)
            : state.socials.push(payload)

    },
    resetAuthState(state, { exclude } = {}) {

        let newState = { ...initialState }
        let keys = Object.keys(newState)

        if (Array.isArray(exclude) && exclude.length) {
            keys = keys.filter(key => !exclude.includes(key))
        }

        keys.forEach(key => state[key] = newState[key])
    }
}

const actions = {
    async initializeAuth({ commit, dispatch, state }) {

        if (state.loggedOut) return

        // Return if social authentication info in empty
        if (!state.socials.length) return commit('resetAuthState')

        // Sorting according to authentication time
        let socials = state.socials.sort(
            (a, b) => b.authenticatedAt - a.authenticatedAt
        )

        // Trying to login with all social authentication history
        for (let social of socials) {
            let { success } = await dispatch('authenticate', social)
            // Breaking loop if login succeeded
            if (success) break
        }
    },
    authenticate({ commit }, payload) {
        return new Promise(async resolve => {

            // Authenticating login
            let { error, data } = await api.authenticate(payload)

            // Reseting store and Returning if error
            if (error) {
                commit('resetAuthState', {
                    exclude: ['social']
                })
                return resolve({ error })
            }

            // Saving data to store
            commit('setAuthState', {
                loggedIn: true,
                loggedOut: false,
                accessToken: data.jwt,
                currentUser: {
                    email: data.user.email,
                    username: data.user.username,
                    provider: data.user.provider,
                }
            })

            // Resolving with the data
            return resolve({ success: true })
        })
    },
    login({ dispatch, state: { socials } }, provider) {
        return new Promise(async resolve => {

            // Finding if social login info is available
            let social = socials.find(s => s.provider === provider)
            if (social) {
                // Available and trying to login with the information
                let { success } = await dispatch('authenticate', social)

                // If success returing success response
                if (success) return resolve({ success })
            }
            // If info not found or failed to login returning error response
            return resolve({ error: true, success: false })
        })
    }
}

export default {
    namespaced: true,
    state, getters,
    mutations, actions
}