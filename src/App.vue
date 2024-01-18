<template>
  <Modal v-if="selectedUser" @closeModal="closeModal">
    <UserDetails :user="selectedUser" @click.stop/>
  </Modal>
  <Modal v-else-if="newUserFormIsOpened" @closeModal="closeModal">
    <NewUserForm @closeForm="closeModal" @reloadUsers="getUsersFromServer" @click.stop/>
  </Modal>
  <div class="app-container">
    <div class="app-header">
      <SearchComponent v-model="searchText" @clearSearchField="clearSearchField"/>
      <button class="add-user-button" @click="openNewUserFrom">ADD USER</button>
    </div>
    <UsersList :users="filteredUsers" :removeUser="removeUser" :selectUser="selectUser"/>
  </div>
</template>

<script>
import { deleteUser, getUsers } from '@/api/users';
import { computed, onMounted, ref } from 'vue';
import UsersList from '@/components/UsersList.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import Modal from '@/components/Modal.vue';
import UserDetails from '@/components/UserDetails.vue';
import NewUserForm from '@/components/NewUserForm.vue';

export default {
  name: 'App',
  components: {
    NewUserForm,
    UserDetails,
    Modal,
    SearchComponent,
    UsersList,
  },
  setup() {
    const fetchedUsers = ref([]);
    const searchText = ref('');
    const selectedUser = ref(null);
    const newUserFormIsOpened = ref(false);

    const filteredUsers = computed(() => {
      return fetchedUsers.value.filter(user => {
        const userData = [user.name.toLowerCase(), user.email.toLowerCase()];
        return userData.some(data => data.includes(searchText.value.toLowerCase()))
      });
    });

    const getUsersFromServer = async () => {
      const {data} = await getUsers();
      fetchedUsers.value = data;
    }

    onMounted(() => {
      try {
        getUsersFromServer();
      } catch(e) {
        console.log('Error download users:', e);
      }
    })

    async function removeUser(userId) {
      try {
        await deleteUser(userId);
        await getUsersFromServer();
      } catch(e) {
        console.log('Error download users:', e);
      }
    }

    function clearSearchField() {
      searchText.value = '';
    }

    function selectUser(userId) {
      const pickedUser = filteredUsers.value.find(user => {
        return user.id === userId
      });
      selectedUser.value = pickedUser;
    }

    function closeModal() {
      selectedUser.value = null;
      newUserFormIsOpened.value = false;
    }

    function openNewUserFrom() {
      newUserFormIsOpened.value = true;
    }

    return {
      fetchedUsers,
      removeUser,
      searchText,
      clearSearchField,
      filteredUsers,
      selectedUser,
      selectUser,
      closeModal,
      openNewUserFrom,
      newUserFormIsOpened,
      getUsersFromServer,
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
  min-width: 505px;
}
</style>
