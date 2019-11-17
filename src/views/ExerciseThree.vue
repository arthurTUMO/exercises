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
            <p><b>First Name: </b> {{ student.first }}  <b>Last Name: </b> {{ student.last }}</p>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 3</h2>
        Add a v-text-field below with a label that says "Add students to the list" and a + append-outer-icon.
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
        Does our v-text-field still update the students correctly?
      </v-col>
    </v-row>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 6</h2>
        Create a v-form and incorporate the v-text-field we made, as well as another one for last name,
        so that on submit, it will work properly with student objects. No model validation needed yet.
      </v-col>
    </v-row>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="5">
            <v-text-field v-model="firstName" label="First Name">
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="lastName" label="Last Name" append-outer-icon="add" @click:append-outer="addFullNameStudent">
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <v-divider class="my-4"/>

    <v-row>
      <v-col cols="12">
        <h2>Part 7</h2>
        Update the code at the top to make the list of students look nicer.
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'ExerciseThree',

  data: () => ({
    students: [{ first: 'Hayko', last: 'Janyan' },
      { first: 'Mko', last: 'Kezinchyan' },
      { first: 'Abo', last: 'Abo' }],
    newStudent: null
  }),

  methods: {
    addStudent: function () {
      this.students.push(this.newStudent)
      this.newStudent = null
    },
    addFullNameStudent: function () {
      this.students.push({ first: this.firstName, last: this.lastName })
      this.firstName = null
      this.lastName = null
    }
  }
}
</script>
