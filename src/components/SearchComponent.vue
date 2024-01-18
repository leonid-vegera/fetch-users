<script>
export default {
  name: "SearchComponent",
  props: {
    modelValue: String,
  },
  emit: ['clearSearchField'],
  setup(props, context) {
    function clearField() {
      context.emit('clearSearchField', null);
    }
    return {
      clearField,
    }
  }
}

</script>

<template>
  <div class="search-section">
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" class='search-icon' />
    <input
        type="text"
        class='search-input'
        placeholder='Enter name or email to find user'
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value.trimLeft())"
    />
    <font-awesome-icon
        :icon="['fas', 'xmark']"
        v-show="modelValue"
        class='close-icon'
        @click="clearField"
    />
  </div>
</template>

<style scoped>
.search-section {
  width: 100%;
  min-width: 220px;
  max-width: 40vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 8px;
  border-radius: 5px;
}

.search-icon {
  pointer-events: none;
}

.search-input {
  flex: 1 0 fit-content;
  outline: none;
  border: none;
  font-size: 14px;
  color: #283149;
  padding-left: 8px;
}

.close-icon {
  cursor: pointer;
}

.close-icon:hover {
  transform: scale(1.2);
}
</style>