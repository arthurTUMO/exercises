<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout justify-center wrap>
          <router-link class="mx-1" to="/">1. Basic Variables</router-link>
          <router-link class="mx-1" to="/exercise-two">2. Composing Components</router-link>
          <router-link class="mx-1" to="/exercise-three">3. V-for, Forms</router-link>
          <router-link class="mx-1" to="/exercise-four">4. Form Validation</router-link>
          <router-link class="mx-1" to="/exercise-five">5. Async Fetch, Lifecycle Hooks</router-link>
        </v-layout>
      </v-container>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
