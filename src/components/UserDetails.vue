<script>
import { reactive } from 'vue';

export default {
  name: 'UserDetails',
  props: {
    user: Object,
  },
  setup(props) {
    const {avatar, car, city, country, description, email, gender, id, name, phone} = reactive(props.user);

    return {
      avatar,
      car,
      city,
      country,
      description,
      email,
      gender,
      id,
      name,
      phone
    }
  }
};
</script>

<template>
  <section class="details-container">
    <h1 class="details-title">User details</h1>
    <div class="user-details">
      <img :src="avatar" alt="User photo" class="details-avatar">
      <div class="details-info">
        <div class="details-name">{{name}}</div>
        <div class="details-gender">{{gender}}</div>
        <div class="details-car" v-show="car">Car: {{car}}</div>
        <div class="details-description" v-show="description">About: {{description}}</div>
      </div>
    </div>
    <div class="details-contacts">
      <div class="details-address" v-show="country || city">
        <font-awesome-icon :icon="['fas', 'location-dot']" class="details-icon"/>
        {{country}}, {{city}}
      </div>
      <div class="details-phone" v-show="phone">
        <font-awesome-icon :icon="['fas', 'phone-flip']" class="details-icon" />
        {{phone}}
      </div>
      <div class="details-email" v-show="email">
        <font-awesome-icon :icon="['fas', 'envelope']" class="details-icon" />
        {{email}}
      </div>
    </div>
  </section>
</template>

<style scoped>
.details-container {
  width: 600px;
  background-color: white;
  border: 3px solid #dcdbdb;
  border-radius: 10px;
  padding: 20px;
}

.details-title {
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 15px;
  padding-bottom: 20px;
  border-bottom: 2px solid #8d8c8c;
}

.user-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 2px solid #8d8c8c;
}

.details-avatar {
  border: 2px solid beige;
  border-radius: 25%;
  height: 150px;
  width: 150px;
  object-fit: cover;
}

.details-info {
  width: 60%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  color: #283149;
}

.details-name {
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
}

.details-car {
  font-size: 16px;
}

.details-description {
  font-size: 16px;
  color: dimgrey;
}

.details-contacts {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
}

.details-icon {
  margin-right: 8px;
  height: 22px;
  width: 22px;
}

</style>