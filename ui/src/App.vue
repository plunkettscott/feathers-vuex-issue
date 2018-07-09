<template>
  <div>
    <div>
      <h1 v-if="resourcesLoaded" style="color: green;">Resources Loaded!</h1>
      <h1 v-if="!resourcesLoaded" style="color: red;">Resources Not Loaded!</h1>
    </div>

    <div>
      <h3>Fruits</h3>
      <ul>
        <li v-for="fruit in fruits" :key="fruit.id">
          {{ fruit.name }} / {{ fruit.description }}
        </li>
      </ul>
    </div>
    <div>
      <h3>People</h3>
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Fav. Fruit</th>
            <th>Fruit Desc.</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in people" :key="person.id">
            <td>{{ person.name }}</td>
            <td>{{ person.fruit.name }}</td>
            <td>{{ person.fruit.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      resourcesLoaded: false,
    };
  },
  computed: {
    ...mapGetters('fruits', {
      findFruits: 'find',
    }),
    ...mapGetters('people', {
      findPeople: 'find',
    }),
    people() {
      return this.findPeople().data;
    },
    fruits() {
      return this.findFruits().data;
    },
  },
  mounted() {
    this.$store.dispatch('fruits/find', {})
      .then(() => this.$store.dispatch('people/find', {}))
      .then(() => { this.resourcesLoaded = true; });
  },
};
</script>
