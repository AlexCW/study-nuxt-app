<template>
  <section>
    <div class="header">
      <h1 class="heading">Add Topic</h1>
    </div>
    <div class="container">
      <form>
        <fieldset>
          <div class="field">
            <label for="title">Title *</label>
            <input 
              v-validate="'required:true'"
              id="title"
              v-model="topic.title"
              class="textbox"
              type="text" 
              name="title">
            <span v-show="errors.has('title')">{{ errors.first('title') }}</span>
          </div>
          <div class="field">
            <label for="description">Description *</label>
            <textarea
              v-validate="'required:true'"
              id="description"
              v-model="topic.description"
              name="description"/>
            <span v-show="errors.has('description')">{{ errors.first('description') }}</span>
          </div>
          <FilePreview/>
          <div class="field field--button">
            <a 
              class="button"
              @click.prevent="saveTopic">
              <span>Save Topic</span>
            </a>
          </div>
        </fieldset>
      </form>
    </div>
  </section>
</template>

<script>
  import topicsApi from '@/http/endpoints/topics';
  import { ErrorBag } from 'vee-validate';
  import FilePreview from '~/components/shared/elements/FilePreview.vue'

  export default {
      inject: ['$validator'],
      components: {
        FilePreview
      },
      data () {
        return {
          topic: {
            title: '',
            description: '',
            image: ''
          }
        }
      },
      computed: {
        errors: function() {
          return new ErrorBag()
        }
      },
      methods: {
        async saveTopic() {
          if(await this.$validator.validateAll() === false) {
            return false
          }

          try {
            let topic = await topicsApi.addTopic(this.topic)
            this.$store.dispatch('topics/addTopic', topic.data.data)
            this.$store.dispatch(
              'alerts/addSuccess',
              'Successfully added the topic.'
            )
          } catch (err) {
            this.$store.dispatch(
              'alerts/addError',
              'There was an error saving the topic.'
            )
          }
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

.container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
}

.container form {
  background: rgb(235, 232, 247);
  flex-basis: 100%;
  padding: 20px 10px;
}

.container form fieldset {
  border: 0;
}
</style>