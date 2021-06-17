<script>
// @ts-check
import VUserSearchForm from "@/components/VUserSearchForm.vue";
import VUserProfile from "@/components/VUserProfile.vue";

export default {
  name: "UserView",
  components: {
    VUserSearchForm,
    VUserProfile,
  },
  computed: {
    /** @return {import('@/types').User} */
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    /**
     * @param {string} username
     */
    searchUser(username) {
      this.$store.dispatch("SEARCH_USER", { username });
    },
  },
};
</script>

<template>
  <div>
    <VUserSearchForm @submitted="searchUser" />
    <VUserProfile v-if="user" :user="user" />
  </div>
</template>
