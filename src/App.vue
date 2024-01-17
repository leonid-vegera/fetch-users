<template>
  <div class="app-header">
    <SearchComponent/>
    <button class="add-user-button">ADD USER</button>
  </div>
  <UsersList :users="fetchedUsers" :removeUser="removeUser"/>
</template>

<script>
import { deleteUser, getUsers } from '@/api/users';
import { onMounted, ref } from 'vue';
import UsersList from '@/components/UsersList.vue';
import SearchComponent from '@/components/SearchComponent.vue';

export default {
  name: 'App',
  components: {
    SearchComponent,
    UsersList,
  },
  setup() {
    const fetchedUsers = ref([]);

    onMounted(async() => {
      try {
        const {data} = await getUsers();
        console.log('data', data);
        // fetchedUsers.value = data.data;
        fetchedUsers.value = data;
      } catch(e) {
        console.log('Some error occurred while data downloaded');
      }
    })

    async function removeUser(userId) {
      try {
        await deleteUser(userId);
        const {data} = await getUsers();
        // fetchedUsers.value = data.data;
        fetchedUsers.value = data;
      } catch(e) {
        console.log('Some error occurred while data downloaded');
      }
    }

    return {
      fetchedUsers,
      removeUser,
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.app-header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.9;
  background-color: #9bc2e5;
  border-bottom: 3px solid #d2e5f5;
  z-index: 999;
  padding: 10px 20px;
}

.add-user-button {
  padding: 10px 20px;
  border: 3px solid transparent;
  border-radius: 10px;
  font-size: 18px;
  min-width: fit-content;
  color: white;
  background-color: #1161a8;
  cursor: pointer;
  transition: opacity 0.5s ease;
}

.add-user-button:hover {
  opacity: 0.8;
  border-color: #173c5e;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
