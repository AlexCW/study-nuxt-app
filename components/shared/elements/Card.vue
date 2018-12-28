<template>
  <div class="card">
    <div 
      v-if="text.length > 0" 
      class="card-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        text: {
          default: '',
          type: String
        }
      }
    }
</script>

<style>
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