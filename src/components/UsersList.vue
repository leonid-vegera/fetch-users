<script>
import UserItem from '@/components/UserItem.vue';

export default {
  name: 'UsersList',
  components: { UserItem },
  props: {
    users: Array,
    removeUser: Function,
  },
}

</script>

<template>
  <div class="users-list">
    <TransitionGroup name="list" tag="section">
      <UserItem v-for="user in users" :key="user.id" :user="user" :removeUser="removeUser"/>
    </TransitionGroup>
  </div>

</template>

<style scoped>
.users-list {
  //min-height: fit-content;
  //width: 60vw;
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  max-height: 60px;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  max-height: 0;
  transform: scaleY(0);
}
</style>