<template>
<div class="FurniturePage">
  <div id="layout">
    <!-- Menu toggle -->
    <a href="#menu" id="menuLink" class="menu-link">
      <!-- Hamburger icon -->
      <span></span>
    </a>

    <div id="menu">
      <div class="pure-menu">
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <router-link to="/EditInventory" class="pure-menu-link">EDIT INVENTORY</router-link>
          </li>
          <li class="pure-menu-item menu-item-divided"><a href="#" class="pure-menu-link">TYPE</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">SIZE</a></li>
          <li class="pure-menu-item"><a href="#" class="pure-menu-link">COLOR</a></li>
        </ul>
      </div>
    </div>

    <div id="main">
      <div class="header">
        <h1>FURNITURE INVENTORY</h1>
      </div>

      <div class="content">
        <div class="pure-g">
          <div class="pure-u-1-4" v-for="item in items" :key="item.id">
            <h3>{{item.title}}</h3>
            <img :src="item.path" class="pure-img-responsive" />
            <div class="aboutSection">
              <ul>
                <li>{{item.description}}</li>
                <li>Color: {{item.selectedColor}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      //try {
      let response = await axios.get("/api/items");
      this.items = response.data;
      return true;
      //} catch (error) {
      //console.log(error);
      //}
    },
  }
}
</script>


<style>
body {
  color: #777;
}

.pure-u-1-4 {
  text-align: center;
  padding: 1em;
}

.pure-img-responsive {
  max-width: 100%;
  height: auto;
}

.aboutSection {
  text-align: left;
}

# layout,
#menu,
#layout {
  position: relative;
  left: 0;
  padding-left: 0;
}

#layout.active #menu {
  left: 150 px;
  width: 150 px;
}

#layout.active.menu - link {
  left: 150 px;
}

.content {
  margin: 0 auto;
  padding: 0 2 em;
  max-width: 800 px;
  margin-bottom: 50 px;
  line-height: 1.6 em;
  margin-left: 10%;
}

.header {
  margin: 0;
  color: #333;
  text-align: center;
  padding: 2.5em 2em 0;
  border-bottom: 1px solid # eee;
}

.header h1 {
  margin: 0.2 em 0;
  font-size: 3 em;
  font-weight: 300;
}

.header h2 {
  font-weight: 300;
  color: #ccc;
  padding: 0;
  margin-top: 0;
}

.content - subhead {
  margin: 50 px 0 20 px 0;
  font-weight: 300;
  color: #888;
}

#menu {
  margin-left: -150px;
  width: 150px;
  position: fixed;
  top: 33px;
  left: 0;
  bottom: 0;
  z-index: 1000;
  background: #878787;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

#menu a {
  color: black;
  border: none;
  padding: 0.6em 0 0.6em 0.6em;
}

#menu .pure-menu,
#menu .pure-menu ul {
  border: none;
  background: transparent;
}

#menu .pure-menu ul,
#menu .pure-menu .menu-item-divided {
  border-top: 1px solid #333;
}

#menu .pure-menu li a:hover,
#menu .pure-menu li a:focus {
  background: #cab1bd;
}

#menu .pure-menu-selected,
#menu .pure-menu-heading {
  background: #cfd8d7;
}

#menu .pure-menu-selected a {
  color: black;
}

#menu .pure-menu-heading {
  font-size: 110%;
  color: #fff;
  margin: 0;
}

.menu-link {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  background: #000;
  background: rgba(0, 0, 0, 0.7);
  font-size: 10px;
  z-index: 10;
  width: 2em;
  height: auto;
  padding: 2.1em 1.6em;
}

.menu-link:hover,
.menu-link:focus {
  background: #000;
}

.menu-link span {
  position: relative;
  display: block;
}

.menu-link span,
.menu-link span:before,
.menu-link span:after {
  background-color: #fff;
  width: 100%;
  height: 0.2em;
}

.menu-link span:before,
.menu-link span:after {
  position: absolute;
  margin-top: -0.6em;
  content: " ";
}

.menu-link span:after {
  margin-top: 0.6em;
}

@media (min-width: 48em) {

  .header,
  .content {
    padding-left: 2em;
    padding-right: 2em;
  }

  #layout {
    padding-left: 150px;
    left: 0;
  }

  #menu {
    left: 150px;
  }

  .menu-link {
    position: fixed;
    left: 150px;
    display: none;
  }

  #layout.active .menu-link {
    left: 150px;
  }
}

@media (max-width: 48em) {
  #layout.active {
    position: relative;
    left: 150px;
  }
}
</style>
