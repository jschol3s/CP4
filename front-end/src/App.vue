<template>
<div id="app">
  <div class="pure-menu pure-menu-horizontal">
    <router-link to="/" class="pure-menu-heading">STAGEPRO</router-link>
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <router-link to="/Furniture" class="pure-menu-link">FURNITURE</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/About" class="pure-menu-link">ABOUT</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/Contact" class="pure-menu-link">CONTACT</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</div>
</template>


<script>

</script>


<style>

</style>
