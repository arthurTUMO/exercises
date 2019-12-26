<template>
  <v-container id="Login">
    <v-card>
      <v-container>
        <v-card-title>
          Sign up
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  label="First Name"
                  v-model="first"
                  :rules="notBlankRule"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Last Name"
                  v-model="last"
                  :rules="notBlankRule"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  v-model="email"
                  :rules="emailRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Confirm Email"
                  v-model="emailToMatch"
                  :rules="emailConfirmationRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password"
                  v-model="password"
                  :rules="passwordRules"
                  :append-icon="show? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                  error-count="3"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="submit">
            Sign up
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',

  data: () => ({
    show: false,
    first: null,
    last: null,
    email: null,
    emailToMatch: null,
    password: null,
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 8) || 'Password must have 8 or more characters',
      v => /(?=.*\d)/.test(v) || 'Password must contain at least 1 number'
    ],
    notBlankRule: [
      v => !!v || 'This field is required'
    ]
  }),
  computed: {
    emailConfirmationRules () {
      return [
        () => (this.email === this.emailToMatch) || 'E-mail must match',
        v => !!v || 'Confirmation E-mail is required'
      ]
    }
  },
  methods: {
    submit: async function () {
      let data = {
        name: this.first,
        lastName: this.last,
        email: this.email,
        password: this.password
      }
      try {
        let response = await axios.post('http://localhost:4000/register', data)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
