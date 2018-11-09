<template>
  <div id="app">
    <el-container>
      <el-header>
        <HeaderNav></HeaderNav>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>

      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

import HeaderNav from '@/components/Header.vue'

@Component({
  components: {
    HeaderNav
  }
})
export default class App extends Vue {}
</script>


<style lang="stylus">
html, body
  margin: 0

a:hover, a:visited, a:link, a:active
  text-decoration: none
  color: #2c3e50
  

#app
  background: #eee
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  // text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
