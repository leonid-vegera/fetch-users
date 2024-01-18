<script>
import { v4 as uuidv4 } from 'uuid';
import { reactive } from 'vue';
import { createData } from '@/utils/createData';
import { createUser } from '@/api/users';

export default {
  name: 'NewUserForm',
  emits: ['closeForm', 'reloadUsers'],
  setup(props, {emit}) {
    const newUser = reactive({
      name: '',
      email: '',
      gender: '',
      car: '',
      phone: '',
      country: '',
      city: '',
      avatar: '',
      description: '',
    })

    function close() {
      emit('closeForm', null);
    }

    function handleSubmit(newUser, event) {
      event.preventDefault();
      const id = uuidv4();
      const createdAt = createData();
      const user = {...newUser, id, createdAt};
      createUser(user)
          .then(() => {
            emit('reloadUsers');
            close();
          })
          .catch((err) => console.error('Error creating user:', err))
    }

    return {
      newUser,
      close,
      handleSubmit,
    }
  }
};
</script>

<template>
  <form
      class="form-container"
      @submit="handleSubmit(newUser, $event)"
      >
    <h1 class="form-title">Add new user</h1>

    <section class="form-section">
      <label class="form-label" for='name'>
        Name
      </label>
      <input
          type="text"
          class="form-input"
          required
          id="name"
          name="name"
          placeholder="Add first and last name"
          v-model.trim="newUser.name"
          />
    </section>

    <section class="form-section">
      <label class="form-label" for='email'>
        E-mail
      </label>
      <input
          type="email"
          class="form-input"
          required
          id="email"
          name="email"
          placeholder="Add user`s email"
          v-model.trim="newUser.email"
      />
    </section>

    <section class="form-section">
      <label class="form-label" for='phone'>
        Phone
      </label>
      <input
          type="tel"
          class="form-input"
          id="phone"
          name="phone"
          placeholder="Add user`s phone"
          v-model.trim="newUser.phone"
      />
    </section>

    <section class="form-section">
      <label class="form-label" for='gender'>
        Gender
      </label>
      <input
          type="text"
          class="form-input"
          id="gender"
          name="gender"
          placeholder="Add user`s gender"
          v-model.trim="newUser.gender"
      />
    </section>

    <section class="form-section">
      <label class="form-label" for='car'>
        Car
      </label>
      <input
          type="text"
          class="form-input"
          id="car"
          name="car"
          placeholder="Add user`s car"
          v-model.trim="newUser.car"
      />
    </section>

    <section class="form-section">
      <label class="form-label" for='country'>
        Country
      </label>
      <input
          type="text"
          class="form-input"
          id="country"
          name="country"
          placeholder="Add user`s country"
          v-model.trim="newUser.country"
      />
    </section>

    <section class="form-section">
      <label class="form-label" for='city'>
        City
      </label>
      <input
          type="text"
          class="form-input"
          id="city"
          name="city"
          placeholder="Add user`s city"
          v-model.trim="newUser.city"
      />
    </section>

    <section class="form-section">
      <label class="form-label" for='avatar'>
        Avatar
      </label>
      <input
          type="text"
          class="form-input"
          id="avatar"
          name="avatar"
          placeholder="Add user`s avatar with URL from the web"
          v-model.trim="newUser.avatar"
      />
    </section>

    <section class="form-section">
      <label class="form-label" for='description'>
        Description
      </label>
      <textarea
          class="form-input"
          id="description"
          name="description"
          placeholder="Add description about user"
          v-model.trim="newUser.description"
      />
    </section>

    <section  class="form-section">
      <div class="form-buttons">
        <button
            class="form-button form-button--cancel"
            type="button"
            @click="close"
            >
          Cancel
        </button>
        <button
            class="form-button form-button--save"
            type="submit"
        >
          Save
        </button>
      </div>
    </section>
  </form>
</template>

<style scoped>
.form-container {
  width: 600px;
  background-color: white;
  border: 3px solid #dcdbdb;
  border-radius: 10px;
  padding: 20px;
}

.form-title {
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 15px;
  padding-bottom: 20px;
  border-bottom: 2px solid #8d8c8c;
}

.form-section {
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: baseline;
  text-align: left;
  margin: 0 10px 20px;
}

.form-section:last-child {
  margin-bottom: 0;
}

.form-input {
  flex-grow: 1;
  padding: 0 10px;
  border-radius: 5px;
  outline: none;
  background-color: aliceblue;
  border: 2px solid transparent;
  width: 100px;
  height: 30px;
}

.form-input:hover {
  border-color: #d2e5f5;
}

.form-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 4px;
}

.form-button {
  width: fit-content;
  min-width: 100px;
  border: 3px solid transparent;
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.5s ease;
}

.form-button:hover {
  opacity: 0.9;
  border-color: rgba(115, 115, 185, 0.8);
}

.form-button--cancel {
  background-color: lightcoral;
}

.form-button--save {
  background-color: #369a36;
}

textarea.form-input {
  padding: 10px;
  height: 90px;
  resize: none;
  font-family: Arial;
}

</style>