<template>
  <section>
    <div class="container">
      <h1 class="heading">Topics</h1>
      <div class="cards">
        <div 
          v-for="(topic, index) in topics"
          :key="index"
          class="card">
          <div class="card-text">Test</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import { mapState } from 'vuex'
    import topicsApi from '@/http/endpoints/topics';

    export default {
      computed: {
        ...mapState({
          topics: state => state.topics.list
        })
      },
      fetch ({ app, params }) {
        return topicsApi.getAll()
        .then((res) => {
          app.store.commit('topics/setTopics', res.data)
        }).catch(() => {
          app.store.commit('errors/addError', 'There was an error retrieving the topics.')
        })
      }
    }
</script>

<style>
.heading {
  margin: 5px 0px 0px 50px;
}
.container {
  min-height: 100vh;
  padding: 10px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
}
.card {
  background: url('/vue-logo.png') no-repeat;
  background-position: center; 
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0px 0px 1px 0px darkgray;
  align-items:flex-start;
  color: white;
  margin-left: 20px;
  margin-top: 20px;
  padding: 100px 150px;
  position: relative;
  flex-basis: 15%;
}
.card .card-text {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 5px 0px 10px 10px;
  font-weight: 500;
  background: black;
  opacity: 0.5; 
  width: 100%;
}
</style>