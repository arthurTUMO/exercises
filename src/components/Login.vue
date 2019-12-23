<template>
  <v-container>
    <v-card>
      <v-container class="px-2">
        <v-card-title>
          Login
        </v-card-title>
        <v-card-text>
          <v-text-field label="Email">
          </v-text-field>
          <v-text-field
          label="Password"
          :append-icon="show? 'mdi-eye' : 'mdi-eye-off'"
          :type="show? 'text' : 'password'"
          @click:append="show = !show"
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary">Sign in</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    show: true
  })
}
</script>
