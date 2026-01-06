<script setup>
import { ref } from 'vue';

const showModal = ref(false);

function toggleDialog() {
  if (showModal.value) showModal.value = false;
  else showModal.value = true;
}

defineExpose({ toggleDialog });
</script>

<template>
  <div class="create-room-dialog">
    <Dialog v-model:visible="showModal" header="Create a New Room" modal>
      <div class="create-room-dialog-content">
        <div class="field">
          <label for="room-name-input">Room Name</label>
          <InputText id="room-name-input" placeholder="Insert Room Name" type="text" />
        </div>
        <div class="field">
          <label for="room-name-input">Room Description</label>
          <InputText id="room-name-input" placeholder="Insert Room Description" type="text" />
        </div>
      </div>
      <template #footer>
        <Button label="Cancel" severity="secondary" @click="toggleDialog" />
        <Button label="Confirm" />
      </template>
    </Dialog>
  </div>
</template>

<style lang="scss">
.create-room-dialog {
  &-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      label {
        font-size: 0.875rem;
      }
    }
  }
}
</style>
