<template>
  <div class="specialties-body">
    <br />
    <br />
    <div class="card brand-card">
      <div class="card-body">
        <h5 class="card-title aluminium">
          <u>HEY Homes & Aluminum Fabrication</u>
        </h5>
        <p class="card-text alum-text">
          The HEY Brand continues to grow its vision of becoming the leading
          provider of essential products and services in Sub-Saharan Africa.
          Whether we are building a custom home or a spec home, windows and door
          design for you.
          <br />
          <br />
          Our goal at HEY Homes is to construct a memorable home that will lift
          your spirit and heart to its highest levels.
        </p>
      </div>
    </div>
    <br />
    <p class="big-heading"><u>Our Specialties</u></p>
    <div class="row specialty">
      <div class="col-md-6">
        <p class="sub-headings">Aluminum Windows</p>
        <p class="explain">
          We are specialized in the construction of aluminum windows ranging
          from sliding windows to casement windows to frameless windows and so
          much more. We measure, design, fabricate and install this windows
          projects into your newly built/acquired environment..
        </p>
        <br />

        <p class="sub-headings">Aluminum Roofings</p>
        <p class="explain">
          With our personal shopper services, we provide shopping assistance for
          single product or bulk purchases from any e-Commerce stores in the
          United States, the United Kingdom, and China.
        </p>
      </div>

      <div class="col-md-6">
        <p class="sub-headings">Aluminum Doors</p>
        <p class="explain">
          With our years of experience and technological advancement, we are one
          of the most trusted companies to handle all of your Aluminum doors,
          from corporate organizations to private individuals. Please see our
          catalogue for a complete listing of all our available products and
          projects.
        </p>

        <br />
        <p class="sub-headings">General Constructions</p>
        <p class="explain">
          We acquire landed properties, provide technical drawings and
          government permits and approval, as well as start and finish of
          buildings construction to handing over of property to our clients at
          various levels.
        </p>
      </div>
    </div>

    <div class="contact-us">
      <div class="card contact-card1">
        <div class="row">
          <div class="col-md-6">
            <p><b>Call Center</b></p>
            <p>+234 706 194 1204</p>
            <p>+234 706 194 1204</p>
          </div>
          <div class="col-md-6">
            <p><b>Our Location</b></p>
            <p>USA, UK</p>
            <p>CHINA NIGERIA</p>
          </div>
        </div>
      </div>
      <div class="card contact-card2">
        <p><b> Working Hours</b></p>
        <p>Mon-Friday (9am-5pm)</p>
        <p>Saturday (11am-3pm)</p>
      </div>
      <div class="card contact-card3">
        <p><b>Get a Quote</b></p>
      </div>
    </div>
  </div>
</template>

<style>
.specialties-body {
  background-image: url("../assets/dotted map.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-color: white;
}

.brand-card {
  box-shadow: 5px 5px 15px 5px #e5e5e5;
  margin: 0 1.2rem 0 1.2rem;
  border-radius: 35px;
}
.aluminium {
  font-weight: 700;
  font-size: 50px;
  line-height: 59px;

  margin: 0 auto;
  width: 60%;

  color: #185fad;
}
.alum-text {
  font-weight: 700;
  font-size: 30px;
  line-height: 49px;
  padding: 1rem;
  color: #000000;
}
.big-heading {
  margin-left: 30px;
  font-weight: 700;
  font-size: 70px;
  line-height: 70px;
  letter-spacing: -1px;
  color: #185fad;
}
.specialty {
  padding: 4rem;
}
.sub-headings {
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #185fad;
}
.explain {
  font-weight: 700;
  font-size: 23px;
  line-height: 34px;
  color: #000000;
}
.contact-us {
  margin: 0 auto;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
}
.contact-card1 {
  border-radius: 10px;
  padding-top: 1rem;
  padding-left: 1rem;
  background: #185fad;
  color: white;
  font-size: 1rem;
  width: 330px;
}
.contact-card2 {
  width: 250px;
  padding-top: 1rem;
  padding-left: 1rem;
  border-radius: 10px;
  background: #185fad;
  color: white;
  font-size: 1rem;
}
.contact-card3 {
  width: 170px;
  padding-top: 1rem;
  padding-left: 1rem;
  border-radius: 10px;
  background: #185fad;
  color: white;
  font-size: 1rem;
}
</style>
