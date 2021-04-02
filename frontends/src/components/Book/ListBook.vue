<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <div class="">
          <h2>Listados de libros</h2>
          <b-button size="sm" variant="primary" :to="{ name: 'CreateBook' }"
            >Nuevo Libro</b-button
          >
        </div>
        <br />
        <div class="col-md-12">
          <b-table striped hover :items="books" :fields="fields">
            <template v-slot:cell(action)="data">
              <b-button
                size="sm"
                variant="primary"
                :to="{ name: 'EditBook', params: { bookId: data.item.id } }"
                >Editar</b-button
              >
              <b-button
                size="sm"
                variant="danger"
                :to="{ name: 'DeleteBook', params: { bookId: data.item.id } }"
                >Eliminar</b-button
              >
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      fields: [
        { key: "title", label: "Titulo" },
        { key: "description", label: "Descripcion" },
        { key: "action", label: "Accion" }
      ],
      books: []
    };
  },
  methods: {
    getBooks() {
      const url = "http://localhost:8000/api/v1.0/books/";
      axios
        .get(url)
        .then(_response => {
          this.books = _response.data;
        })
        .catch(_error => {
          console.log(_error);
        });
    }
  },
  created() {
    this.getBooks();
  }
};
</script>
<<style lang="css" scoped></style>
