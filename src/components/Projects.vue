<template>
  <!-- <div>
    <br />
    <br />
    <p class="big-heading"><u>Our Best Projects</u></p>
    <div class="projects">
      <div class="slide-container">
        <span class="slider-span" id="slider-span1"></span>
        <span class="slider-span" id="slider-span2"></span>
        <span class="slider-span" id="slider-span3"></span>
        <span class="slider-span" id="slider-span4"></span>
        <span class="slider-span" id="slider-span5"></span>
        <span class="slider-span" id="slider-span6"></span>
        <span class="slider-span" id="slider-span7"></span>

        <div class="image-slider">
          <div class="slides-div" id="slide-1">
            <img
              src="../assets/Rectangle 352.png"
              alt=""
              class="img"
              id="img1"
            />
            <a href="#slider-span1" class="button" id="button-1"></a>
          </div>

          <div class="slides-div" id="slide-2">
            <img
              src="../assets/Rectangle 351.png"
              alt=""
              class="img"
              id="img2"
            />
            <a href="#slider-span2" class="button" id="button-2"></a>
          </div>

          <div class="slides-div" id="slide-3">
            <img
              src="../assets/Rectangle 320 (1).png"
              alt=""
              class="img"
              id="img3"
            />
            <a href="#slider-span3" class="button" id="button-3"></a>
          </div>

          <div class="slides-div" id="slide-4">
            <img
              src="../assets/Rectangle 324 (1).png"
              alt=""
              class="img"
              id="img4"
            />
            <a href="#slider-span4" class="button" id="button-4"></a>
          </div>

          <div class="slides-div" id="slide-5">
            <img
              src="../assets/Rectangle 326 (1).png"
              alt=""
              class="img"
              id="img5"
            />
            <a href="#slider-span5" class="button" id="button-5"></a>
          </div>

          <div class="slides-div" id="slide-6">
            <img
              src="../assets/Rectangle 348.png"
              alt=""
              class="img"
              id="img6"
            />
            <a href="#slider-span6" class="button" id="button-6"></a>
          </div>

          <div class="slides-div" id="slide-7">
            <img
              src="../assets/Rectangle 349.png"
              alt=""
              class="img"
              id="img7"
            />
            <a href="#slider-span7" class="button" id="button-7"></a>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div>
    <br />
    <br />
    <p class="best-heading"><u>Our Best Projects</u></p>
    <div id="slider">
      <figure>
        <img src="../assets/project-pics1.png" alt="" />
        <img src="../assets/project-pics2.png" alt="" />
        <img src="../assets/project-pics3.png" alt="" />
        <img src="../assets/project-pics1.png" alt="" />
        <img src="../assets/project-pics2.png" alt="" />
      </figure>
    </div>
    <br />
    <br />
  </div>
</template>

<style>
#slider {
  overflow: hidden;
}

#slider figure {
  position: relative;

  width: 500%;
  margin: 0;
  left: 0;
  animation: 20s slider infinite;
}

#slider img {
  width: 20%;
  float: left;
}

.best-heading {
  margin-left: 30px;
  font-weight: 700;
  font-size: 70px;
  line-height: 70px;
  letter-spacing: -1px;
  color: #185fad;
}

@keyframes slider {
  0% {
    left: 0;
  }
  20% {
    left: 0;
  }
  25% {
    left: -100%;
  }
  45% {
    left: -100%;
  }

  50% {
    left: -200%;
  }

  70% {
    left: -200%;
  }
  75% {
    left: -300%;
  }
  75% {
    left: -300%;
  }
  100% {
    left: -400%;
  }
}
/* .projects {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}
.slide-container {
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: rgb(255, 255, 255);
}

.image-slider {
  width: 100%;
  height: 600px;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
}

.slides-div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px 0 30px;
}

.img {
  position: relative;
  width: 240px;
  height: 370px;
  transition: 0.5s;
  
}

.button {
  position: absolute;
  width: 240px;
  height: 370px;
  transition: 0.5s;
  
}

.button:hover {
  
}

#slider-span1:target ~ .image-slider #img1,
#slider-span1:target ~ .image-slider #button-1 {
  width: 380px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span2:target ~ .image-slider #img2,
#slider-span2:target ~ .image-slider #button-2 {
  width: 380px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}

#slider-span3:target ~ .image-slider #img3,
#slider-span3:target ~ .image-slider #button-3 {
  width: 380px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span4:target ~ .image-slider #img4,
#slider-span4:target ~ .image-slider #button-4 {
  width: 380px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span5:target ~ .image-slider #img5,
#slider-span5:target ~ .image-slider #button-5 {
  width: 380px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span6:target ~ .image-slider #img6,
#slider-span6:target ~ .image-slider #button-6 {
  width: 380px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span7:target ~ .image-slider #img7,
#slider-span7:target ~ .image-slider #button-7 {
  width: 380px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}


#slider-span1:target ~ .image-slider {
  left: 70%;
}
#slider-span2:target ~ .image-slider {
  left: 50%;
}
#slider-span3:target ~ .image-slider {
  left: 25%;
}

#slider-span5:target ~ .image-slider {
  left: -250%;
}
#slider-span6:target ~ .image-slider {
  left: -50%;
}
#slider-span7:target ~ .image-slider {
  left: -70%;
} */
@media (max-width: 480px) {
  .best-heading {
    margin-left: 0;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 1px;
    text-align: center;
    color: #185fad;
  }
}
</style>
