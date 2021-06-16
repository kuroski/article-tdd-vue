<script>
// @ts-check

export default {
  name: "UserSearchForm",
  data() {
    return {
      username: "",
    };
  },
};
</script>

<template>
  <form @submit.prevent="$emit('submitted', username)">
    <el-input
      v-model="username"
      placeholder="Pesquise o usuário"
      class="search-form__input"
    >
      <el-button
        slot="append"
        class="search-form__button"
        native-type="submit"
        icon="el-icon-search"
      ></el-button>
    </el-input>
  </form>
</template>
