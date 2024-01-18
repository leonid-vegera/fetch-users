<script>
import { reactive } from 'vue';

export default {
  name: 'UserItem',
  props: {
    user: Object,
    removeUser: Function,
    selectUser: Function,
  },
  setup(props) {
    const {email, avatar, id, name} = reactive(props.user);

    const pickUser = () => {
      props.selectUser(id)
    }

    return {
      email,
      avatar,
      id,
      name,
      deleteUser: () => props.removeUser(id),
      pickUser,
    }
  }
}

</script>

<template>
<div class="user-item">
  <div class="user-data">
    <h1 class="user-name" @click="pickUser(id)" title="Click to get full information">{{name}}</h1>
    <p class="user-email">{{email}}</p>
  </div>
  <div class="user-images">
    <img :src="avatar" alt="" class="user-image">
    <font-awesome-icon class="user-remove" :icon="['fas', 'trash-can']" @click="deleteUser(id)" />
  </div>
</div>
</template>

<style scoped>
.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: aliceblue;
  border: 3px solid #d2e5f5;
  border-radius: 20px;
  transition: all .7s ease;
  margin-bottom: 10px;
  max-height: 143px;
}

.user-item:hover {
  .user-remove {
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
  }

  .user-remove:hover {
    transform: scale(1.2);
  }

  .user-image{
    transition: all 0.9s ease;
    transform: translateX(-40px);
  }
}

.user-data {
  min-width: 300px;
}

.user-name {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.5s;
}

.user-name:hover {
  text-decoration: underline;
}

.user-email {
  margin: 0;
  color: dimgrey;
}

.user-images {
  display: flex;
  align-items: center;
  position: relative;
}

.user-image {
  height: 128px;
  width: 128px;
  object-fit: cover;
  position: relative;
  border-radius: 50%;
  transition: all 0.9s ease;
}

.user-remove {
  transition: all .5s ease;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  right: 0;
  cursor: pointer;
  width: 25px;
  height: 25px;
  transform: scale(0.5);
}

</style>