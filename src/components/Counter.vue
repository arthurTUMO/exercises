<template>
  <v-container id="Counter">
    <v-btn :color="color">Counter</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Counter',

  props: {
    color: String
  },

  data: () => ({
  })
}
</script>
