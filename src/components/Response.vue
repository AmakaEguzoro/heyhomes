<template>
  <div class="card form-place">
    <div class="side-form">
      <div class="form">
        <input type="text" id="name" class="form-input" autocomplete="off" />
        <label for="name" class="form-label">Your Name</label>
      </div>
      <br />
      <br />
      <div class="form">
        <input type="text" id="email" class="form-input" autocomplete="off" />
        <label for="email" class="form-label">Email Address</label>
      </div>
      <br />
      <br />
      <div class="form">
        <input type="text" id="phone" class="form-input" autocomplete="off" />
        <label for="phone" class="form-label">Phone number</label>
      </div>
      <br />
      <br />
      <div class="form msg-form">
        <input type="text" id="msg" class="form-input" autocomplete="off" />
        <label for="msg" class="form-label">Message</label>
      </div>
    </div>
    <br />
    <button class="btn message-btn" type="submit">Send Message</button>
  </div>
</template>

<style>
:root {
  --primary: #06a5a5;
  --primary-light: #5cd3d3;
  --primary-dark: #185fad;
  --gray100: #f9fbff;
  --gray150: #f4f6fb;
  --gray200: #eef1f6;
  --gray300: #e1e5ee;
  --gray400: #767b91;
  --gray500: #4f546c;
  --gray600: #2a324b;
  --gray700: #161d34;
  --bg: #060b23;
}

.side-form,
.side-form::before,
.side-form::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.form-place {
  background-color: white;
  padding: 4rem;
  border-radius: 10px;
  width: 70%;
}
.side-form {
  font-family: "Convergence", sans-serif;
  /* height: 100vh; */
  display: grid;
  font-size: 1.2rem;
}
.form {
  position: relative;
  width: 20rem;
  height: 3rem;
}
.form input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--primary-dark);
  border-radius: 0.5rem;
  font-family: inherit;
  font-size: inherit;
  color: var(--bg);
  outline: none;
  padding: 1.25rem;
  background: none;
}
.form input:hover {
  border-color: var(--primary-light);
}
.form input:focus {
  border-color: var(--primary);
}
.form label {
  position: absolute;
  left: 1rem;
  top: 0.8rem;
  padding: 0 0.5rem;
  color: var(--bg);
  cursor: text;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: white;
}

.form-input:focus ~ .form-label,
.form-input:not(:focus) ~ .form-label {
  top: -0.5rem;
  font-size: 0.8rem;
  left: 0.8rem;
}
.msg-form {
  height: 170px;
}
.message-btn {
  background: #185fad;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.13);
  border-radius: 15px;
  width: 200px;
  height: 40px;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  border: none;
}

@media screen and (max-width: 480px) {
  .form-place {
    margin-top: 30px;
    background-color: white;
    padding: 2rem;
    width: 100%;
  }
  .side-form {
    font-family: "Convergence", sans-serif;
    display: grid;
    font-size: 1.2rem;
  }
  .form {
    position: relative;
    width: 16rem;
    height: 3rem;
  }
}
</style>
