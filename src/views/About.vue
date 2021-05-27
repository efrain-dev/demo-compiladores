<template>
  <div class="about">

    <div fluid-grow class="p-4 bg-dark">
        <b-row>
          <b-col>
            <b-img thumbnail fluid :src="require('../assets/img/JAVATOOL.jpg')"></b-img>
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="https://i.pinimg.com/originals/34/22/90/3422900cb9e9bd4ce803847129eb6c9f.jpg" alt="Image 2"></b-img>
          </b-col>
          <b-col>
            <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
          </b-col>
        </b-row>
        </div>

    <div fluid-grow class="bg-secondary">
        <b-row>
        
        </b-row>
    </div>

    <div  class="bg-dark">
        
        <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"  
        img-height="480"
      >
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>

        
        
    </div>

  </div>
</template>
