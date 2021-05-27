<template>
  <div class="container shadow-lg rounded-lg p-5 my-5 bg-white">
    <h1 class="display-5" style="text-align: center;">Analizador Lexico y Sintactico</h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <textarea class="form-control" placeholder="Ingrese su codigo en este lugar" id="dataText"
                  style="height: 300px" v-model="dataText"></textarea>
      </div>
      <div class="col-md-6"  >
        <div class="overflow-auto" style="height: 300px">
        <b-table  striped hover  :items="respuestaS"></b-table>
        </div>

      </div>

    </div>
    <div class="row gx-5 my-5">
      <div class="col">
        <textarea class="form-control" placeholder="Resultados" readonly="true" id="textRSemantica"
                  style="height: 50px" v-model="respuestaL"></textarea>
      </div>

      <div class="col">
        <input class="btn btn-dark form-control my-1" value="Analisis Sintactico" type="button"
               v-on:click="analisisSintactico()"/>

      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import auth from "@/logic/auth";

export default {

  name: "Analizador",
  data() {
    return {
      respuestaS: [{"Token": "", "Lexema": "", "Cadena": "", "Linea": "", "Columna": ""}],
      respuestaL: "",
      dataText: "",

    }

  },
  watch: {
    dataText: function () {
      if (this.dataText === "") {
        this.respuestaS = [{"Token": "", "Lexema": "", "Cadena": "", "Linea": "", "Columna": ""}];
      } else {
        this.analisisLexico()
      }
    }
  },
  methods: {
    async analisisLexico() {
      this.respuestaS = await axios.get(auth.getENDPOINT_PATH(), {
        params: {
          dataText: this.dataText,
          opt: "Lexico",
        }
      }).then(function (response) {
        return response.data
      })
    },
    async analisisSintactico() {
      this.respuestaL = await axios.get(auth.getENDPOINT_PATH(), {
        params: {
          dataText: this.dataText,
          opt: "Sintactico",
        }
      }).then(function (response) {
        console.log(response.data)
        return response.data.mensaje
      })
    }
  }
}
</script>

<style scoped>

</style>