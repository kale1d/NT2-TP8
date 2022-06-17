<template lang="html">

  <section class="jumbotron jumbotron-fluid">
    <h1>Lista de usuarios</h1>


    <div v-if="!users.length">
      <div class="alert alert-danger">
        No hay usuarios disponibles
      </div>
    </div>


    <table v-else class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" :key="i">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phoneNumber }}</td>
        </tr>
      </tbody>
    </table>


  </section>

</template>

<script lang="js">

export default {
  name: 'user-list-component',
  props: [],
  beforeMount() {
    this.$store.dispatch("getUsers");
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {
    users() {
      return this.$store.state.usuarios;
    }
  }
}


</script>

<style scoped lang="css">
.jumbotron {
  background-color: lightgrey;
}

.bg-color {
  width: 100vw;
  height: 100vh;
  background-color: pink;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgb(251, 222, 247);
}

.table-striped tbody tr:nth-of-type(even) {
  background-color: rgb(223, 252, 227);
}
</style>
