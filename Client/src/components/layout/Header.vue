<template>
  <header class="header">
    <h1>The Users Application</h1>
    <div id="nav">
      <router-link to="/register">Register</router-link> |
     <router-link to="/userPage">User-Page</router-link>

    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>