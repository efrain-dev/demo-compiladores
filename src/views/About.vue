<template>
  <div class=" p-5 d-flex justify-content-center" >
    <div>
      <div class="  mt-4">
        <!-- <h4>Top and Bottom</h4> -->
        <b-card-group deck>
          <b-card :img-src="require('../assets/img/mgu.jpg')" img-alt="Card image" img-top>
            <b-card-text>
               <h4>UMG - SEDE PUERTO BARRIOS </h4>
              Somos un grupo de estudiantes de la Universidad Mariano Galvez de Guatemala, sede Puerto Barrios Izabal,
              pertenecientes al ## cliclo, de la carrera de Igenieria en Sistemas, 
            </b-card-text>
          </b-card>

          <b-card :img-src="require('../assets/img/tool.jpg')" img-alt="Card image" img-bottom>
            <b-card-text>
               <h4>GRUPO C - COMPILADORES</h4>
              El oroyecto presentado es parte de curso Compliladores, dicho proyecto llamado JAVATOOL, elaborado en conjunto 
              por el Grupo C
            </b-card-text> 
          </b-card>
        </b-card-group>
      </div>
      <div class=" p-5">
         <b-card-group deck>
        <!-- efra -->
       
         
          <b-card :img-src="require('../assets/img/efra.jpg')" img-left class="">
            <b-card-text>
               <h4>EFRAIN DE LEON</h4>
              Estuadiante de Ingenieria en Sistemas de la Univerdad Mariano Galvez de Guatemala, de 21 años de edad, especialista en desarrollo 
              siendo el coordinar del Grupo C, con basta experiencia en el desarrollo de aplicaciones Web y de los servicios que ofrece AWS  
            </b-card-text>
          </b-card>
       
        <!-- moreno -->
     
        <b-card :img-src="require('../assets/img/moreno.jpg')" img-alt="Card image" img-left class="">
          <b-card-text>
            <h4>BRYAN MORENO</h4>
            Estuadiante de Ingenieria en Sistemas de la Univerdad Mariano Galvez de Guatemala, de 23 años de edad
          </b-card-text>
        </b-card>
      
        <!-- cesar -->
       
          <b-card :img-src="require('../assets/img/csr.jpg')" img-alt="Card image" img-left class="">
            <b-card-text>
              <h4>CESAR MIRON</h4>
              Estuadiante de Ingenieria en Sistemas de la Univerdad Mariano Galvez de Guatemala, de 20 años de edad, se desempeña
              en el area de diseño y front end, sabe que la primera impresion en la que mas cuenta y que el desarrolo a nivel visual
              sin duda ayuda a una mejor experiencia de trabajo.
            </b-card-text>
          </b-card>
        
         </b-card-group>
      </div>
    </div>
  
  


  </div>
</template>



<style>



</style>