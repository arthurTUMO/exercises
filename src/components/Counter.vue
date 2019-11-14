<template>
  <v-container id="Counter">
    <v-btn :color="color" @click="increment">Counter: {{ count }}</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Counter',

  props: {
    color: String
  },

  data: () => ({
    count: 0
  }),

  methods: {
    increment: function () {
      this.count++
    }
  }
}
</script>
