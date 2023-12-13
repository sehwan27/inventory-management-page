<template>
  <table id="tableComponent" class="table table-bordered table-striped">
    <thead>
      <tr>
        <!-- loop through each value of the fields to get the table header -->
        <th v-for="field in fields" :key="field" @click="sortTable(field)">
          {{ field }}
          <i class="bi bi-sort-alpha-down" aria-label="Sort Icon"></i>
        </th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="data in studentData" :key="data">
          <td>{{ data['name'] }}</td>
        </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "TableComponent",
  props: {
    //
    studentData: {
      type: Array,
    },
    fields: {
      type: Array,
    },
  },
};
</script>
