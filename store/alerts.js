export const state = () => ({
    all: [] 
  })
  
  export const mutations = {
    addAlert(state, alert) {
      state.all.push(
        Object.assign(
            alert,
            { class: 'alert alert--' + alert.type }
        )
      );
    }
  }
  
  export const actions = {
      //TODO TIDY UP REPEAT
    addSuccess({ commit }, message) {
      commit('addAlert', {
          message: message,
          type: 'success'
      });
    },
    addError({ commit }, message) {
        commit('addAlert', {
            message: message,
            type: 'error'
        });
      }
  }