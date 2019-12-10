<template>
  <router-view/>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
