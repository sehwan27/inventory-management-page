<template>
  <div>
    aaa666
    <b-table striped hover :items="items" :fields="fields"></b-table>
    yy
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
      fields: [
        { key: 'age', label: 'Age' },
        { key: 'first_name', label: 'First Name' },
        { key: 'last_name', label: 'Last Name' },
      ],
    }
  },
};
</script>

<style></style>
