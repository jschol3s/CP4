<template>
<div class="about">
  <div id="layout" class="pure-g">
    <div class="sidebar pure-u-1 pure-u-md-1-4">
      <div class="header">
        <h1 class="brand-title">StagePro</h1>
        <h2 class="brand-tagline">Change the way you stage</h2>
      </div>
    </div>

    <div class="content pure-u-1 pure-u-md-3-4">
      <div>
        <div class="posts">

          <section class="post">
            <header class="post-header">

              <h2 class="post-title">Introducing the StagePro Team</h2>

            </header>

            <div class="post-description">
              <p>
                Right here is where I am going to insert information about our
                company, and our partner company renew home staging and design.
                I am hoping that it all goes well! But I don't really have much
                to say right now. I'll figure it out eventually.
                <br><br>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </section>
        </div>

        <div class="posts">

          <div class="post-description">
            <div class="post-images pure-g">
              <div class="pure-u-1 pure-u-md-1-2">
                <img class="pure-img-responsive" src="../../public/dadandj.jpg" style="height:40%">
              </div>

              <div class="pure-u-1 pure-u-md-1-2">
                <img class="pure-img-responsive" src="../../public/RenewLogo .jpg" style="width:70%">
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</div>
</template>


<script>

</script>


<style scoped>
a {
  text-decoration: none;
  color: rgb(61, 146, 201);
}

a:hover,
a:focus {
  text-decoration: underline;
}

h3 {
  font-weight: 100;
}

/* LAYOUT CSS */
.pure-img-responsive {
  height: auto;
  padding: 15%;
}

#layout {
  padding: 0;
}

.header {
  text-align: center;
  top: auto;
  margin: 3em auto;
}

.sidebar {
  background-color: #b5c9c3;
  color: #fff;
  margin-top: 34px;
}

.brand-title,
.brand-tagline {
  margin: 0;
}

.brand-title {
  text-transform: uppercase;
  border-bottom: 1px solid black;
}

.brand-tagline {
  font-weight: 300;
  margin-top: 5%;
  color: black;
}

.nav-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-item {
  display: inline-block;
  *display: inline;
  zoom: 1;
}

.nav-item a {
  background: transparent;
  border: 2px solid rgb(176, 202, 219);
  color: #fff;
  margin-top: 1em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 85%;
}

.nav-item a:hover,
.nav-item a:focus {
  border: 2px solid rgb(61, 146, 201);
  text-decoration: none;
}

.content-subhead {
  text-transform: uppercase;
  color: #aaa;
  border-bottom: 1px solid #eee;
  padding: 0.4em 0;
  font-size: 80%;
  font-weight: 500;
  letter-spacing: 0.1em;
}

.content {
  padding: 2em 1em 0;
}

.post {
  padding-bottom: 2em;
}

.post-title {
  font-size: 2em;
  color: #222;
  margin-bottom: 0.2em;
}

.post-avatar {
  border-radius: 50px;
  float: right;
  margin-left: 1em;
}

.post-description {
  font-family: Georgia, "Cambria", serif;
  color: #444;
  line-height: 1.8em;
}

.post-meta {
  color: #999;
  font-size: 90%;
  margin: 0;
}

.post-category {
  margin: 0 0.1em;
  padding: 0.3em 1em;
  color: #fff;
  background: #999;
  font-size: 80%;
}

.post-category-design {
  background: #5aba59;
}

.post-category-pure {
  background: #4d85d1;
}

.post-category-yui {
  background: #8156a7;
}

.post-category-js {
  background: #df2d4f;
}

.post-images {
  margin: 1em 0;
}

.post-image-meta {
  margin-top: -3.5em;
  margin-left: 1em;
  color: #fff;
  text-shadow: 0 1px 1px #333;
}

.footer {
  padding: 1em 0;
}

.footer a {
  color: #ccc;
  font-size: 80%;
}

.footer .pure-menu a:hover,
.footer .pure-menu a:focus {
  background: none;
}

@media (min-width: 48em) {
  .content {
    padding: 2em 3em 0;
    margin-left: 25%;
  }

  .header {
    margin: 80% 2em 0;
    text-align: right;
  }

  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
  }

  .footer {
    text-align: center;
  }
}
</style>
