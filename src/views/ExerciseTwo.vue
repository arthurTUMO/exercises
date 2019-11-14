<template>
  <v-container id="exercise-two">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>Exercise 2: Composing Components and v-select</h1>
      </v-col>

      <v-col cols="12">
        <p>Edit the HTML and/or javascript to change the appearance and functionality.</p>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 1</h2>
        Create a component called Counter.vue which is simply a v-btn. Import it
        to the column below.
      </v-col>
      <v-col cols="12">
        <Counter/>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 2</h2>
        Add in a prop to the component so we can give the button a color.
        For now, make that "color" variable equal to blue.
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 3</h2>
        Declare a "count" variable for the button. Add an action to the v-btn so that
        when we click it, the count increases. Then, compose a few instances of the button below. If
        you click on one, does it affect the count of the others?
      </v-col>
      <v-col cols="12">
        <!-- Your code here -->
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 4</h2>
        Add a slot to the button so that we can add text to it from here. Compose
        that button bellow with text between the opening and closing tags.
        <a href="https://vuejs.org/v2/guide/components-slots.html" target="_blank">For reference</a>
      </v-col>
      <v-col cols="12">
        <!-- Your code here -->
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 5</h2>
        Now, make a v-list below with different color choices. For now, just go with "red", "blue", "green", "yellow".
        Bind the choice that is selected from that list to the "color" variable. The buttons should all change color.
        <a href="https://vuetifyjs.com/en/components/selects" target="_blank">For reference</a>
      </v-col>
      <v-col cols="12">
        <!-- Your code here -->
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Challenge</h2>
        Can you figure out how to make a button rounded? Hint: Search the vuetify documentation for buttons.
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Counter from '../components/Counter.vue'

export default {
  name: 'ExerciseTwo',

  components: {
    Counter
  },

  data: () => ({
  })
}
</script>
