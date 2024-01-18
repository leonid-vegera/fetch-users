<script>
import { onMounted, onUnmounted } from 'vue';

export default {
  name: 'Modal',
  emits: ['closeModal'],
  setup(props, {emit}) {
    function close(event) {
      event.stopPropagation();
      emit('closeModal', null);
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        emit('closeModal', null);
      }
    }

    onMounted(() => {
      document.addEventListener('keydown', handleKeyDown)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', handleKeyDown)
    })

    return {
      close,
    }
  }
};
</script>

<template>
<div class="modal" @click="close($event)" @keyup.esc="close($event)">
  <slot></slot>
</div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>