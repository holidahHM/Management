<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <a href="/home" class="navbar-brand">Home</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto" v-if="!user">
            <li class="nav-item">
              <a href="/login" class="nav-link">Login</a>
            </li>

            <li class="nav-item">
              <a href="/register" class="nav-link">sign up</a>
            </li>

            <li class="nav-item">
              <a href="/account" class="nav-link">My Account</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
</template>

<script> 
    export default{
        name: 'Nav',
        props: ['user']
    }
</script>

<style>
.nav{
  background: forestgreen;
}
</style>