<template>
  <section>
    <div class="header">
      <h1 class="heading">Topics</h1>
      <nuxt-link
        class="add-topic button button--green" 
        to="/topics/add"><span>Add Topic</span></nuxt-link>
    </div>
    <div class="cards">
      <card 
        v-for="(topic, index) in topics"
        :key="index"
        :text="topic.title"/>
    </div>
  </section>
</template>

<script>
    import { mapState } from 'vuex'
    import topicsApi from '@/http/endpoints/topics';
    import Card from '@/components/shared/elements/Card'; 

    export default {
      components: { Card },
      computed: {
        ...mapState({
          topics: state => state.topics.list
        })
      },
      async fetch ({ app, params }) {
        try {
          let { data } = await topicsApi.getAll()
          app.store.dispatch('topics/setTopics', data)
        } catch (err) {
          app.store.dispatch(
            'alerts/addError',
            'There was an error retrieving the topics.'
          )
        }
      }
    }
</script>

<style>
.header {
  padding: 10px;
  display: flex;
}
.header .heading {
  flex: 6;
  margin: 5px 0px 0px 50px;
}
.header .button--green {
  flex: 1;
  text-align: center; /**temp**/
}

.cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
}
</style>