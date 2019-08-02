<template>
  <div id="app">
    <UrlShortList :urlsShort="shorteneds"></UrlShortList>
  </div>
</template>

<script>
import urls from './services/urlsShorteneds'
import UrlShortList from './urlShort.vue'
export default {
  name: 'app',
  data () {
    return {
      shorteneds: {}
    }
  },
  components: {UrlShortList},
  mounted(){
    urls.lista().then(dado => this.shorteneds = dado.data)
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

h1, h2 {
  font-weight: normal;
}

/*ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}*/

a {
  color: #42b983;
}
</style>
