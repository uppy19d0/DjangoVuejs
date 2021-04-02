<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>¿Esta seguro que deseas eleiminar este libro?</h3>
        <p>Titulo :{{ this.element.title }}</p>
        <p>Descripcion :{{ this.element.description }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <b-button v-on:click="deleteBook" variant="danger">Eliminar</b-button>
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
      element: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    getBook() {
      const path = `http://localhost:8000/api/v1.0/books/${this.bookId}/`;
      axios
        .get(path)
        .then(_responser => {
          this.element.title = _responser.data.title;
          this.element.description = _responser.data.description;
        })
        .catch(_error => {
          console.log(_error);
        });
    },
    deleteBook() {
      const path = `http://localhost:8000/api/v1.0/books/${this.bookId}/`;
      axios
        .delete(path)
        .then(_responser => {
          location.href = "/books";
        })
        .catch(_error => {
          swal("No es posible eliminar el libro", "", "error");
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
