import { createStore } from 'vuex'
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const store =  createStore({
  state: {
    user: null,
    authIsReady: false
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('User state changed:', state.user)
    },
    setAuthIsReady(state, payload){
      state.authIsReady = payload
    }
  },
    actions: {
      async signup(context, { email, password}) {
        console.log('signup action')

        const resp = await createUserWithEmailAndPassword(auth, email, password)
        if (resp){
          context.commit('setUser', resp.user)

        }else {
          throw new Error('Não')
        }

      },
      async login(context, {email, password}) {
        console.log('login action')

        const resp = await signInWithEmailAndPassword(auth, email, password)
        if (resp){
          context.commit('setUser', resp.user)
        }else {
          throw new Error('Não login')
        }

      },
      async logout(context){
        console.log('logout actions')

        await signOut(auth)
        context.commit("setUser", null)
      }
    }

})

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true)
  store.commit('setUser', user)
  unsub()
})

export default store