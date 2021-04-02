<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Editar Libro</h2>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">
              <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label"
                  >Titulo</label
                >
                <div class="col-sm-6">
                  <input
                    type="text"
                    placeholder="Titulo"
                    name="title"
                    class="form-control"
                    v-model.trim="form.title"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="description" class="col-sm-2 col-form-label"
                  >Descripcion</label
                >
                <div class="col-sm-6">
                  <input
                    type="text"
                    placeholder="Titulo"
                    name="description"
                    class="form-control"
                    v-model.trim="form.description"
                  />
                </div>
              </div>
              <div class="rows">
                <div class="col text-left">
                  <b-button type="submit" variant="primary">
                    Editar
                  </b-button>
                  <b-button
                    type="submit"
                    variant="danger"
                    class="btn-large-space"
                    :to="{ name: 'ListBook' }"
                  >
                    Cancelar
                  </b-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  data() {
    return {
      bookId: this.$route.params.bookId,
      form: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    onSubmit(_event) {
      _event.preventDefault();
      const path = `http://localhost:8000/api/v1.0/books/${this.bookId}/`;
      axios
        .put(path, this.form)
        .then(_responser => {
          this.form.title = _responser.data.title;
          this.form.description = _responser.data.description;
          swal("Libro actualizado Correctamente", "", "success");
        })
        .catch(_error => {
          console.log(_error);
        });
    },
    getBook() {
      const path = `http://localhost:8000/api/v1.0/books/${this.bookId}/`;
      axios
        .get(path)
        .then(_responser => {
          this.form.title = _responser.data.title;
          this.form.description = _responser.data.description;
        })
        .catch(_error => {
          console.log(_error);
        });
    }
  },
  created() {
    this.getBook();
  }
};
</script>
<style lang=""></style>
