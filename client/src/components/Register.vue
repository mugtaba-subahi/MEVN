<template>
  <div>
    <input type="text" v-model="input">
    <button @click="send"> Submit </button>
  </div>
</template>

<script>
import AuthenticationService from './../services/AuthenticationService';

export default {
  data() {
    return {
      input: ''
    };
  },
  methods: {
    async send() {
      const response = await AuthenticationService.register({
        email: this.input
      });
    }
  }
};
</script>

<style>

</style>
