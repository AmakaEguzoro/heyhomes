<template>
  <div>
    <div class="career-page">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="../assets/87212385-4669-45dd-be91-21370b8b9582 1.png"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <div class="d-flex">
              <ul class="my-2 navbar-nav">
                <li>
                  <router-link to="/" tag="li" class="nav-item"
                    >Menu</router-link
                  >
                </li>

                <li>
                  <router-link to="/specialties" tag="li" class="nav-item"
                    >About Us</router-link
                  >
                </li>
                <li>
                  <router-link to="/catalogue" tag="li" class="nav-item"
                    >Catalogue</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p class="beautiful">Career</p>
      <p class="beautiful-words">
        We are on a path to becoming a globally respected Valuable Brand, and
        there is always room for individuals with great talent who embrace
        excellence, innovation and integrity.
      </p>
      <br />
      <div class="actions">
        <button type="button" class="btn btn-lg qut">Join Us</button>
        <br />
      </div>
    </div>
    <br />
    <div>
      <br />
      <div class="card career-text">
        <p class="career-write">
          Each individual member of our skilled workforce is the source of our
          organization's strength. If you are as enthusiastic as we are about
          adding value and innovation to the Nigerian market and its ecosystem,
          we would like to speak with you.
        </p>
      </div>
      <br />
      <br />
    </div>
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
        <responseCareer />
      </div>
    </div>
  </div>
</template>

<script>
import ResponseCareer from "./ResponseCareer.vue";

export default {
  name: "Career",
  components: {
    ResponseCareer,
  },
};
</script>

<style>
.career-page {
  overflow: auto;
  position: relative;
  padding-bottom: 7rem;
}

.career-page::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  background-image: url("../assets/Career page.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: brightness(50%);
}
.career-text {
  margin-left: 5rem;
  margin-right: 5rem;
  border-radius: 45px;
  padding: 3rem;
  background-color: #185fad;
}
.career-write {
  font-weight: 400;
  font-size: 25px;
  line-height: 39px;
  color: #ffffff;
}
</style>
