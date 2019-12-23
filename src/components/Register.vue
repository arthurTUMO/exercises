<template>
  <v-container>
    <v-card class="pa-5">
      <v-card-title>
        Register
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="first" label="First Name" :rules="requiredRule">
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field v-model="last" label="Last Name" :rules="requiredRule">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="email" label="Email" :rules="emailRules">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="emailMatch" label="Confirm Email" :rules="confirmEmailRules">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
              label="Password"
              :append-icon="show? 'mdi-eye' : 'mdi-eye-off'"
              :type="show? 'text' : 'password'"
              @click:append="show = !show"
              v-model="password"
              :rules="passwordRules"
              error-count="3"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Sign up</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  data: () => ({
    show: true,
    first: null,
    last: null,
    email: null,
    emailMatch: null,
    password: null,
    requiredRule: [
      v => !!v || 'This field is required.'
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must have 8 or more characters',
      v => /(?=.*\d)/.test(v) || 'Password must contain at least 1 number'
    ]
  }),
  computed: {
    confirmEmailRules () {
      return [
        () => (this.email === this.emailMatch) || 'Confirmation email must match',
        v => !!v || 'Confirmation email is required'
      ]
    }
  }
}
</script>
