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
      <div>
        <label for="room-name-input">Room Name</label>
        <InputText id="room-name-input" placeholder="Insert Room Name" type="text" />
      </div>
      <template #footer>
        <Button label="Cancel" severity="secondary" @click="toggleDialog" />
        <Button label="Confirm" />
      </template>
    </Dialog>
  </div>
</template>
