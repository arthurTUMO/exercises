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
                  label="Password"
                  v-model="password"
                  :rules="passwordRules"
                  :append-icon="show? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary">
            Sign up
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Register',

  data: () => ({
    show: false,
    first: null,
    last: null,
    email: null,
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
  })
}
</script>
