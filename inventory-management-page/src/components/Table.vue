<template>
  <table
    id="tableComponent"
    class="table table-bordered table-striped table-hover"
  >
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
      <tr v-if="!dataList || dataList.length === 0">
        <td :colspan="fields.length + 1">No data found</td>
      </tr>
      <tr v-for="data in dataList" :key="data" v-else>
        <td v-for="field in fields" :key="field">
          {{ data[field.fieldName] }}
        </td>
        <td v-if="actionCol">
          <slot :data="data"></slot>
        </td>
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
