<script setup>
const columns = [
  { header: 'ID', field: 'id' },
  { header: 'Name', field: 'name' },
  { header: 'Descrição', field: 'description' },
];
</script>

<template>
  <div class="list-device-groups">
    <DataTable>
      <template #header>
        <div class="table-header">
          <Button icon="pi pi-plus" label="Create Room" />
        </div>
      </template>
      <Column v-for="col in columns" :field="col.field" :header="col.header" />
      <template #empty>
        <p class="empty-text">No rooms registered.</p>
      </template>
    </DataTable>
  </div>
</template>

<style scoped lang="scss">
.list-device-groups {
  .table-header {
    display: flex;
    justify-content: flex-end;
  }

  .empty-text {
    margin: 0;
    color: #888;
    font-style: italic;
  }
}
</style>
