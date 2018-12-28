<template>
  <nav>
    <ul>
      <nuxt-link 
        to="/"
        tag="li">
        <a>Homepage</a>
      </nuxt-link>
      <nuxt-link 
        to="/topics"
        tag="li">
        <a>Topics</a>
      </nuxt-link>
    </ul>
  </nav>
</template>

<style>
    nav {
      display: block;
      height: 50px;
      padding-top: 15px;
    }
    nav ul {
        float: right;
        padding: 0;
    }
    nav ul li {
        display: inline;
        list-style: none;
        padding: 0px 5px;
    }
    nav ul li a {
        color:rgb(240, 240, 240);
        font-size: 1em;
        font-weight: 600;
        text-decoration: none;
    }
</style>
