<template>
  <v-container id="exercise-three">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>Exercise 3: V-for and a Basic Form</h1>
      </v-col>

      <v-col cols="12">
        <p>Edit the HTML and/or javascript to change the appearance and functionality.</p>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <h2>Part 1</h2>
        Change students manually to make it a list of 3 students.
      </v-col>

      <v-col cols="12">
        <b>List of students:</b>
        <v-list>
          <v-list-item v-for="student in students" :key="student">
            {{ student }}
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 3</h2>
        Add a text field below with a label that says "Add students to the list" and a + append-outer-icon.
        <a href="https://vuetifyjs.com/en/components/text-fields#icons" target="_blank">For reference</a>
      </v-col>
      <v-col cols="4">
        <v-text-field label="Add students to the list" v-model="newStudent" append-icon="add" @click:append="addStudent">
        </v-text-field>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 4</h2>
        Now, add an @action to the form we created above that will call a function to append the student to the students list.
        <a href="https://vuetifyjs.com/en/components/text-fields#icon-events" target="_blank">For reference</a>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 5</h2>
        Make the students a list of objects instead of a list of strings. Each student
        object should have first and last fields for their <b>անուն</b> and <b>ազգանուն</b>.
        Does our text-field still update the students correctly?
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 6</h2>
        Create a form and incorporate the text field we made, as well as another one for last name,
        so that on submit, it will work with student objects.
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'ExerciseThree',

  data: () => ({
    students: ['Hayko', 'Mko', 'Abo'],
    newStudent: null
  }),

  methods: {
    addStudent: function () {
      this.students.push(this.newStudent)
      this.newStudent = null
    }
  }
}
</script>
