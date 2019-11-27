<template>
  <div id="app">
    <body>
    <div class="container">
      <ul id="gn-menu" class="gn-menu-main">
        <li class="gn-trigger">
          <a class="gn-icon gn-icon-menu"><span>Menu</span></a>
          <nav class="gn-menu-wrapper">
            <div class="gn-scroller">
              <ul class="gn-menu">
                <li class="gn-search-item">
                  <input placeholder="Search" type="search" class="gn-search">
                  <a class="gn-icon gn-icon-search"><span>Search</span></a>
                </li>
                <li>
                  <a class="gn-icon gn-icon-download">Downloads</a>
                  <ul class="gn-submenu">
                    <li><a class="gn-icon gn-icon-illustrator">Vector Illustrations</a></li>
                    <li><a class="gn-icon gn-icon-photoshop">Photoshop files</a></li>
                  </ul>
                </li>
                <li><a class="gn-icon gn-icon-cog">Settings</a></li>
                <li><a class="gn-icon gn-icon-help">Help</a></li>
                <li>
                  <a class="gn-icon gn-icon-archive">Archives</a>
                  <ul class="gn-submenu">
                    <li><a class="gn-icon gn-icon-article">Articles</a></li>
                    <li><a class="gn-icon gn-icon-pictures">Images</a></li>
                    <li><a class="gn-icon gn-icon-videos">Videos</a></li>
                  </ul>
                </li>
              </ul>
            </div><!-- /gn-scroller -->
          </nav>
        </li>
        <li><a href="http://tympanus.net/codrops">Codrops</a></li>
        <li><a class="codrops-icon codrops-icon-prev" href="http://tympanus.net/Development/HeaderEffects/"><span>Previous Demo</span></a></li>
        <li><a class="codrops-icon codrops-icon-drop" href="http://tympanus.net/codrops/?p=16030"><span>Back to the Codrops Article</span></a></li>
      </ul>
      <header>
        <!--				<h1>Google Nexus Website Menu <span>A sidebar menu as seen on the <a href="http://www.google.com/nexus/index.html">Google Nexus 7</a> page</span></h1>	-->
      </header>
    </div><!-- /container -->
<!--    <script src="js/classie.js"></script>-->
<!--    <script src="js/gnmenu.js"></script>-->
<!--    <script>-->
<!--      new gnMenu( document.getElementById( 'gn-menu' ) );-->
<!--    </script>-->
    </body>
  </div>
</template>

<script>
import '@/assets/js/classie'
import '@/assets/js/gnmenu'


export default {
  name: 'app',
  components: {
  },
  mounted () {
    new gnMenu( document.getElementById( 'gn-menu' ) ); // eslint-disable-line
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
