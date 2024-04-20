
<template>
  <contact-form :id="id" />
</template>

<script>
import { useRoute } from 'vue-router';
import ContactForm from './ContactForm.vue';

export default {
  components: {
    ContactForm
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    return { id };
  }
}
</script>
