<template>
  <table id="tableComponent" class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-for="field in fields" :key="field" @click="sortTable(field)">
          {{ field.columnName }}
          <i class="bi bi-sort-alpha-down" aria-label="Sort Icon"></i>
        </th>
        <th v-if="actionCol"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in dataList" :key="data">
        <td v-for="field in fields" :key="field">
          {{ data[field.fieldName] }}
        </td>
        <td v-if="actionCol"><button class="action-button">VIEW</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "TableComponent",
  props: {
    dataList: {
      type: Array,
    },
    fields: {
      type: Array,
    },
    actionCol: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
@import "@/style/buttons.scss";
</style>
