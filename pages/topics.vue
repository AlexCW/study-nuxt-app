<template>
  <section>
    <div class="container">
      <h1 class="heading">Topics</h1>
      <div class="cards">
        <div class="card">
          <div class="card-text">Test</div>
        </div>
        <div class="card">
          <div class="card-text">Test</div>
        </div>
        <div class="card">
          <div class="card-text">Test</div>
        </div>
        <div class="card">
          <div class="card-text">Test</div>
        </div>
        <div class="card">
          <div class="card-text">Test</div>
        </div>
        <div class="card">
          <div class="card-text">Test</div>
        </div>
        <div class="card">
          <div class="card-text">Test</div>
        </div>
        <div class="card">
          <div class="card-text">Test</div>
        </div>
        <div class="card">
          <div class="card-text">Test</div>
        </div>
      </div>
    </div>
  </section>
</template>

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
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  background: url('/vue-logo.png') no-repeat;
  background-position: center; 
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0px 0px 1px 0px darkgray;
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
  opacity: 0.6; 
  width: 100%;
}
</style>