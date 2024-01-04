<template>
  <div class="row w-100">
    <div class="col-md-7">
        <div class="login-img-container">

            <img src="../assets/login.jpg" alt="">
        </div>
    </div>
    <div class="col-md-5 d-flex align-items-center mt-5">
      <div class="container">
        <h3>Welcome back!</h3>
        <p>Please enter your details</p>

        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            name="password"
            id="passwordInput"
            class="form-control"
            placeholder=""
          />
          <label for="passwordInput" id="password">Password</label>
        </div>
        <div class="w-100 text-end">

            <router-link to="/forgot-password" class="forgot-password-link">Forgot Password?</router-link>
        </div>

        <div class="w-100"><button class="login-button">Log In</button></div>

        <div class="mt-3">

            <span>
                <span style="font-size: 13px;">Don't have an account?</span>
                <router-link to="/signup" class="sign-up-link"> Sign Up</router-link>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/style/buttons.scss";

.login-img-container {
    width: 100%;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
}

.sign-up-link {
    margin-top: 30px;
}

.forgot-password-link {
    text-decoration: none;
    font-size: 13px;
    color: #515151cc;
}
</style>
