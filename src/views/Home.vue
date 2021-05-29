<template>
  <div class="h-full">

    <div class="p-4 mt-4 d-flex justify-content-center" id="cards">
       
        <b-row id="info" >
          <b-col>
            <div>
                <b-card
                  title="Analizador"
                  :img-src="require('../assets/img/analiz.jpg')"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 25rem;"
                  class="mx-5 card"
                
                >
                  <b-card-text>
                    Analizador Lexico y Sintactico, ingresa tu codigo y observa como funciona.
                  </b-card-text>

                  <b-button to="/analizador" variant="outline-secondary">Probar</b-button>
                </b-card>
            </div>
          </b-col>
          <b-col>
              <b-card
                  title="Implementacion"
                  :img-src="require('../assets/img/imple.jpg')"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 25rem;"
                  class="mx-5 card"
              
                >
                  <b-card-text>
                    Conoce como comenzar, la manera de la Implementacion
                  </b-card-text>

                  <b-button to="/implementacion" variant="outline-secondary">Comenzar</b-button>
                </b-card>
            
          </b-col>
          <b-col>
              <b-card
                  title="Quienes Somos"
                  :img-src="require('../assets/img/somos.jpg')"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 25rem;"
                  class="mx-5 card"
                 
                >
                  <b-card-text>
                    Conoce mas de nosotros, toda la iformacion que necesitas saber, la encontraras aqui. 
                  </b-card-text>

                  <b-button to="/about" variant="outline-secondary">Conocenos</b-button>
                </b-card>
           
          </b-col>
 
        </b-row>  

        </div>
        <div class="p-4 d-flex justify-content-center" id="cards">
       
        <b-row id="info" >

          <b-col>
          <b-card
                  title="Cuenta"
                  :img-src="require('../assets/img/cuenta.jpg')"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 25rem;"
                  class="mx-5 card"
                 
                >
                  <b-card-text>
                    Chequea tu perfil 
                  </b-card-text>

                  <b-button to="/cuenta" variant="outline-secondary">Conocenos</b-button>
                </b-card>
        </b-col>
        </b-row>  

        </div>

        

    

  </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
  name: "Home",

  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  }
};
</script>

<style>
#cards{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* background-color: #8c8c8c; */
  
}

#info{
  
}

.card {
            overflow: hidden;
            transition: all 0.25s;
        }

        .card:hover {
            transform: translateY(-15px);
            box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
        }


</style>