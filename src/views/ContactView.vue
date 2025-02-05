<script setup>
import { ref } from "vue";

const message = ref("");

const submitForm = () => {
  alert(`Message sent: ${message.value}`);
  message.value = "";
};
</script>

<template>
  <div class="content">
    <section id="contact" class="active">
      <h2>Messagerie chiffré</h2>
      <form id="contact-form" @submit.prevent="submitForm">
        <p>
          Afin de me contacter, vous pouvez m'envoyer un mail sur :
          <strong>juliano.martins81000@gmail.com</strong>
        </p>

        <label for="message">Votre message :</label>
        <textarea id="message" v-model="message" rows="5" cols="50"></textarea>

        <br />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  </div>
</template>

<style scoped>
</style>
