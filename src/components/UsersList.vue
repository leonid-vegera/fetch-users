<script>
import UserItem from '@/components/UserItem.vue';

export default {
  name: 'UsersList',
  components: { UserItem },
  props: {
    users: Array,
    removeUser: Function,
    selectUser: Function,
  },
}

</script>

<template>
  <div class="users-list">
    <h1 class="user-list-notice" v-if="!users.length">
      There is no users to show
    </h1>
    <TransitionGroup name="list" tag="section">
      <UserItem
          v-for="user in users"
          :key="user.id"
          :user="user"
          :removeUser="removeUser"
          :selectUser="selectUser"
      />
    </TransitionGroup>
  </div>

</template>

<style scoped>
.users-list {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  max-width: 900px;
}

@media (max-width: 930px) {
  .users-list {
    margin-inline: 15px;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  max-height: 0;
  transform: scaleY(0);
}
</style>