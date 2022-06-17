<template lang="html">

  <section>
    <h1>Formulario</h1>
    <div class="jumbotron">
      <vue-form :state="formstate" @submit.prevent="onSubmit" class="form">

        <validate tag="label">
          <div class="input-container">

            <span>Nombre *</span>
            <input type="text" v-model="model.name" required name="name" minlength="5" maxlength="15"
              class="form-control" />

            <field-messages name="name" show="$dirty">
              <div slot="required">El nombre es un campo requerido</div>
              <div slot="minlength">El nombre debe tener como mínimo 5 letras</div>
              <div slot="maxlength">El nombre debe tener como maximo 15 letras</div>
            </field-messages>

          </div>
        </validate>

        <validate tag="label">
          <div class="input-container">
            <span>Edad *</span>
            <input type="number" v-model="model.age" required name="age" min=18 max=120 class="form-control" />

            <field-messages name="age" show="$dirty">
              <div slot="required">La edad es un campo requerido</div>
              <div slot="min">La edad minima es 18</div>
              <div slot="max">La edad maxima es 120</div>
            </field-messages>
          </div>
        </validate>

        <validate tag="label">
          <div class="input-container">
            <span>Email</span>
            <input v-model="model.email" name="email" type="email" required class="form-control" />

            <field-messages name="email" show="$dirty">
              <div slot="required">El mail es un campo requerido</div>
              <div slot="email">El email no es válido</div>
            </field-messages>
          </div>
        </validate>

        <button type="submit" :disabled="formstate.$invalid"
          class="btn btn-success my-3 input-container">Submit</button>
      </vue-form>
    </div>
  </section>

</template>

<script lang="js">

export default {
  name: 'FormComponent',
  props: [],
  mounted() {

  },
  data() {
    return {
      formstate: {},
      model: this.getInitialData(),
    }
  },
  methods: {
    getInitialData() {
      return {
        name: null,
        age: null,
        email: null
      }
    },
    async onSubmit() {

      const response = this.$store.dispatch("postUser", this.model);
      if (response) {
        this.model = this.getInitialData();
        this.formstate._reset();

      }

    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}


</script>

<style scoped lang="css">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-container {
  width: 200px;
}

.table {
  background-color: lightpink;
}
</style>
