<template>
  <div>
    <div class="header-container">
      <header>
        <navigation/>
      </header>
    </div>
    <div 
      v-for="(error, index) in errors"
      :key="index"
      class="alert alert--error">
      {{ error }}
    </div>
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '~/components/shared/Navigation.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Navigation
  },
  computed: {
    ...mapState({
      errors: state => state.errors.all
    })
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

header{
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 0 25px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.alert {
  color: white;
  padding: 5px;
  text-align: center;
}

.alert--error {
  background: red;
}

.header-container {
  background:teal;
}
</style>
