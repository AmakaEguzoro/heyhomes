<template>
  <div class="testimonials">
    <p class="testi">Testimonials</p>
    <br />
    <div class="row all-testi">
      <div class="col-md-4">
        <div class="card say">
          <p>
            I have known Chilex for over ten years and i can say he is truly a
            man of his words, and his words are actions, and actions are results
            of doing what was promised and that is the type of company HEY
            Homes, is all about.
          </p>
          <div class="test-img">
            <img src="../assets/Ellipse 171 (1).png" alt="" />
            <p>Mich <br />Sites Manager</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card say">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div class="test-img">
            <img src="../assets/Ellipse 172 (1).png" alt="" />
            <p>Mich <br />Sites Manager</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card say">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div class="test-img">
            <img src="../assets/Ellipse 171 (1).png" alt="" />
            <p>Mich <br />Sites Manager</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.testimonials {
  background-image: url("../assets/dotted map.png");
  background-color: white;
  padding: 2rem;
}
.testi {
  font-weight: 700;
  font-size: 80px;
  line-height: 70px;
  letter-spacing: -1px;
  color: #185fad;
}
.all-testi {
  margin: 0 auto;
  width: 100%;
}
.say {
  box-shadow: 5px 5px 15px 5px #e5e5e5;
  background-color: #f7f3f3;
  padding: 1rem;
}
.say p {
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
.test-img img {
  width: 8rem;
}
.test-img {
  display: flex;
  justify-content: space-evenly;
}
</style>
