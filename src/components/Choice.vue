<template>
  <div class="choice">
    <div class="row">
      <div class="col-md-6 give-reason">
        <p class="reason">Why You Should Choose Us ?</p>
      </div>
      <div class="col-md-6 parent">
        <img class="img1" src="../assets/HERO iPhone X Clay.png" alt="" />
        <img class="img2" src="../assets/hand shake 1.png" alt="" />
      </div>
    </div>

    <div class="row services">
      <div class="col-md-4">
        <img src="../assets/fa-commenting-o.jpg" alt="" />
        <br />
        <p class="service-heading">Smart Contract</p>
        <p class="service-write-up">
          When you build with us, you'll have peace of mind knowing that all of
          our aluminum projects comes with a 5-year free repair and replacement
          warranty, giving you the peace of mind you've always desired.
        </p>
      </div>
      <div class="col-md-4">
        <img src="../assets/fa-commenting-o (2).svg" alt="" />
        <br />
        <p class="service-heading">REAL TIME TRACKING</p>
        <p class="service-write-up">
          Track and consolidate your packages in batches or ship them directly
          to their final destination using our real-time tracking system to
          monitor and follow your packages as they arrive at your designated
          door step.
        </p>
      </div>
      <div class="col-md-4">
        <img src="../assets/Vector.png" alt="" />
        <br />
        <p class="service-heading">FAST DELIVERY</p>
        <p class="service-write-up">
          Experience Express Delivery [EED] when you move things from Point A to
          Point B using HEY-Logistics Shipping Processes.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.choice {
  background-color: white;
}
.parent {
  position: relative;
  top: 0;
  left: 0;
}
.img1 {
  position: relative;
  top: 0;
  left: 0;
}
.img2 {
  position: absolute;
  top: 30px;
  left: 50px;
}
.give-reason {
  padding-top: 3rem;
}
.reason {
  padding-top: 2rem;
  margin: 0 auto;
  width: 90%;
  font-weight: 700;
  font-size: 80px;
  line-height: 70px;
  letter-spacing: -1px;
  color: #185fad;
}
.services {
  padding: 4rem;
}
.services img {
  display: block;
  margin-left: 4.5rem;
  margin-right: auto;
  width: 7%;
}
.service-heading {
  font-weight: 800;
  font-size: 24px;
  line-height: 26px;
  text-align: left;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #185fad;
}
.service-write-up {
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #000000;
  mix-blend-mode: normal;
}

@media (max-width: 600px) {
  .parent {
    position: relative;
    top: 0;
    left: 0;
  }
  .img1 {
    position: relative;
    width: 500px;
    top: 0;
    left: 0;
  }
  .img2 {
    position: absolute;
    width: 460px;
    top: 20px;
    left: 50px;
  }
  .give-reason {
    padding-top: 0;
  }
  .reason {
    padding-top: 0;
    padding-bottom: 40px;
    text-align: center;
    margin: 0;
    width: 90%;
    font-weight: 700;
    font-size: 50px;
    line-height: 50px;
    letter-spacing: -1px;
  }
  .services {
    padding: 2rem;
  }

  .service-heading {
    font-weight: 800;
    font-size: 22px;
    line-height: 20px;
    text-align: left;
    letter-spacing: 2px;
  }
  .service-write-up {
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    mix-blend-mode: normal;
  }
}
</style>
