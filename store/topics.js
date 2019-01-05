export const state = () => ({
  list: []
})

export const mutations = {
  setTopics(state, topics) {
    state.list = topics;
  },
  addTopic(state, topic) {
    state.list.push(topic)
  }
}

export const actions = {
  setTopics({ commit }, topics) {
    commit('setTopics', topics);
  },
  addTopic({ commit }, topic) {
    commit('setTopics', topic);
  }
}