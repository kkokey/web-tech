<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        baas-web
      </h1>
      <h2 class="subtitle">
        baas-web for SASEUL
      </h2>
      <div>
        isLogged: {{$store.getters.isLogin}}
      </div>
      <div>
        session: {{$store.getters.userInfo}}
      </div>
      <div class="links">
        <a @click="login"
           class="button--grey">Login</a>
      </div>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    components: {
      AppLogo
    },
    methods: {
      login() {
        this.$store.dispatch('userSessionFetch');
      }
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>

