<template>
  <header class="nav">
    <div class="container">
      <router-link to="/" class="title" replace>My Tasks</router-link>
      <router-link to="/about" class="title" replace>In Progress</router-link>
      <router-link to="/about" class="title" replace>Completed</router-link>
    </div>
  </header>
  <router-view />
  <div>{{ currentRoute }}</div>
</template>

<style lang="scss">
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_mixin.scss";

.nav {
  background-color: $c_primary;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    width: 100%;
    padding: 1.5rem;
    color: $c_primary-dark;
    text-decoration: none;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 80%;
      height: 8px;
      background-color: $c_primary-dark;
      opacity: 0;
      @include mobile {
        height: 5px;
      }
    }
    &.router-link-active {
      position: relative;
      color: $c_light;
      &::after {
        opacity: 1;
        transition: opacity 0.5s;
      }
    }
    @include mobile {
      padding: 1rem 0.5rem;
    }
  }
}
</style>
