<script setup>
import { onMounted, ref } from 'vue';
import CreateRoomDialog from './CreateRoomDialog.vue';
import { getAllRooms } from '@/services/roomService';

const columns = [
  { header: 'ID', field: 'id' },
  { header: 'Name', field: 'name' },
  { header: 'Description', field: 'description' },
];

const createRoomDialog = ref(null);

let tableLoading = ref(false);
let rooms = ref([]);

onMounted(async () => {
  loadingAllRooms();
});

function openCreateRoomDialog() {
  if (createRoomDialog.value) {
    createRoomDialog.value.toggleDialog();
  }
}

async function loadingAllRooms() {
  tableLoading.value = true;

  const { data, error } = await getAllRooms();

  if (error) {
    console.error('Error loading rooms:', error);
  } else {
    rooms.value = data;
  }

  tableLoading.value = false;
}
</script>

<template>
  <div class="list-rooms">
    <CreateRoomDialog ref="createRoomDialog" />
    <DataTable stripedRows :loading="tableLoading" :value="rooms">
      <template #header>
        <div class="table-header">
          <Button icon="pi pi-plus" label="Create Room" @click="openCreateRoomDialog" />
        </div>
      </template>
      <Column v-for="col in columns" :field="col.field" :header="col.header" />
      <Column header="Actions" style="width: 10%">
        <template #body>
          <div class="action-buttons">
            <Button icon="pi pi-pencil" severity="info" />
            <Button icon="pi pi-trash" severity="danger" />
          </div>
        </template>
      </Column>
      <template #empty>
        <p class="empty-text">No rooms registered.</p>
      </template>
    </DataTable>
  </div>
</template>

<style scoped lang="scss">
.list-rooms {
  .table-header {
    display: flex;
    justify-content: flex-end;
  }

  .action-buttons {
    display: flex;
    gap: 0.5rem;
  }

  .empty-text {
    margin: 0;
    color: #888;
    font-style: italic;
  }
}
</style>
