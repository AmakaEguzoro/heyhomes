<template>
  <div class="row reach">
    <div class="col-md-6">
      <p class="first-head">Reach Us</p>
      <p class="second-head">
        Fill up the form and our Team will get back <br />
        to you within 24 hours.
      </p>
      <img class="reach-img" src="../assets/Reach Us (1).png" alt="" />
      <br />
      <p class="info">hello@heyhomes.co</p>
      <br />
      <p class="info">+234 904 560 4669</p>
      <br />
      <p class="info">
        4B Ologolo Road, Agungi <br />
        Lekki Lagos State, Nigeria
      </p>
    </div>

    <div class="col-md-6">
      <response />
    </div>
  </div>
</template>

<script>
import Response from "./Response.vue";

export default {
  name: "Reach",
  components: {
    Response,
  },
};
</script>

<style>
.reach {
  background-color: var(--bg);
  padding: 4rem;
}
.first-head {
  font-weight: 400;
  font-size: 48px;
  line-height: 57px;
  text-align: left;

  color: #ffffff;
}
.second-head {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
}

.info {
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
}

@media (max-width: 600px) {
  .reach {
    background-color: var(--bg);
    padding: 2rem;
  }
  .first-head {
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    text-align: left;
    color: #ffffff;
  }
  .second-head {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
  }

  .info {
    font-weight: 600;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }
}
</style>
