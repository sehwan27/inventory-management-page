<template>
  <div>
    <TopNav />
    <div class="row w-100 mt-5">
      <div class="col-md-6 d-flex align-items-center">
        <div class="container">
          <h2 class="about-slogan">
            Integrate your business -> automate your work
          </h2>
          <p class="about-description">
            Evolve at the speed and scale of your business with the leader in
            low-code-automation
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-container">
          <img src="../assets/login.jpg" alt="" />
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style lang="scss">
.img-container {
  width: 100%;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 20px;
  }
}

.about-slogan {
  font-weight: bold;
  font-size: 50px;
  text-align: left;
}

.about-description {
  text-align: left;
  font-weight: 700;
}
</style>
