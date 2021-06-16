<script>
// @ts-check

/**
 * @typedef {import('@/types').User} User
 */

export default {
  name: "UserProfile",
  props: {
    /** @type {import('vue').PropOptions<User>} */
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="user-profile">
    <img class="user-profile__avatar" :src="user.avatarUrl" />
    <div class="user-profile__name">
      {{ user.name }}
    </div>
    <div class="user-profile__bio">
      {{ user.bio }}
    </div>
  </div>
</template>

<style scoped>
.user-profile {
  border-top: solid 1px #ccc;
  padding-top: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-profile__avatar {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.user-profile__name {
  margin-top: 14px;
  font-size: 24px;
  font-family: "Bungee", cursive;
  text-transform: uppercase;
}
.user-profile__bio {
  margin-top: 14px;
  font-family: "Open Sans", sans-serif;
}
</style>
