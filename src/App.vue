<template>
  <v-app>
    <!-- Sidebar Drawer -->
    <v-navigation-drawer
      class="hidden-md-and-up"
      v-model="drawer"
      app
    >
      <v-list dense>

        <v-list-item @click="$router.push('/');drawer=false;">
          <v-list-item-action>
            <v-icon>mdi-numeric-1-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Exercise1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/exercise-two');drawer=false;">
          <v-list-item-action>
            <v-icon>mdi-numeric-2-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Exercise2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/exercise-three');drawer=false;">
          <v-list-item-action>
            <v-icon>mdi-numeric-3-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Exercise3</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="$router.push('/exercise-four');drawer=false;">
          <v-list-item-action>
            <v-icon>mdi-numeric-4-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Exercise4</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/exercise-two" @click="drawer=false;">
          <v-list-item-action>
            <v-icon>mdi-numeric-5-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Exercise5</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Toolbar top -->
    <v-app-bar color="#242424" dark>
      <v-toolbar-title @click="$router.push('/')">Exercises App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn color="#242424" to="/">Exercise1</v-btn>
          <v-btn color="#242424" to="/exercise-two">Exercise2</v-btn>
          <v-btn color="#242424" to="/exercise-three">Exercise3</v-btn>
          <v-btn color="#242424" to="/exercise-four">Exercise4</v-btn>
          <v-btn color="#242424" to="/exercise-five">Exercise5</v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false
  })
}
</script>
