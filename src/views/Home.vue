<template>
  <div class="h-full">


    
    
    <div fluid-grow class="p-4 bg-dark" style="position: absolute; z-index:3; ">
        <b-row>
          <b-col>
            <div>
                <b-card
                  title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </b-card-text>

                  <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            </div>
          </b-col>
          <b-col>
              <b-card
                  title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </b-card-text>

                  <b-button href="#" variant="primary">Go somewhere</b-button>
                </b-card>
            
          </b-col>
          <b-col>
              <b-card
                  title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </b-card-text>

                  <b-button href="#" variant="primary">Go somewhere</b-button>
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

</style>