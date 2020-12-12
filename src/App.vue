<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body,
#app {
  height: 100%;
}
#app .el-breadcrumb {
  height: 40px;
  line-height: 40px;
  background-color: #ddd;
  padding-left: 10px;
}
</style>
