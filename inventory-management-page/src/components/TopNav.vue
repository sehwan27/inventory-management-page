<template>
  <div>
    <div class="title-container">
      <span style="font-family: sans-serif">
        <span class="mb-0 me-2 inventory-text">INVENTORY</span>
        <span class="management-text">MANAGEMENT</span>
      </span>
      <span class="float-end">
        <router-link to="/login" class="nav-link">
          <font-awesome-icon :icon="['fas', 'right-to-bracket']"
        /></router-link>
      </span>
    </div>

    <div class="navbar" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/category" class="nav-link">Category</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/product" class="nav-link">Product</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
@import "@/style/navigation.scss";

.navbar {
  background-color: $primary-1;
}

.nav-link,
.nav-item {
  width: fit-content;
  color: white;
}

.navbar-nav {
  flex-direction: row;
}

.nav-item {
  padding: 5px 10px;
}

.inventory-text {
  color: $primary-1;
  font-weight: 900;
  font-size: 20px;
}

.management-text {
  color: $primary-2;
  font-weight: bold;
}
</style>
