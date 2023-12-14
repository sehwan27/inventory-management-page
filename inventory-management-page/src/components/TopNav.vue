<template>
  <div>
    <div class="title-container">
      <span style="font-family: sans-serif;">
        <span class="mb-0 me-2 inventory-text">INVENTORY</span>
        <span class="management-text">MANAGEMENT</span>
        </span
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
@import "@/style/navigation.scss";

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
