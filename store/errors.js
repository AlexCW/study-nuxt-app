export const state = () => ({
    all: [] 
  })
  
  export const mutations = {
    addError(state, error) {
      state.all.push(error);
    }
  }
  
  export const actions = {
    addError({ commit }, error) {
      commit('addError', error);
    }
  }